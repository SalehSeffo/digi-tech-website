import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Check, X, ArrowRight } from 'lucide-react';

interface PricingPageProps {
  language: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

export function PricingPage({ language, onLanguageChange }: PricingPageProps) {
  const t = language === 'de' ? {
    heading: 'Transparente Preise für Restaurants aller Größen',
    subheading: 'Keine versteckten Gebühren. Bezahlen Sie nur für das, was Sie nutzen.',
    plans: [
      {
        name: 'Starter',
        price: '49',
        currency: '€',
        period: '/Monat',
        description: 'Perfekt für kleine Restaurants',
        cta: 'Kostenlos testen',
        features: [
          { text: 'Bis zu 20 Tische', included: true },
          { text: 'Basis Tischplanung', included: true },
          { text: 'Bestellverwaltung', included: true },
          { text: 'Basic Reporting', included: true },
          { text: 'Mobile App', included: true },
          { text: 'Email-Marketing', included: false },
          { text: 'Telegram-Reports', included: false },
          { text: 'Priority Support', included: false },
        ],
      },
      {
        name: 'Professional',
        price: '99',
        currency: '€',
        period: '/Monat',
        description: 'Am meisten gewählt für mittlere Restaurants',
        cta: 'Kostenlos testen',
        featured: true,
        features: [
          { text: 'Bis zu 50 Tische', included: true },
          { text: 'Erweiterte Tischplanung', included: true },
          { text: 'Bestellverwaltung + Küche-Display', included: true },
          { text: 'Inventarverwaltung', included: true },
          { text: 'Erweiterte Analytics', included: true },
          { text: 'Email & SMS Marketing', included: true },
          { text: 'Telegram Daily Reports', included: true },
          { text: 'Email Support', included: true },
        ],
      },
      {
        name: 'Enterprise',
        price: 'Kontakt',
        currency: '',
        period: 'erforderlich',
        description: 'Für größere Restaurant-Gruppen',
        cta: 'Demo anfragen',
        features: [
          { text: 'Unbegrenzte Tische', included: true },
          { text: 'Alle Pro-Features', included: true },
          { text: 'Multi-Location Management', included: true },
          { text: 'Custom Integrations', included: true },
          { text: 'Advanced Reporting & BI', included: true },
          { text: 'Dedicated Account Manager', included: true },
          { text: '24/7 Priority Support', included: true },
          { text: 'Custom Trainings', included: true },
        ],
      },
    ],
    faq: [
      {
        q: 'Gibt es eine kostenlose Testversion?',
        a: 'Ja! Alle Pläne können 14 Tage kostenlos getestet werden. Keine Kreditkarte erforderlich.',
      },
      {
        q: 'Kann ich jederzeit kündigen?',
        a: 'Ja, Sie können Ihr Abonnement jederzeit monatlich kündigen. Keine Langzeitverpflichtung.',
      },
      {
        q: 'Was ist mit zusätzlichen Benutzern?',
        a: 'Zusätzliche Benutzer kosten €5-10/Monat pro Benutzer, je nach Plan.',
      },
      {
        q: 'Bieten Sie Schulungen an?',
        a: 'Ja, kostenlose Onboarding-Schulungen sind enthalten. Enterprise-Kunden erhalten dedizierte Trainings.',
      },
    ],
  } : {
    heading: 'Transparent Pricing for Restaurants of All Sizes',
    subheading: 'No hidden fees. Pay only for what you use.',
    plans: [
      {
        name: 'Starter',
        price: '49',
        currency: '€',
        period: '/month',
        description: 'Perfect for small restaurants',
        cta: 'Free trial',
        features: [
          { text: 'Up to 20 tables', included: true },
          { text: 'Basic table planning', included: true },
          { text: 'Order management', included: true },
          { text: 'Basic reporting', included: true },
          { text: 'Mobile app', included: true },
          { text: 'Email marketing', included: false },
          { text: 'Telegram reports', included: false },
          { text: 'Priority support', included: false },
        ],
      },
      {
        name: 'Professional',
        price: '99',
        currency: '€',
        period: '/month',
        description: 'Most popular for medium restaurants',
        cta: 'Free trial',
        featured: true,
        features: [
          { text: 'Up to 50 tables', included: true },
          { text: 'Advanced table planning', included: true },
          { text: 'Order management + Kitchen display', included: true },
          { text: 'Inventory management', included: true },
          { text: 'Advanced analytics', included: true },
          { text: 'Email & SMS marketing', included: true },
          { text: 'Telegram daily reports', included: true },
          { text: 'Email support', included: true },
        ],
      },
      {
        name: 'Enterprise',
        price: 'Contact',
        currency: '',
        period: 'required',
        description: 'For larger restaurant groups',
        cta: 'Request demo',
        features: [
          { text: 'Unlimited tables', included: true },
          { text: 'All Pro features', included: true },
          { text: 'Multi-location management', included: true },
          { text: 'Custom integrations', included: true },
          { text: 'Advanced reporting & BI', included: true },
          { text: 'Dedicated account manager', included: true },
          { text: '24/7 priority support', included: true },
          { text: 'Custom trainings', included: true },
        ],
      },
    ],
    faq: [
      {
        q: 'Is there a free trial?',
        a: 'Yes! All plans can be tested free for 14 days. No credit card required.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes, you can cancel your subscription monthly anytime. No long-term commitment.',
      },
      {
        q: 'What about additional users?',
        a: 'Additional users cost €5-10/month per user, depending on the plan.',
      },
      {
        q: 'Do you offer training?',
        a: 'Yes, free onboarding training is included. Enterprise customers receive dedicated trainings.',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={onLanguageChange} />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#FBF7F2] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3E50] mb-4">{t.heading}</h1>
          <p className="text-xl text-gray-600">{t.subheading}</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {t.plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border-2 transition ${
                plan.featured
                  ? 'border-[#E8762C] bg-white shadow-xl scale-105'
                  : 'border-gray-200 bg-white hover:border-[#E8762C]'
              }`}
            >
              {plan.featured && (
                <div className="bg-[#E8762C] text-white py-2 px-4 text-center text-sm font-bold">
                  {language === 'de' ? 'AM MEISTEN GEWÄHLT' : 'MOST POPULAR'}
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#2D3E50] mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#2D3E50]">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.currency}{plan.period}</span>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                    plan.featured
                      ? 'bg-[#E8762C] hover:bg-[#d46620] text-white'
                      : 'border-2 border-[#E8762C] text-[#E8762C] hover:bg-[#FBF7F2]'
                  }`}
                >
                  {plan.cta} <ArrowRight size={18} />
                </button>

                <div className="mt-8 space-y-4 border-t pt-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check size={20} className="text-[#5FAD56] flex-shrink-0 mt-0.5" />
                      ) : (
                        <X size={20} className="text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#FBF7F2] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2D3E50] mb-12 text-center">
            {language === 'de' ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
          </h2>
          <div className="space-y-6">
            {t.faq.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-[#2D3E50] mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
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
              ? '14 Tage kostenlos testen – keine Kreditkarte erforderlich.'
              : '14 days free trial – no credit card required.'}
          </p>
          <button className="bg-[#E8762C] hover:bg-[#d46620] text-white px-8 py-3 rounded-lg font-semibold transition">
            {language === 'de' ? 'Kostenlos testen' : 'Start free trial'}
          </button>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
