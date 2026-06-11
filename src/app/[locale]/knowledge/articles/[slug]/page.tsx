import { notFound } from 'next/navigation';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { useTranslations } from 'next-intl';

type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'warning'; text: string };

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const localeKey = locale as 'zh' | 'en';
  const articlePath = path.join(process.cwd(), 'content', 'articles', `${slug}.json`);

  if (!fs.existsSync(articlePath)) {
    notFound();
  }

  const article = JSON.parse(fs.readFileSync(articlePath, 'utf-8'));
  const content = article.content[localeKey] as ContentBlock[];

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href={`/${locale}/knowledge`}
        className="text-green-600 hover:underline text-sm inline-flex items-center gap-1"
      >
        ← 返回知识库
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-2">{article.title[localeKey]}</h1>
      <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded mb-8">
        {article.category}
      </span>

      <div className="prose max-w-none">
        {content.map((block, index) => {
          switch (block.type) {
            case 'paragraph':
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-4">
                  {block.text}
                </p>
              );
            case 'heading':
              return (
                <h2 key={index} className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                  {block.text}
                </h2>
              );
            case 'list':
              return (
                <ul key={index} className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            case 'warning':
              return (
                <div
                  key={index}
                  className="p-4 bg-amber-50 border-l-4 border-amber-400 rounded my-6"
                >
                  <p className="text-amber-800 text-sm">{block.text}</p>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>

      <div className="mt-12 pt-8 border-t">
        <Link
          href={`/${locale}/knowledge`}
          className="text-green-600 hover:underline"
        >
          ← 返回知识库
        </Link>
      </div>
    </article>
  );
}
