import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Check, X, ArrowRight } from 'lucide-react';

interface PricingPageProps {
  language: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

export function PricingPage({ language, onLanguageChange }: PricingPageProps) {
  const t = language === 'de' ? {
    heading: 'Klare Pakete, faire Preise',
    subheading: 'Wählen Sie das Modell, das zu Ihrer Betriebsgröße passt. Die Pakete sind nach Betriebsgröße gestaffelt, nicht nach Tischanzahl.',
    setupFee: 'Einrichtungsgebühr',
    setupFeeAmount: '900€ einmalig (beinhaltet 1 Tablet, 1 Bondrucker, Schulung & Support)',
    trial: '3 Wochen kostenlos testen',
    trialDetails: 'Alle Pläne können 3 Wochen kostenlos getestet werden. Keine Kreditkarte erforderlich.',
    plans: [
      {
        name: 'Basis',
        price: '49',
        currency: '€',
        period: '/Monat',
        description: 'Für kleine Cafés und Imbisse',
        cta: 'Beraten Lassen',
        features: [
          { text: 'Bestell- & Tischsystem', included: true },
          { text: '1–2 Tablets', included: true },
          { text: 'Basis-Support', included: true },
          { text: 'Mehrsprachigkeit', included: true },
          { text: 'Inhaltsänderungen: 1x/Monat', included: true },
          { text: 'Echtzeit-Küchenansicht', included: false },
          { text: 'Tagesberichte', included: false },
          { text: 'Schneller Support (3 Stunden)', included: false },
        ],
      },
      {
        name: 'Standard',
        price: '95',
        currency: '€',
        period: '/Monat',
        description: 'Für typische Restaurants (70% unserer Kunden)',
        cta: 'Beraten Lassen',
        featured: true,
        badge: 'BESTSELLER',
        features: [
          { text: 'Alles aus Basis', included: true },
          { text: 'Mehrere Tablets (3–5)', included: true },
          { text: 'Echtzeit-Küchenansicht', included: true },
          { text: 'Schneller Support (3 Stunden Antwort)', included: true },
          { text: 'Inhaltsänderungen: 2x/Monat', included: true },
          { text: 'Personalplanung & Zeiterfassung', included: true },
          { text: 'Leistungsüberwachung', included: true },
          { text: 'Tagesbericht (limitiert)', included: true },
        ],
      },
      {
        name: 'Premium',
        price: '130',
        currency: '€',
        period: '/Monat',
        description: 'Für große Restaurants und Ketten',
        cta: 'Beraten Lassen',
        features: [
          { text: 'Alles aus Standard', included: true },
          { text: 'Unbegrenzte Tablets', included: true },
          { text: 'Prioritäts-Support', included: true },
          { text: 'Individuelle Anpassungen', included: true },
          { text: 'Tagesbericht (Chef-Zugang: Umsatz, Bestseller, Überblick)', included: true },
          { text: 'Inhaltsänderungen: Unlimited', included: true },
          { text: 'Leistungsüberwachung', included: true },
          { text: 'Erweiterte Analytics', included: true },
        ],
      },
    ],
    faq: [
      {
        q: 'Wie lange kann ich kostenlos testen?',
        a: 'Alle Pläne können 3 Wochen kostenlos getestet werden. Keine Kreditkarte erforderlich.',
      },
      {
        q: 'Was kostet die Einrichtung?',
        a: 'Es gibt eine einmalige Einrichtungsgebühr von 900€, die 1 Tablet, 1 Bondrucker, notwendige Hardware, Schulung und Support in der Einrichtungsphase beinhaltet.',
      },
      {
        q: 'Kann ich jederzeit kündigen?',
        a: 'Ja, Sie können Ihr Abonnement jederzeit monatlich kündigen. Keine Langzeitverpflichtung.',
      },
      {
        q: 'Was ist ein Tagesbericht?',
        a: 'Der Tagesbericht zeigt Umsätze, Bestseller und tägliche Übersicht mit persönlichem Chef-Zugang (Benutzername/Passwort). Premium-Kunden erhalten erweiterte Reports.',
      },
      {
        q: 'Gibt es zusätzliche Kosten für mehr Benutzer?',
        a: 'Die Anzahl der Benutzer ist in Ihrem Plan enthalten. Bei Fragen zum Leistungsumfang kontaktieren Sie uns unter degitech.kontakt@gmail.com',
      },
    ],
  } : {
    heading: 'Clear Plans, Fair Prices',
    subheading: 'Choose the model that fits your operation size. Plans are tiered by operation size, not by number of tables.',
    setupFee: 'Setup Fee',
    setupFeeAmount: '€900 one-time (includes 1 tablet, 1 receipt printer, hardware, training & support)',
    trial: '3 weeks free trial',
    trialDetails: 'All plans can be tested free for 3 weeks. No credit card required.',
    plans: [
      {
        name: 'Basic',
        price: '49',
        currency: '€',
        period: '/month',
        description: 'For small cafes and quick-service restaurants',
        cta: 'Get Consultation',
        features: [
          { text: 'Order & Table System', included: true },
          { text: '1–2 Tablets', included: true },
          { text: 'Basic Support', included: true },
          { text: 'Multi-language Support', included: true },
          { text: 'Content Updates: 1x/month', included: true },
          { text: 'Real-time Kitchen Display', included: false },
          { text: 'Daily Reports', included: false },
          { text: 'Fast Support (3 hours)', included: false },
        ],
      },
      {
        name: 'Standard',
        price: '95',
        currency: '€',
        period: '/month',
        description: 'For typical restaurants (70% of our customers)',
        cta: 'Get Consultation',
        featured: true,
        badge: 'BESTSELLER',
        features: [
          { text: 'Everything in Basic', included: true },
          { text: 'Multiple Tablets (3–5)', included: true },
          { text: 'Real-time Kitchen Display', included: true },
          { text: 'Fast Support (3 hour response)', included: true },
          { text: 'Content Updates: 2x/month', included: true },
          { text: 'Staff Management & Time Tracking', included: true },
          { text: 'Staff Performance Monitoring', included: true },
          { text: 'Daily Report (limited)', included: true },
        ],
      },
      {
        name: 'Premium',
        price: '130',
        currency: '€',
        period: '/month',
        description: 'For large restaurants and chains',
        cta: 'Get Consultation',
        features: [
          { text: 'Everything in Standard', included: true },
          { text: 'Unlimited Tablets', included: true },
          { text: 'Priority Support', included: true },
          { text: 'Custom Modifications', included: true },
          { text: 'Daily Report (Chef access: Revenue, Bestsellers, Overview)', included: true },
          { text: 'Content Updates: Unlimited', included: true },
          { text: 'Staff Performance Monitoring', included: true },
          { text: 'Advanced Analytics', included: true },
        ],
      },
    ],
    faq: [
      {
        q: 'How long can I test for free?',
        a: 'All plans can be tested free for 3 weeks. No credit card required.',
      },
      {
        q: 'What is the setup cost?',
        a: 'There is a one-time setup fee of €900, which includes 1 tablet, 1 receipt printer, necessary hardware, training, and support during setup.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes, you can cancel your subscription monthly anytime. No long-term commitment.',
      },
      {
        q: 'What is a daily report?',
        a: 'The daily report shows revenue, bestsellers, and daily overview with personal chef access (username/password). Premium customers receive advanced reports.',
      },
      {
        q: 'Are there extra costs for more users?',
        a: 'The number of users is included in your plan. For questions about scope, contact us at degitech.kontakt@gmail.com',
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
          <p className="text-xl text-gray-600 mb-6">{t.subheading}</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 inline-block">
            <p className="text-sm font-semibold text-blue-900">{t.setupFee}: {t.setupFeeAmount}</p>
            <p className="text-sm text-blue-700 mt-1">✓ {t.trial}</p>
          </div>
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
                  ? 'border-[#E8762C] bg-white shadow-xl md:scale-105'
                  : 'border-gray-200 bg-white hover:border-[#E8762C]'
              }`}
            >
              {plan.featured && (
                <div className="bg-[#E8762C] text-white py-2 px-4 text-center text-sm font-bold">
                  {plan.badge}
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
              ? t.trialDetails
              : t.trialDetails}
          </p>
          <button className="bg-[#E8762C] hover:bg-[#d46620] text-white px-8 py-3 rounded-lg font-semibold transition">
            {language === 'de' ? 'Beraten Lassen' : 'Get Consultation'}
          </button>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
