import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-amber-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="text-6xl mb-6">🌿</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/zh/tools/body-type-quiz"
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              {t('cta')}
            </a>
            <a
              href="/zh/knowledge"
              className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-medium"
            >
              {t('learn')}
            </a>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="font-semibold text-gray-800 mb-2">{t('feature1.title')}</h3>
            <p className="text-gray-600 text-sm">{t('feature1.desc')}</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="font-semibold text-gray-800 mb-2">{t('feature2.title')}</h3>
            <p className="text-gray-600 text-sm">{t('feature2.desc')}</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-semibold text-gray-800 mb-2">{t('feature3.title')}</h3>
            <p className="text-gray-600 text-sm">{t('feature3.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
