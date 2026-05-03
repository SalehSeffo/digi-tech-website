import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Grid3x3, ShoppingCart, BarChart3, Check, ArrowRight, TrendingUp, Zap } from 'lucide-react';

interface RestaurantManagementPageProps {
  language: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

export function RestaurantManagementPage({ language, onLanguageChange }: RestaurantManagementPageProps) {
  const t = language === 'de' ? {
    heading: 'Gastly – Vollständige Kontrolle Ihres Restaurants',
    subheading: 'Die all-in-one Lösung für digitales Tisch- und Bestellmanagement und tägliche Tagesberichte.',
    cta: 'Beraten Lassen',
    trialNote: '3 Wochen kostenlos testen — keine Kreditkarte erforderlich.',
    featuresTitle: 'Kernfunktionen',
    addTitle: 'Zusätzliche Funktionen',
    ctaBottom: 'Bereit zu starten?',
    features: [
      {
        icon: Grid3x3,
        title: 'Tischplanung',
        description: 'Verwalten Sie Ihren Gastraum mit Echtzeit-Verfügbarkeit und übersichtlicher Tischsteuerung. Optimieren Sie die Auslastung und reduzieren Sie Wartezeiten.',
        benefits: ['Echtzeit-Verfügbarkeit', 'Digitale Tischübersicht', 'Schnelle Bestellzuweisung', 'Flexible Raumplanung'],
      },
      {
        icon: ShoppingCart,
        title: 'Bestellverwaltung',
        description: 'Schnelle Auftragserfassung vom Tablet direkt in die Küche. Kein Zettelchaos — alles digital, sofort und nachvollziehbar.',
        benefits: ['Tablet-Bestellung am Tisch', 'Echtzeit-Küchenanzeige', 'Automatische Abrechnung', 'Statusverfolgung'],
      },
      {
        icon: BarChart3,
        title: 'Tagesberichte',
        description: 'Tägliche Übersichten über Umsatz, Bestseller und Betriebsdaten — mit persönlichem Chef-Zugang. Fundierte Entscheidungen statt Bauchgefühl.',
        benefits: ['Umsatz-Übersicht', 'Bestseller-Analyse', 'Chef-Zugang (Benutzername/Passwort)', 'Tägliche Zusammenfassung'],
      },
    ],
    additionalFeatures: [
      'Mehrsprachige Benutzeroberfläche',
      'Schneller Support (innerhalb 3 Stunden)',
      'Regelmäßige Inhaltsänderungen inklusive',
      '3 Wochen kostenlose Testphase',
      'Einrichtung & Schulung vor Ort',
      'Kein technisches Vorwissen erforderlich',
    ],
  } : {
    heading: 'Gastly – Full Control of Your Restaurant',
    subheading: 'The all-in-one solution for digital table and order management, and daily reports.',
    cta: 'Get Consultation',
    trialNote: '3 weeks free trial — no credit card required.',
    featuresTitle: 'Core Features',
    addTitle: 'Additional Features',
    ctaBottom: 'Ready to get started?',
    features: [
      {
        icon: Grid3x3,
        title: 'Table Planning',
        description: 'Manage your dining room with real-time availability and clear table control. Optimize occupancy and reduce wait times.',
        benefits: ['Real-time availability', 'Digital table overview', 'Fast order assignment', 'Flexible floor planning'],
      },
      {
        icon: ShoppingCart,
        title: 'Order Management',
        description: 'Fast order capture from tablet directly to the kitchen. No paper chaos — everything digital, instant, and traceable.',
        benefits: ['Tablet ordering at the table', 'Real-time kitchen display', 'Automatic billing', 'Status tracking'],
      },
      {
        icon: BarChart3,
        title: 'Daily Reports',
        description: 'Daily overviews of revenue, bestsellers, and operational data — with personal chef access. Data-driven decisions, every day.',
        benefits: ['Revenue overview', 'Bestseller analysis', 'Chef access (username/password)', 'Daily summary'],
      },
    ],
    additionalFeatures: [
      'Multi-language interface',
      'Fast support (within 3 hours)',
      'Regular content updates included',
      '3-week free trial',
      'On-site setup & training',
      'No technical knowledge required',
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={onLanguageChange} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#03045E] to-[#0077B6] py-24 px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#00B4D8]/20 border border-[#00B4D8]/40 text-[#CAF0F8] text-sm px-4 py-1.5 rounded-full mb-6">
            <Zap size={14} /> Gastly Restaurantmanagement
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.heading}</h1>
          <p className="text-xl text-[#90E0EF] mb-8">{t.subheading}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#00B4D8] hover:bg-white hover:text-[#03045E] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200">
              {t.cta} <ArrowRight size={18} />
            </Link>
            <Link to="/pricing" className="inline-flex items-center justify-center gap-2 border border-[#90E0EF] text-[#CAF0F8] hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-200">
              {language === 'de' ? 'Preise ansehen' : 'See Pricing'}
            </Link>
          </div>
          <p className="text-sm text-[#CAF0F8]/70 mt-4">{t.trialNote}</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#03045E] mb-12 text-center">{t.featuresTitle}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {t.features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 border-2 border-[#CAF0F8] hover:border-[#00B4D8] hover:shadow-xl hover:shadow-[#00B4D8]/10 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#CAF0F8] p-4 rounded-xl group-hover:bg-[#00B4D8]/20 transition-colors">
                    <IconComponent size={28} className="text-[#0077B6]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#03045E]">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-[#CAF0F8] flex items-center justify-center flex-shrink-0">
                        <Check size={10} className="text-[#0077B6]" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Features */}
      <section className="bg-[#CAF0F8]/30 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#03045E] mb-12 text-center">{t.addTitle}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {t.additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-[#CAF0F8]">
                <span className="w-6 h-6 rounded-full bg-[#CAF0F8] flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-[#0077B6]" />
                </span>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#03045E] via-[#0077B6] to-[#00B4D8] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <TrendingUp size={40} className="text-[#CAF0F8] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">{t.ctaBottom}</h2>
          <p className="text-[#CAF0F8] mb-8">{t.trialNote}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#03045E] hover:bg-[#CAF0F8] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-xl hover:-translate-y-0.5">
            {t.cta} <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
