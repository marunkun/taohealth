'use client';

import { useRouter, useParams } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const params = useParams<{ locale: string }>();
  const locale = params.locale || 'zh';
  const isZh = locale === 'zh';

  const navItems = isZh
    ? [
        { label: '首页', href: `/${locale}` },
        { label: '知识库', href: `/${locale}/knowledge` },
        { label: '体质测试', href: `/${locale}/tools/body-type-quiz` },
        { label: '社区', href: `/${locale}/community` },
        { label: '关于', href: `/${locale}/about` },
      ]
    : [
        { label: 'Home', href: `/${locale}` },
        { label: 'Knowledge', href: `/${locale}/knowledge` },
        { label: 'Body Type Quiz', href: `/${locale}/tools/body-type-quiz` },
        { label: 'Community', href: `/${locale}/community` },
        { label: 'About', href: `/${locale}/about` },
      ];

  const handleLangChange = (newLang: string) => {
    router.push(`/${newLang}`);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-bold text-green-700">TaoHeal</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleLangChange(isZh ? 'en' : 'zh')}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm font-medium"
            >
              {isZh ? 'EN' : '中文'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
