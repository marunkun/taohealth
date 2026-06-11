'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface NewsletterProps {
  locale: string;
}

export default function Newsletter({ locale }: NewsletterProps) {
  const t = useTranslations('Newsletter');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    // MVP: Save to localStorage
    const subscriptions = JSON.parse(localStorage.getItem('subscriptions') || '[]');
    if (!subscriptions.includes(email)) {
      subscriptions.push(email);
      localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
    }

    setEmail('');
    setStatus('success');
  };

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{t('title')}</h2>
        <p className="text-gray-600 mb-8">{t('desc')}</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('placeholder')}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
          >
            {t('button')}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-green-700 font-medium">✅ {t('success')}</p>
        )}

        {status === 'error' && (
          <p className="mt-4 text-red-600">❌ {t('error')}</p>
        )}

        <p className="mt-6 text-xs text-gray-500">{t('privacy')}</p>
      </div>
    </section>
  );
}
