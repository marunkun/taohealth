import { useTranslations } from 'next-intl';

export default function CommunityPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const isZh = locale === 'zh';

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        {isZh ? '社区' : 'Community'}
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="text-3xl mb-4">💬</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {isZh ? '问答交流' : 'Q&A Discussion'}
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            {isZh
              ? '与其他养生爱好者交流经验，解答疑惑'
              : 'Share experiences and get answers from fellow wellness enthusiasts'}
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800 text-sm">
                {isZh ? '睡眠质量差怎么办？' : 'How to improve sleep quality?'}
              </p>
              <p className="text-xs text-gray-500">{isZh ? '3个回复 · 12人关注' : '3 replies · 12 followers'}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800 text-sm">
                {isZh ? '气虚体质如何调理？' : 'How to tonify Qi deficiency?'}
              </p>
              <p className="text-xs text-gray-500">{isZh ? '5个回复 · 28人关注' : '5 replies · 28 followers'}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="text-3xl mb-4">🍲</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {isZh ? '食谱分享' : 'Recipe Sharing'}
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            {isZh
              ? '分享您的养生食谱，交流烹饪心得'
              : 'Share your wellness recipes and cooking tips'}
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800 text-sm">
                {isZh ? '四神汤的正确做法' : 'How to make Four Gentlemen Soup'}
              </p>
              <p className="text-xs text-gray-500">{isZh ? '张阿姨的厨房' : "Aunt Zhang's Kitchen"}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800 text-sm">
                {isZh ? '春季养肝茶配方' : 'Spring Liver-Nourishing Tea'}
              </p>
              <p className="text-xs text-gray-500">{isZh ? '养生达人小李' : 'Wellness Expert Li'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
        {isZh ? '社区功能正在开发中，敬请期待！' : 'Community features coming soon!'}
      </div>
    </div>
  );
}
