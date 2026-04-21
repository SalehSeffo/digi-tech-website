import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
  Grid3x3,
  ShoppingCart,
  Package,
  BarChart3,
  Check,
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
} from 'lucide-react';

interface RestaurantManagementPageProps {
  language: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

export function RestaurantManagementPage({ language, onLanguageChange }: RestaurantManagementPageProps) {
  const t = language === 'de' ? {
    heading: 'Restaurantmanagement – Vollständige Kontrolle Ihres Betriebs',
    subheading: 'Die all-in-one Lösung für professionelle Tischplanung, Bestellverwaltung und Personalmanagement',
    cta: 'Kostenlos testen',
    features: [
      {
        icon: Grid3x3,
        title: 'Tischplanung',
        description: 'Verwalten Sie Ihren Gastraum mit Echtzeit-Verfügbarkeit, Gästeprofile und Reservierungshistorie. Optimieren Sie die Tischauslastung und reduzieren Sie Wartezeiten.',
        benefits: ['Echtzeit-Verfügbarkeit', 'Gästeprofile', 'Reservierungshistorie', 'Automatische Benachrichtigungen'],
      },
      {
        icon: ShoppingCart,
        title: 'Bestellverwaltung',
        description: 'Schnelle Auftragserfassung von Tisch oder Bar mit Status-Updates für die Küche und Abrechnung. Integrieren Sie mit Ihrem POS-System.',
        benefits: ['Mobile Bestellerfassung', 'Küchen-Displays', 'Echtzeit-Status', 'Automatische Rechnungen'],
      },
      {
        icon: Package,
        title: 'Inventarverwaltung',
        description: 'Bestandsüberwachung mit automatischen Bestellvorschlägen und Lieferantenintegration. Reduzieren Sie Verschwendung und Fehlbestände.',
        benefits: ['Bestandsüberwachung', 'Automatische Bestellungen', 'Lieferantenintegration', 'Nachverfolgung der Verfallsdaten'],
      },
      {
        icon: BarChart3,
        title: 'Reporting & Analytics',
        description: 'Detaillierte Berichte über Umsatz, Auslastung und Gästetrends – live und automatisiert. Treffen Sie datengetriebene Entscheidungen.',
        benefits: ['Umsatz-Dashboards', 'Gast-Analytics', 'Trend-Analyse', 'Custom-Reports'],
      },
    ],
    additionalFeatures: [
      'Personalplanung und Zeiterfassung',
      'Leistungsüberwachung der Mitarbeiter',
      'Integration mit Zahlungssystemen',
      'Telegram Daily Reports für Geschäftsführer',
      '24/7 Support auf Deutsch',
      'Mobile App für iOS & Android',
    ],
  } : {
    heading: 'Restaurant Management – Full Control of Your Operations',
    subheading: 'The all-in-one solution for professional table planning, order management, and staff management',
    cta: 'Free trial',
    features: [
      {
        icon: Grid3x3,
        title: 'Table Planning',
        description: 'Manage your dining room with real-time availability, guest profiles, and reservation history. Optimize table occupancy and reduce wait times.',
        benefits: ['Real-time availability', 'Guest profiles', 'Reservation history', 'Automatic notifications'],
      },
      {
        icon: ShoppingCart,
        title: 'Order Management',
        description: 'Quick order capture from table or bar with status updates to kitchen and billing. Integrate with your POS system.',
        benefits: ['Mobile order capture', 'Kitchen displays', 'Real-time status', 'Automatic invoicing'],
      },
      {
        icon: Package,
        title: 'Inventory Management',
        description: 'Stock monitoring with automatic order suggestions and supplier integration. Reduce waste and stockouts.',
        benefits: ['Stock monitoring', 'Automatic orders', 'Supplier integration', 'Expiration tracking'],
      },
      {
        icon: BarChart3,
        title: 'Reporting & Analytics',
        description: 'Detailed reports on revenue, occupancy, and guest trends – live and automated. Make data-driven decisions.',
        benefits: ['Revenue dashboards', 'Guest analytics', 'Trend analysis', 'Custom reports'],
      },
    ],
    additionalFeatures: [
      'Staff planning and time tracking',
      'Employee performance monitoring',
      'Payment system integration',
      'Telegram daily reports for managers',
      '24/7 support in English',
      'Mobile app for iOS & Android',
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={onLanguageChange} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#FBF7F2] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3E50] mb-4">{t.heading}</h1>
          <p className="text-xl text-gray-600 mb-8">{t.subheading}</p>
          <button className="bg-[#E8762C] hover:bg-[#d46620] text-white px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2 mx-auto">
            {t.cta} <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2D3E50] mb-12 text-center">
          {language === 'de' ? 'Kernfunktionen' : 'Core Features'}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {t.features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#E8762C] transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#FBF7F2] p-4 rounded-lg">
                    <IconComponent size={32} className="text-[#E8762C]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D3E50]">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check size={18} className="text-[#5FAD56]" />
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
      <section className="bg-[#FBF7F2] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D3E50] mb-12 text-center">
            {language === 'de' ? 'Zusätzliche Funktionen' : 'Additional Features'}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {t.additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <Check size={20} className="text-[#5FAD56] flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2D3E50] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'de' ? 'Bereit zu starten?' : 'Ready to get started?'}
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            {language === 'de' 
              ? 'Testen Sie Restaurantmanagement 14 Tage kostenlos – keine Kreditkarte erforderlich.'
              : 'Try Restaurant Management for 14 days free – no credit card required.'}
          </p>
          <button className="bg-[#E8762C] hover:bg-[#d46620] text-white px-8 py-3 rounded-lg font-semibold transition">
            {t.cta}
          </button>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
