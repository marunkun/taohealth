'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitch from './LanguageSwitch';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations('Navigation');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href={`/${locale}`} className="text-2xl font-bold text-green-600">
          TaoHeal
        </Link>
        <nav className="space-x-4 text-gray-600 hidden md:flex">
          <Link href={`/${locale}/knowledge`} className="hover:text-green-600 transition">
            {t('knowledge')}
          </Link>
          <Link href={`/${locale}/tools/body-type-quiz`} className="hover:text-green-600 transition">
            {t('tools')}
          </Link>
          <Link href={`/${locale}/community`} className="hover:text-green-600 transition">
            {t('community')}
          </Link>
          <Link href={`/${locale}/about`} className="hover:text-green-600 transition">
            {t('about')}
          </Link>
        </nav>
        <div className="flex items-center space-x-3">
          <LanguageSwitch currentLocale={locale} />
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm font-medium">
            {t('login')}
          </button>
        </div>
      </div>
      {/* Mobile navigation */}
      <div className="md:hidden px-4 pb-4 flex justify-center space-x-4 text-gray-600 text-sm">
        <Link href={`/${locale}/knowledge`} className="hover:text-green-600">{t('knowledge')}</Link>
        <Link href={`/${locale}/tools/body-type-quiz`} className="hover:text-green-600">{t('tools')}</Link>
        <Link href={`/${locale}/community`} className="hover:text-green-600">{t('community')}</Link>
      </div>
    </header>
  );
}
