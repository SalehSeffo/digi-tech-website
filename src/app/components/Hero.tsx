import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  language: 'de' | 'en';
}

export function Hero({ language }: HeroProps) {
  const t = {
    de: {
      badge: 'Gastly Restaurantmanagementsystem',
      headline: 'Schluss mit dem Zettelchaos.',
      subheadline: 'Gastly digitalisiert Ihr Restaurant — Tische, Bestellungen, Tagesberichte. Alles in einem System, auf jedem Tablet.',
      cta1: 'Kostenlos testen',
      cta2: 'Preise ansehen',
    },
    en: {
      badge: 'Gastly Restaurant Management System',
      headline: 'No more paper chaos.',
      subheadline: 'Gastly digitizes your restaurant — tables, orders, daily reports. All in one system, on any tablet.',
      cta1: 'Start Free Trial',
      cta2: 'See Pricing',
    },
  };

  const text = t[language];

  return (
    <section className="relative bg-gradient-to-b from-[#03045E] to-[#0077B6] py-24 md:py-32 overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-[#00B4D8]/20" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border border-[#0077B6]/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            {text.headline}
          </h1>
          <p className="text-lg md:text-xl text-[#90E0EF] mb-10 max-w-2xl mx-auto leading-relaxed">
            {text.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00B4D8] hover:bg-white hover:text-[#03045E] text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-[#00B4D8]/30 text-base"
            >
              {text.cta1} <ArrowRight size={18} />
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#90E0EF]/50 text-[#CAF0F8] hover:bg-white/10 font-semibold rounded-xl transition-all duration-200 text-base"
            >
              {text.cta2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
