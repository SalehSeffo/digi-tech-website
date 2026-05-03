import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Differentiators } from '../components/Differentiators';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { Grid3x3, ShoppingCart, BarChart3, TrendingUp, ArrowRight } from 'lucide-react';

interface HomePageProps {
  language: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

export function HomePage({ language, onLanguageChange }: HomePageProps) {
  const t = {
    de: {
      featuresTitle: 'Was Gastly für Sie tut',
      featuresSubtitle: 'Ein System. Alle Abläufe digital. Kein Papier, keine Fehler, mehr Zeit für Ihre Gäste.',
      features: [
        { icon: Grid3x3, title: 'Tischplanung', description: 'Echtzeit-Übersicht über alle Tische — wer sitzt wo, was wurde bestellt, was fehlt noch.' },
        { icon: ShoppingCart, title: 'Bestellverwaltung', description: 'Bestellungen direkt vom Tablet in die Küche. Kein Zettel, kein Vergessen, kein Rufen.' },
        { icon: BarChart3, title: 'Tagesberichte', description: 'Umsatz, Bestseller, Tagesübersicht — täglich auf einen Blick für den Chef.' },
        { icon: TrendingUp, title: 'Echtzeit-Küche', description: 'Die Küche sieht jede Bestellung sofort. Kürzere Wartezeiten, bessere Qualität.' },
      ],
      ctaSection: {
        title: 'Bereit, Ihr Restaurant zu digitalisieren?',
        subtitle: '3 Wochen kostenlos testen — keine Kreditkarte, keine Verpflichtung.',
        cta: 'Jetzt Beraten Lassen',
        secondary: 'Preise ansehen',
      },
    },
    en: {
      featuresTitle: 'What Gastly does for you',
      featuresSubtitle: 'One system. All operations digital. No paper, no mistakes, more time for your guests.',
      features: [
        { icon: Grid3x3, title: 'Table Planning', description: 'Real-time overview of all tables — who is where, what was ordered, what is still missing.' },
        { icon: ShoppingCart, title: 'Order Management', description: 'Orders go directly from tablet to kitchen. No paper, no forgetting, no shouting.' },
        { icon: BarChart3, title: 'Daily Reports', description: 'Revenue, bestsellers, daily overview — at a glance for the chef every day.' },
        { icon: TrendingUp, title: 'Real-time Kitchen', description: 'The kitchen sees every order instantly. Shorter wait times, better quality.' },
      ],
      ctaSection: {
        title: 'Ready to digitize your restaurant?',
        subtitle: '3 weeks free trial — no credit card, no commitment.',
        cta: 'Get a Free Consultation',
        secondary: 'See Pricing',
      },
    },
  };

  const text = t[language];

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={onLanguageChange} />
      <Hero language={language} />

      {/* Restaurant Image */}
      <section className="px-4 py-12 bg-[#CAF0F8]/20">
        <div className="max-w-5xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1728044849291-69f90d443aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
            alt={language === 'de' ? 'Gastly Restaurantmanagementsystem im Einsatz' : 'Gastly restaurant management system in use'}
            className="w-full h-[300px] md:h-[500px] object-cover rounded-2xl shadow-2xl shadow-[#0077B6]/20"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#03045E] mb-4">{text.featuresTitle}</h2>
            <p className="text-gray-500 max-w-xl mx-auto">{text.featuresSubtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {text.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white border-2 border-[#CAF0F8] rounded-2xl p-6 hover:border-[#00B4D8] hover:shadow-lg hover:shadow-[#00B4D8]/10 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#CAF0F8] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00B4D8]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#0077B6]" />
                  </div>
                  <h3 className="font-bold text-[#03045E] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link
              to="/restaurant-management"
              className="inline-flex items-center gap-2 text-[#0077B6] hover:text-[#03045E] font-semibold transition-colors"
            >
              {language === 'de' ? 'Alle Funktionen ansehen' : 'View all features'} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Differentiators language={language} />
      <Testimonials language={language} />

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-[#03045E] via-[#0077B6] to-[#00B4D8] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">{text.ctaSection.title}</h2>
          <p className="text-[#CAF0F8] mb-8">{text.ctaSection.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#03045E] hover:bg-[#CAF0F8] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            >
              {text.ctaSection.cta} <ArrowRight size={20} />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              {text.ctaSection.secondary}
            </Link>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
