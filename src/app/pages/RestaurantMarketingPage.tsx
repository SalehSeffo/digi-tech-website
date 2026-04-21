import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
  Mail,
  Star,
  Gift,
  Instagram,
  Check,
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';

interface RestaurantMarketingPageProps {
  language: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

export function RestaurantMarketingPage({ language, onLanguageChange }: RestaurantMarketingPageProps) {
  const t = language === 'de' ? {
    heading: 'Restaurant-Marketing – Gewinnen Sie mehr Gäste',
    subheading: 'Automatisierte Marketing-Kampagnen, Bewertungsmanagement und Social Media Integration',
    cta: 'Kostenlos testen',
    features: [
      {
        icon: Mail,
        title: 'Email-Marketing',
        description: 'Erstellen Sie automatische Willkommels-Mails, Feedback-Kampagnen und persönliche Angebote für Ihre Gäste. Erhöhen Sie die Kundenbindung mit personalisierten Kampagnen.',
        benefits: ['Automatische Willkommels-Mails', 'Feedback-Kampagnen', 'Personalisierte Angebote', 'A/B Testing'],
      },
      {
        icon: Star,
        title: 'Bewertungsmanagement',
        description: 'Überwachen Sie Google-Bewertungen, reagieren Sie schnell auf Feedback und steigern Sie Ihr Online-Rating. Verwalten Sie Ihren Ruf proaktiv.',
        benefits: ['Google-Bewertungen', 'Schnelle Antworten', 'Rating-Tracking', 'Sentiment-Analyse'],
      },
      {
        icon: Gift,
        title: 'Promotionen & Gutscheine',
        description: 'Erstellen und verteilen Sie zeitgesteuerte Angebote, Rabatte und Loyalitätsprogramme direkt an Ihre Gäste. Steigern Sie die Wiederholungsbesuche.',
        benefits: ['Zeitgesteuerte Angebote', 'Rabatt-Manager', 'Loyalitätsprogramme', 'QR-Code Gutscheine'],
      },
      {
        icon: Instagram,
        title: 'Social-Media-Integration',
        description: 'Verbinden Sie Ihre Marketing mit Instagram und Facebook – automatische Beiträge und Gast-Engagement. Wachsen Sie auf sozialen Medien.',
        benefits: ['Instagram/Facebook Posts', 'Automatische Veröffentlichung', 'Gast-Engagement', 'Analytics'],
      },
    ],
    additionalFeatures: [
      'Sms-Marketing-Kampagnen',
      'Automatische Kundensegmentierung',
      'Template-Bibliothek',
      'Performance-Dashboards',
      'Integration mit Google My Business',
      'Mehrsprachige Kampagnen',
    ],
  } : {
    heading: 'Restaurant Marketing – Attract More Guests',
    subheading: 'Automated marketing campaigns, review management, and social media integration',
    cta: 'Free trial',
    features: [
      {
        icon: Mail,
        title: 'Email Marketing',
        description: 'Create automated welcome emails, feedback campaigns, and personalized offers for your guests. Increase customer loyalty with targeted campaigns.',
        benefits: ['Automated welcome emails', 'Feedback campaigns', 'Personalized offers', 'A/B testing'],
      },
      {
        icon: Star,
        title: 'Review Management',
        description: 'Monitor Google reviews, respond quickly to feedback, and boost your online rating. Manage your reputation proactively.',
        benefits: ['Google reviews', 'Quick responses', 'Rating tracking', 'Sentiment analysis'],
      },
      {
        icon: Gift,
        title: 'Promotions & Vouchers',
        description: 'Create and distribute time-based offers, discounts, and loyalty programs directly to your guests. Increase repeat visits.',
        benefits: ['Time-based offers', 'Discount manager', 'Loyalty programs', 'QR code vouchers'],
      },
      {
        icon: Instagram,
        title: 'Social Media Integration',
        description: 'Connect your marketing with Instagram and Facebook – automatic posts and guest engagement. Grow on social media.',
        benefits: ['Instagram/Facebook posts', 'Automatic publishing', 'Guest engagement', 'Analytics'],
      },
    ],
    additionalFeatures: [
      'SMS marketing campaigns',
      'Automatic customer segmentation',
      'Template library',
      'Performance dashboards',
      'Google My Business integration',
      'Multilingual campaigns',
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
          {language === 'de' ? 'Marketing-Tools' : 'Marketing Tools'}
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
            {language === 'de' ? 'Starten Sie Ihre Marketing-Kampagne' : 'Start Your Marketing Campaign'}
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            {language === 'de' 
              ? 'Entdecken Sie, wie automatisierte Kampagnen Ihre Gästezahl erhöhen können.'
              : 'Discover how automated campaigns can increase your guest count.'}
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
