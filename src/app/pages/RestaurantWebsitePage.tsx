import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
  Layout,
  Globe,
  Smartphone,
  Search,
  Check,
  ArrowRight,
  Code,
  Zap,
} from 'lucide-react';

interface RestaurantWebsitePageProps {
  language: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

export function RestaurantWebsitePage({ language, onLanguageChange }: RestaurantWebsitePageProps) {
  const t = language === 'de' ? {
    heading: 'Restaurant-Website – Präsentieren Sie Ihr Restaurant Online',
    subheading: 'Professionelle Website, digitale Speisekarte und SEO-Optimierung ohne technisches Know-how',
    cta: 'Kostenlos testen',
    features: [
      {
        icon: Layout,
        title: 'Website-Builder',
        description: 'Erstellen Sie eine professionelle Website ohne Code – anpassbare Templates für Ihr Restaurant. Einfach, schnell und schön.',
        benefits: ['Drag-and-Drop Editor', 'Mobile-optimiert', 'Templates für alle Restaurant-Typen', 'Keine Kodierung erforderlich'],
      },
      {
        icon: Globe,
        title: 'Digitale Speisekarte',
        description: 'Einfach verwaltbare Menüs mit Fotos, Preisen und Allergenen – automatisch auf Ihrer Website aktuell.',
        benefits: ['Fotos hochladen', 'Allergen-Info', 'Preismanagement', 'Mehrsprachige Menüs'],
      },
      {
        icon: Smartphone,
        title: 'Mobile-Ready',
        description: 'Ihre Website sieht auf allen Geräten perfekt aus – Smartphone, Tablet und Desktop optimiert.',
        benefits: ['Responsive Design', 'Touch-optimiert', 'Schnelle Ladezeiten', 'Progressive Web App'],
      },
      {
        icon: Search,
        title: 'SEO & Online-Sichtbarkeit',
        description: 'Integrierte SEO-Optimierung, Google-Präsenz und lokale Suchergebnisse für mehr Sichtbarkeit.',
        benefits: ['Google-Optimierung', 'Local SEO', 'Schema Markup', 'Sitemaps'],
      },
    ],
    additionalFeatures: [
      'Domain-Management',
      'SSL-Sicherheit (HTTPS)',
      'Google Analytics Integration',
      'Contact Forms',
      'Social Media Links',
      'Öffnungszeiten & Kontakt-Widget',
      'Reservierungs-Widget (Phase 2)',
      'Kostenlos für 30 Tage, dann ab €19/Monat',
    ],
  } : {
    heading: 'Restaurant Website – Showcase Your Restaurant Online',
    subheading: 'Professional website, digital menu, and SEO optimization without technical knowledge',
    cta: 'Free trial',
    features: [
      {
        icon: Layout,
        title: 'Website Builder',
        description: 'Create a professional website without code – customizable templates for your restaurant. Simple, fast, and beautiful.',
        benefits: ['Drag-and-drop editor', 'Mobile-optimized', 'Templates for all restaurant types', 'No coding required'],
      },
      {
        icon: Globe,
        title: 'Digital Menu',
        description: 'Easy-to-manage menus with photos, prices, and allergens – automatically updated on your website.',
        benefits: ['Photo uploads', 'Allergen info', 'Price management', 'Multilingual menus'],
      },
      {
        icon: Smartphone,
        title: 'Mobile-Ready',
        description: 'Your website looks perfect on all devices – smartphone, tablet, and desktop optimized.',
        benefits: ['Responsive design', 'Touch-optimized', 'Fast loading', 'Progressive Web App'],
      },
      {
        icon: Search,
        title: 'SEO & Online Visibility',
        description: 'Integrated SEO optimization, Google presence, and local search results for better visibility.',
        benefits: ['Google optimization', 'Local SEO', 'Schema markup', 'Sitemaps'],
      },
    ],
    additionalFeatures: [
      'Domain management',
      'SSL security (HTTPS)',
      'Google Analytics integration',
      'Contact forms',
      'Social media links',
      'Hours & contact widget',
      'Reservation widget (Phase 2)',
      'Free for 30 days, then from €19/month',
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
          {language === 'de' ? 'Website-Funktionen' : 'Website Features'}
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
            {language === 'de' ? 'Alle Funktionen Umfassen' : 'All Features Include'}
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
            {language === 'de' ? 'Ihre Website in Minuten' : 'Your Website in Minutes'}
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            {language === 'de' 
              ? 'Starten Sie kostenlos und erstellen Sie Ihre professionelle Website ohne technisches Know-how.'
              : 'Start free and create your professional website without technical knowledge.'}
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
