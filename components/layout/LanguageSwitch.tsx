'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface LanguageSwitchProps {
  currentLocale: string;
}

export default function LanguageSwitch({ currentLocale }: LanguageSwitchProps) {
  const t = useTranslations('Language');
  const otherLocale = currentLocale === 'zh' ? 'en' : 'zh';

  return (
    <Link
      href={`/${otherLocale}`}
      className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition"
      title={t('switch')}
    >
      {currentLocale === 'zh' ? 'EN' : '中'}
    </Link>
  );
}
