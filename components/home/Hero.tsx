interface HeroProps {
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
  articles: string;
  members: string;
  countries: string;
}

export default function Hero({ title, subtitle, cta1, cta2, articles, members, countries }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-amber-50 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          No Tox, All <span className="text-green-600">TCM</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-4">{title}</p>
        <p className="text-base md:text-lg text-gray-500 mb-8 max-w-2xl mx-auto">{subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/zh/knowledge"
            className="px-8 py-4 bg-green-600 text-white rounded-xl text-lg font-semibold hover:bg-green-700 transition shadow-lg shadow-green-200"
          >
            {cta1}
          </a>
          <a
            href="/zh/tools/body-type-quiz"
            className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-xl text-lg font-semibold hover:bg-green-50 transition"
          >
            {cta2}
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500">
          <div>
            <span className="text-3xl font-bold text-gray-800">2,000+</span>
            <p className="text-sm">{articles}</p>
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-800">5,000+</span>
            <p className="text-sm">{members}</p>
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-800">50+</span>
            <p className="text-sm">{countries}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
