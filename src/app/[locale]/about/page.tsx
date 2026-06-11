import { useTranslations } from 'next-intl';

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const isZh = locale === 'zh';

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        {isZh ? '关于我们' : 'About Us'}
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {isZh ? '我们的使命' : 'Our Mission'}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {isZh
              ? 'TaoHeal 致力于成为全球华人及中国文化爱好者的中医养生双语社区。我们相信，传统中医智慧与现代健康理念的结合，能够帮助人们找回自然、健康的生活方式。'
              : 'TaoHeal aims to be the bilingual TCM wellness community for global Chinese and enthusiasts. We believe that combining traditional Chinese medicine wisdom with modern health concepts can help people reclaim a natural and healthy lifestyle.'}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {isZh ? '我们的愿景' : 'Our Vision'}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {isZh
              ? '让中医养生知识触手可及，帮助每一个人了解自己的身体，用自然方式找回健康。'
              : 'Make TCM wellness knowledge accessible to everyone, helping people understand their bodies and reclaim health naturally.'}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {isZh ? '核心价值观' : 'Core Values'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-green-50 rounded-xl">
              <div className="text-2xl mb-2">🌿</div>
              <h3 className="font-semibold text-gray-800">
                {isZh ? '自然为本' : 'Nature First'}
              </h3>
              <p className="text-sm text-gray-600">
                {isZh ? '遵循自然规律，回归健康本质' : 'Follow nature, return to essence'}
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl">
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-semibold text-gray-800">
                {isZh ? '知识共享' : 'Knowledge Sharing'}
              </h3>
              <p className="text-sm text-gray-600">
                {isZh ? '传播中医智慧，造福更多人群' : 'Share TCM wisdom, benefit more people'}
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-semibold text-gray-800">
                {isZh ? '中西融合' : 'East Meet West'}
              </h3>
              <p className="text-sm text-gray-600">
                {isZh ? '连接东西方，促进文化交流' : 'Connect East and West, promote cultural exchange'}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
