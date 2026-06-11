'use client';

import { useState } from 'react';
import Link from 'next/link';
import questionsData from '@/content/quiz-questions.json';

interface QuizProps {
  locale: string;
}

export default function BodyTypeQuiz({ locale }: QuizProps) {
  const questions = questionsData.questions;
  const totalQuestions = questions.length;
  const localeKey = locale as 'zh' | 'en';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setAnswers([]);
    setShowResult(false);
  };

  // Calculate result
  if (showResult) {
    const totalScore = answers.reduce((sum, val) => sum + val, 0);
    const maxScore = totalQuestions * 5;
    const ratio = totalScore / maxScore;

    const result = ratio > 0.6
      ? questionsData.results.high_score
      : questionsData.results.low_score;

    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🌿</div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {locale === 'zh' ? '您的体质测试结果' : 'Your Body Type Result'}
            </h1>
            <p className="text-xl text-green-600 font-semibold mt-4">
              {result.type[localeKey]}
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-gray-800 mb-2">
              {locale === 'zh' ? '体质特征' : 'Description'}
            </h2>
            <p className="text-gray-700">{result.description[localeKey]}</p>
          </div>

          <div className="bg-amber-50 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-gray-800 mb-2">
              {locale === 'zh' ? '养生建议' : 'Suggestions'}
            </h2>
            <p className="text-gray-700">{result.suggestions[localeKey]}</p>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 mb-6 text-sm text-gray-600">
            <p>⚠️ {locale === 'zh'
              ? '温馨提示：本测试仅供健康参考，不能替代医疗诊断。如有健康疑虑，请咨询专业医疗人员。'
              : 'Disclaimer: This test is for health reference only and does not replace medical diagnosis.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
            >
              {locale === 'zh' ? '重新测试' : 'Retake Quiz'}
            </button>
            <Link
              href={`/${locale}/knowledge`}
              className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition text-center font-medium"
            >
              {locale === 'zh' ? '浏览知识库' : 'Browse Knowledge'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {locale === 'zh' ? '体质测试' : 'Body Type Quiz'}
          </h1>
          <p className="text-gray-500">
            {locale === 'zh'
              ? `问题 ${currentIndex + 1} / ${totalQuestions}`
              : `Question ${currentIndex + 1} / ${totalQuestions}`}
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="bg-green-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-lg md:text-xl text-gray-800 mb-6">
            {currentQuestion.text[localeKey]}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full p-4 text-left bg-gray-50 hover:bg-green-50 border-2 border-gray-200 hover:border-green-400 rounded-xl transition"
              >
                {option.text[localeKey]}
              </button>
            ))}
          </div>
        </div>

        {/* Back button */}
        {currentIndex > 0 && (
          <button
            onClick={handleBack}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            ← {locale === 'zh' ? '返回上一题' : 'Previous'}
          </button>
        )}
      </div>
    </div>
  );
}
