'use client';

import { useState } from 'react';

interface QuizProps {
  locale: string;
}

const questions = {
  zh: [
    {
      question: '您平时容易感到疲劳吗？',
      options: [
        { value: 'a', label: '经常感到疲劳，稍微活动就累' },
        { value: 'b', label: '偶尔感到疲劳' },
        { value: 'c', label: '很少感到疲劳' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: '您的面色看起来？',
      options: [
        { value: 'a', label: '苍白或萎黄' },
        { value: 'b', label: '偏红' },
        { value: 'c', label: '正常红润' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: '您平时喜欢喝冷饮还是热饮？',
      options: [
        { value: 'a', label: '喜欢冷饮' },
        { value: 'b', label: '冷热都可以' },
        { value: 'c', label: '喜欢热饮' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: '您的大便通常是？',
      options: [
        { value: 'a', label: '稀溏不成形' },
        { value: 'b', label: '有时成形有时不成形' },
        { value: 'c', label: '成形且规律' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: '您容易出汗吗？',
      options: [
        { value: 'a', label: '容易出汗，尤其是自汗' },
        { value: 'b', label: '出汗正常' },
        { value: 'c', label: '很少出汗' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: '您的性格偏向？',
      options: [
        { value: 'a', label: '内向、安静' },
        { value: 'b', label: '适中' },
        { value: 'c', label: '外向、活泼' },
      ],
      scores: { a: 1, b: 0, c: -1 },
    },
    {
      question: '您容易感冒吗？',
      options: [
        { value: 'a', label: '经常感冒' },
        { value: 'b', label: '偶尔感冒' },
        { value: 'c', label: '很少感冒' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: '您的睡眠质量如何？',
      options: [
        { value: 'a', label: '不易入睡或易醒' },
        { value: 'b', label: '睡眠一般' },
        { value: 'c', label: '睡眠很好' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: '您平时的食欲如何？',
      options: [
        { value: 'a', label: '食欲不振' },
        { value: 'b', label: '食欲一般' },
        { value: 'c', label: '食欲很好' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
  ],
  en: [
    {
      question: 'Do you often feel tired?',
      options: [
        { value: 'a', label: 'Often tired, easily fatigued' },
        { value: 'b', label: 'Occasionally tired' },
        { value: 'c', label: 'Rarely tired' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: 'What does your complexion look like?',
      options: [
        { value: 'a', label: 'Pale or sallow' },
        { value: 'b', label: 'Slightly red' },
        { value: 'c', label: 'Normal and rosy' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: 'Do you prefer cold or hot drinks?',
      options: [
        { value: 'a', label: 'Prefer cold drinks' },
        { value: 'b', label: 'Either is fine' },
        { value: 'c', label: 'Prefer hot drinks' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: 'What is your stool like?',
      options: [
        { value: 'a', label: 'Loose and unformed' },
        { value: 'b', label: 'Sometimes formed, sometimes not' },
        { value: 'c', label: 'Well-formed and regular' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: 'Do you sweat easily?',
      options: [
        { value: 'a', label: 'Easily sweat, especially spontaneous sweating' },
        { value: 'b', label: 'Normal sweating' },
        { value: 'c', label: 'Rarely sweat' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: 'What is your personality like?',
      options: [
        { value: 'a', label: 'Introverted, quiet' },
        { value: 'b', label: 'Neutral' },
        { value: 'c', label: 'Extroverted, lively' },
      ],
      scores: { a: 1, b: 0, c: -1 },
    },
    {
      question: 'Do you catch colds easily?',
      options: [
        { value: 'a', label: 'Often catch colds' },
        { value: 'b', label: 'Occasionally catch colds' },
        { value: 'c', label: 'Rarely catch colds' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: 'How is your sleep quality?',
      options: [
        { value: 'a', label: 'Hard to fall asleep or easily wake up' },
        { value: 'b', label: 'Average sleep' },
        { value: 'c', label: 'Good sleep' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
    {
      question: 'What is your appetite like?',
      options: [
        { value: 'a', label: 'Poor appetite' },
        { value: 'b', label: 'Average appetite' },
        { value: 'c', label: 'Good appetite' },
      ],
      scores: { a: 2, b: 1, c: 0 },
    },
  ],
};

const results = {
  zh: {
    qixu: {
      title: '气虚体质',
      description: '您属于气虚体质。这类体质的人容易疲劳、气短、自汗，需要补气养生。',
      suggestions: [
        '多吃补气食物：黄芪、党参、山药、红枣',
        '适当进行温和运动：散步、太极拳',
        '保证充足睡眠，避免过度劳累',
      ],
    },
    shire: {
      title: '湿热体质',
      description: '您属于湿热体质。这类体质的人容易口干口苦、大便粘腻、皮肤油腻。',
      suggestions: [
        '多吃清热利湿食物：绿豆、冬瓜、薏米',
        '避免辛辣油腻食物',
        '保持室内通风干燥',
      ],
    },
    pinghe: {
      title: '平和体质',
      description: '恭喜！您属于平和体质。这是最健康的体质类型，阴阳平衡。',
      suggestions: [
        '保持均衡饮食',
        '坚持适度运动',
        '保持良好的生活习惯',
      ],
    },
    xuyin: {
      title: '阴虚体质',
      description: '您属于阴虚体质。这类体质的人容易口干咽燥、手脚心发热。',
      suggestions: [
        '多吃滋阴食物：银耳、百合、枸杞',
        '避免辛辣刺激食物',
        '保持情绪稳定',
      ],
    },
  },
  en: {
    qixu: {
      title: 'Qi Deficiency',
      description: 'You have a Qi Deficiency constitution. People with this constitution tend to feel tired easily, have shortness of breath, and spontaneous sweating. You need to nourish Qi.',
      suggestions: [
        'Eat Qi-nourishing foods: Astragalus, Codonopsis, Yam, Red Dates',
        'Practice gentle exercises: Walking, Tai Chi',
        'Get enough sleep, avoid overexertion',
      ],
    },
    shire: {
      title: 'Damp-Heat',
      description: 'You have a Damp-Heat constitution. People with this constitution tend to have dry mouth, bitter taste, sticky stool, and oily skin.',
      suggestions: [
        'Eat heat-clearing foods: Mung beans, Wax gourd, Coix seed',
        'Avoid spicy and greasy foods',
        'Keep indoor ventilation',
      ],
    },
    pinghe: {
      title: 'Balanced',
      description: 'Congratulations! You have a Balanced constitution. This is the healthiest constitution type with balanced Yin and Yang.',
      suggestions: [
        'Maintain balanced diet',
        'Keep moderate exercise',
        'Maintain good living habits',
      ],
    },
    xuyin: {
      title: 'Yin Deficiency',
      description: 'You have a Yin Deficiency constitution. People with this constitution tend to have dry mouth, sore throat, and hot palms/soles.',
      suggestions: [
        'Eat Yin-nourishing foods: Tremella, Lily bulb, Goji berries',
        'Avoid spicy and stimulating foods',
        'Maintain emotional stability',
      ],
    },
  },
};

export default function BodyTypeQuiz({ locale }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [resultType, setResultType] = useState<'qixu' | 'shire' | 'pinghe' | 'xuyin'>('pinghe');

  const quizQuestions = questions[locale as keyof typeof questions];
  const currentQ = quizQuestions[currentQuestion];

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    let totalScore = 0;
    quizQuestions.forEach((q, index) => {
      const answer = answers[index];
      if (answer && q.scores[answer as keyof typeof q.scores]) {
        totalScore += q.scores[answer as keyof typeof q.scores];
      }
    });

    if (totalScore >= 12) {
      setResultType('qixu');
    } else if (totalScore >= 8) {
      setResultType('shire');
    } else if (totalScore >= 4) {
      setResultType('xuyin');
    } else {
      setResultType('pinghe');
    }
    setShowResult(true);
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const result = results[locale as keyof typeof results][resultType];
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-6">🏆</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{result.title}</h2>
          <p className="text-gray-600 mb-6">{result.description}</p>
          <div className="text-left bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">
              {locale === 'zh' ? '养生建议' : 'Wellness Suggestions'}
            </h3>
            <ul className="space-y-2">
              {result.suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-600">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={restart}
            className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            {locale === 'zh' ? '重新测试' : 'Retake Quiz'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-xl font-bold text-gray-800">
            {locale === 'zh' ? '中医体质测试' : 'Body Type Quiz'}
          </h1>
          <span className="text-gray-500">
            {currentQuestion + 1} / {quizQuestions.length}
          </span>
        </div>

        <div className="mb-8">
          <p className="text-lg text-gray-800 mb-6">{currentQ.question}</p>
          <div className="space-y-3">
            {currentQ.options.map((option) => (
              <label
                key={option.value}
                className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  answers[currentQuestion] === option.value
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option.value}
                  checked={answers[currentQuestion] === option.value}
                  onChange={() => handleAnswer(option.value)}
                  className="mr-3 w-4 h-4 text-green-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={nextQuestion}
          disabled={!answers[currentQuestion]}
          className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion < quizQuestions.length - 1
            ? locale === 'zh'
              ? '下一题'
              : 'Next'
            : locale === 'zh'
            ? '查看结果'
            : 'Get Result'}
        </button>
      </div>
    </div>
  );
}
