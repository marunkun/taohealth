'use client';

import { useState } from 'react';
import Link from 'next/link';

interface QuizProps {
  locale: string;
}

const questionsData = {
  questions: [
    {
      text: {
        zh: '您平时容易感到疲劳吗？',
        en: 'Do you often feel tired?'
      },
      options: [
        { text: { zh: '经常感到疲劳', en: 'Often tired' }, value: 3 },
        { text: { zh: '偶尔感到疲劳', en: 'Occasionally tired' }, value: 2 },
        { text: { zh: '很少感到疲劳', en: 'Rarely tired' }, value: 1 },
        { text: { zh: '从不感到疲劳', en: 'Never tired' }, value: 0 },
        { text: { zh: '总是感到疲劳', en: 'Always tired' }, value: 4 }
      ]
    },
    {
      text: {
        zh: '您的面色看起来？',
        en: 'What does your complexion look like?'
      },
      options: [
        { text: { zh: '苍白或萎黄', en: 'Pale or sallow' }, value: 3 },
        { text: { zh: '偏红', en: 'Slightly red' }, value: 2 },
        { text: { zh: '正常红润', en: 'Normal and rosy' }, value: 1 },
        { text: { zh: '暗淡无光', en: 'Dull' }, value: 3 },
        { text: { zh: '红润有光泽', en: 'Bright and rosy' }, value: 0 }
      ]
    },
    {
      text: {
        zh: '您平时喜欢喝冷饮还是热饮？',
        en: 'Do you prefer cold or hot drinks?'
      },
      options: [
        { text: { zh: '喜欢冷饮', en: 'Prefer cold drinks' }, value: 3 },
        { text: { zh: '冷热都可以', en: 'Either is fine' }, value: 1 },
        { text: { zh: '喜欢热饮', en: 'Prefer hot drinks' }, value: 0 },
        { text: { zh: '不喜欢喝水', en: 'Don\'t like water' }, value: 2 },
        { text: { zh: '大量饮水', en: 'Drink lots of water' }, value: 1 }
      ]
    },
    {
      text: {
        zh: '您的大便通常是？',
        en: 'What is your stool like?'
      },
      options: [
        { text: { zh: '稀溏不成形', en: 'Loose and unformed' }, value: 3 },
        { text: { zh: '有时成形有时不成形', en: 'Sometimes formed' }, value: 2 },
        { text: { zh: '成形且规律', en: 'Well-formed and regular' }, value: 0 },
        { text: { zh: '干结', en: 'Dry and hard' }, value: 3 },
        { text: { zh: '黏腻', en: 'Sticky' }, value: 2 }
      ]
    },
    {
      text: {
        zh: '您容易出汗吗？',
        en: 'Do you sweat easily?'
      },
      options: [
        { text: { zh: '容易出汗，尤其是自汗', en: 'Easily sweat' }, value: 3 },
        { text: { zh: '出汗正常', en: 'Normal sweating' }, value: 1 },
        { text: { zh: '很少出汗', en: 'Rarely sweat' }, value: 0 },
        { text: { zh: '夜间盗汗', en: 'Night sweats' }, value: 3 },
        { text: { zh: '不出汗', en: 'No sweating' }, value: 2 }
      ]
    },
    {
      text: {
        zh: '您的性格偏向？',
        en: 'What is your personality like?'
      },
      options: [
        { text: { zh: '内向、安静', en: 'Introverted, quiet' }, value: 1 },
        { text: { zh: '适中', en: 'Neutral' }, value: 0 },
        { text: { zh: '外向、活泼', en: 'Extroverted, lively' }, value: 1 },
        { text: { zh: '急躁', en: 'Impatient' }, value: 2 },
        { text: { zh: '平和', en: 'Calm' }, value: 0 }
      ]
    },
    {
      text: {
        zh: '您容易感冒吗？',
        en: 'Do you catch colds easily?'
      },
      options: [
        { text: { zh: '经常感冒', en: 'Often catch colds' }, value: 3 },
        { text: { zh: '偶尔感冒', en: 'Occasionally catch colds' }, value: 1 },
        { text: { zh: '很少感冒', en: 'Rarely catch colds' }, value: 0 },
        { text: { zh: '一年感冒一次', en: 'Once a year' }, value: 1 },
        { text: { zh: '几乎不感冒', en: 'Hardly ever' }, value: 0 }
      ]
    },
    {
      text: {
        zh: '您的睡眠质量如何？',
        en: 'How is your sleep quality?'
      },
      options: [
        { text: { zh: '不易入睡或易醒', en: 'Hard to fall asleep' }, value: 3 },
        { text: { zh: '睡眠一般', en: 'Average sleep' }, value: 2 },
        { text: { zh: '睡眠很好', en: 'Good sleep' }, value: 0 },
        { text: { zh: '多梦', en: 'Dreamy sleep' }, value: 2 },
        { text: { zh: '睡不醒', en: 'Sleepy all day' }, value: 2 }
      ]
    },
    {
      text: {
        zh: '您平时的食欲如何？',
        en: 'What is your appetite like?'
      },
      options: [
        { text: { zh: '食欲不振', en: 'Poor appetite' }, value: 3 },
        { text: { zh: '食欲一般', en: 'Average appetite' }, value: 1 },
        { text: { zh: '食欲很好', en: 'Good appetite' }, value: 0 },
        { text: { zh: '暴饮暴食', en: 'Overeat' }, value: 2 },
        { text: { zh: '挑食', en: 'Picky eater' }, value: 2 }
      ]
    }
  ],
  results: {
    high_score: {
      type: { zh: '气虚体质', en: 'Qi Deficiency' },
      description: {
        zh: '您属于气虚体质。这类体质的人容易疲劳、气短、自汗，需要补气养生。',
        en: 'You have a Qi Deficiency constitution. People with this constitution tend to feel tired easily, have shortness of breath, and spontaneous sweating.'
      },
      suggestions: {
        zh: '多吃补气食物：黄芪、党参、山药、红枣。适当进行温和运动：散步、太极拳。保证充足睡眠，避免过度劳累。',
        en: 'Eat Qi-nourishing foods: Astragalus, Codonopsis, Yam, Red Dates. Practice gentle exercises: Walking, Tai Chi. Get enough sleep, avoid overexertion.'
      }
    },
    low_score: {
      type: { zh: '平和体质', en: 'Balanced Constitution' },
      description: {
        zh: '恭喜！您属于平和体质。这是最健康的体质类型，阴阳平衡，身体机能良好。',
        en: 'Congratulations! You have a Balanced constitution. This is the healthiest constitution type with balanced Yin and Yang.'
      },
      suggestions: {
        zh: '保持均衡饮食，坚持适度运动，保持良好的生活习惯，继续保持健康状态。',
        en: 'Maintain balanced diet, keep moderate exercise, maintain good living habits.'
      }
    }
  }
};

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

        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="bg-green-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

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
