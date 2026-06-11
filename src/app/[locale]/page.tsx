import { useTranslations } from 'next-intl';
import Hero from '@/components/home/Hero';
import Newsletter from '@/components/home/Newsletter';

export default function Home({ params }: { params: { locale: string } }) {
  const tHome = useTranslations('Home');
  const locale = params.locale;

  return (
    <div>
      <Hero />

      <section className="py-16 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
          {tHome('painPoints')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href={`/${locale}/knowledge/articles/sleep-acupoints`}
            className="block p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-3xl mb-3">😴</div>
            <h3 className="font-semibold text-gray-800 mb-2">{tHome('sleep')}</h3>
            <p className="text-sm text-gray-600">{tHome('sleepDesc')}</p>
          </a>
          <div className="block p-6 bg-white rounded-xl shadow opacity-75">
            <div className="text-3xl mb-3">🫃</div>
            <h3 className="font-semibold text-gray-800 mb-2">{tHome('stomach')}</h3>
            <p className="text-sm text-gray-600">{tHome('stomachDesc')}</p>
          </div>
          <div className="block p-6 bg-white rounded-xl shadow opacity-75">
            <div className="text-3xl mb-3">💆</div>
            <h3 className="font-semibold text-gray-800 mb-2">{tHome('stress')}</h3>
            <p className="text-sm text-gray-600">{tHome('stressDesc')}</p>
          </div>
        </div>
      </section>

      <Newsletter />

      <section className="py-16 text-center text-gray-500">
        <p className="text-sm">[ 更多功能开发中... ]</p>
      </section>
    </div>
  );
}
