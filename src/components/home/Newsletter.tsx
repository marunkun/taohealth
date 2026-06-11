'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Newsletter() {
  const t = useTranslations('Newsletter');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-green-600 py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {t('title')}
        </h2>
        <p className="text-green-100 mb-8">{t('description')}</p>

        {submitted ? (
          <div className="bg-white/20 text-white px-6 py-4 rounded-lg">
            {t('success')}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('placeholder')}
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors font-medium disabled:opacity-50"
            >
              {loading ? t('loading') : t('submit')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
