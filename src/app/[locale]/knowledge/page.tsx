import { useTranslations } from 'next-intl';
import Link from 'next/link';

const articles = [
  {
    slug: 'sleep-acupoints',
    title: {
      zh: '失眠了？试试这3个穴位',
      en: "Can't Sleep? Try These 3 Acupoints",
    },
    description: {
      zh: '三个简单有效的穴位按摩方法，帮助你改善睡眠质量',
      en: 'Three simple acupoint massage techniques to help improve your sleep quality',
    },
    category: '睡眠健康',
  },
  {
    slug: 'seasonal-wellness-spring',
    title: {
      zh: '春天养生：养肝护肝的5个秘诀',
      en: 'Spring Wellness: 5 Tips for Liver Health',
    },
    description: {
      zh: '春季是养肝的最佳时节，五大方法帮你科学养生',
      en: 'Spring is the best season for liver health, with five methods for wellness',
    },
    category: '节气养生',
  },
];

export default function KnowledgePage({ params }: { params: { locale: string } }) {
  const t = useTranslations('Knowledge');
  const locale = params.locale as 'zh' | 'en';

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">{t('title')}</h1>

      <div className="mb-6 text-gray-500 text-sm">
        {articles.length} {t('articles')}
      </div>

      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/${locale}/knowledge/articles/${article.slug}`}
            className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded mb-2">
              {article.category}
            </span>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {article.title[locale]}
            </h2>
            <p className="text-gray-600">{article.description[locale]}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm text-center">
        {t('comingSoon')}
      </div>
    </div>
  );
}
