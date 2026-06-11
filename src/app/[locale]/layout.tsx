import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const locales = ['zh', 'en'];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isZh = locale === 'zh';

  return {
    title: isZh ? 'TaoHeal - 中医养生双语社区' : 'TaoHeal - Bilingual TCM Wellness Community',
    description: isZh
      ? '用自然方式找回健康 - 专为全球华人及中国文化爱好者打造的中医养生双语社区'
      : 'Reclaim your health naturally - A bilingual TCM wellness community for global Chinese and enthusiasts',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale)) {
    return null;
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
