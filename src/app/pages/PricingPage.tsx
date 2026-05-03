import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Check, X, ArrowRight, Zap } from 'lucide-react';

interface PricingPageProps {
  language: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

export function PricingPage({ language, onLanguageChange }: PricingPageProps) {
  const t = language === 'de' ? {
    heading: 'Gastly — Klare Pakete, faire Preise',
    subheading: 'Wählen Sie das Modell, das zu Ihrer Betriebsgröße passt. Die Pakete sind nach Betriebsgröße gestaffelt, nicht nach Tischanzahl.',
    setupFee: 'Einrichtungsgebühr',
    setupFeeAmount: '900€ einmalig (beinhaltet 1 Tablet, 1 Bondrucker, Schulung & Support)',
    trial: '3 Wochen kostenlos testen — keine Kreditkarte erforderlich',
    perMonth: '/Monat',
    cta: 'Beraten Lassen',
    faqTitle: 'Häufig gestellte Fragen',
    plans: [
      {
        name: 'Basis',
        price: '49',
        description: 'Für kleine Cafés und Imbisse',
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
        description: 'Für typische Restaurants (70% unserer Kunden)',
        featured: true,
        badge: 'BESTSELLER',
        features: [
          { text: 'Alles aus Basis', included: true },
          { text: 'Mehrere Tablets (3–5)', included: true },
          { text: 'Echtzeit-Küchenansicht', included: true },
          { text: 'Schneller Support (3 Stunden Antwort)', included: true },
          { text: 'Inhaltsänderungen: 2x/Monat', included: true },
          { text: 'Tagesbericht (limitiert)', included: true },
          { text: 'Mehrsprachige Benutzeroberfläche', included: true },
        ],
      },
      {
        name: 'Premium',
        price: '130',
        description: 'Für große Restaurants und Ketten',
        features: [
          { text: 'Alles aus Standard', included: true },
          { text: 'Unbegrenzte Tablets', included: true },
          { text: 'Prioritäts-Support', included: true },
          { text: 'Individuelle Anpassungen', included: true },
          { text: 'Tagesbericht (Chef-Zugang: Umsatz, Bestseller)', included: true },
          { text: 'Inhaltsänderungen: Unbegrenzt', included: true },
          { text: 'Erweiterte Analytics', included: true },
          { text: 'Leistungsüberwachung', included: true },
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
        a: 'Die Anzahl der Benutzer ist in Ihrem Plan enthalten. Bei Fragen kontaktieren Sie uns unter degitech.kontakt@gmail.com',
      },
    ],
  } : {
    heading: 'Gastly — Clear Plans, Fair Prices',
    subheading: 'Choose the model that fits your operation size. Plans are tiered by operation size, not by number of tables.',
    setupFee: 'Setup Fee',
    setupFeeAmount: '€900 one-time (includes 1 tablet, 1 receipt printer, hardware, training & support)',
    trial: '3 weeks free trial — no credit card required',
    perMonth: '/month',
    cta: 'Get Consultation',
    faqTitle: 'Frequently Asked Questions',
    plans: [
      {
        name: 'Basic',
        price: '49',
        description: 'For small cafes and quick-service restaurants',
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
        description: 'For typical restaurants (70% of our customers)',
        featured: true,
        badge: 'BESTSELLER',
        features: [
          { text: 'Everything in Basic', included: true },
          { text: 'Multiple Tablets (3–5)', included: true },
          { text: 'Real-time Kitchen Display', included: true },
          { text: 'Fast Support (3 hour response)', included: true },
          { text: 'Content Updates: 2x/month', included: true },
          { text: 'Daily Report (limited)', included: true },
          { text: 'Multi-language interface', included: true },
        ],
      },
      {
        name: 'Premium',
        price: '130',
        description: 'For large restaurants and chains',
        features: [
          { text: 'Everything in Standard', included: true },
          { text: 'Unlimited Tablets', included: true },
          { text: 'Priority Support', included: true },
          { text: 'Custom Modifications', included: true },
          { text: 'Daily Report (Chef access: Revenue, Bestsellers)', included: true },
          { text: 'Content Updates: Unlimited', included: true },
          { text: 'Advanced Analytics', included: true },
          { text: 'Staff Performance Monitoring', included: true },
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
        a: 'The number of users is included in your plan. For questions contact us at degitech.kontakt@gmail.com',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={onLanguageChange} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#03045E] py-24 px-4">
        {/* animated background rings */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#0077B6]/30 animate-ping" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#00B4D8]/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {t.heading}
          </h1>
          <p className="text-lg text-[#90E0EF] mb-4 max-w-2xl mx-auto">{t.subheading}</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 max-w-6xl mx-auto -mt-8">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {t.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-300 group overflow-visible ${
                plan.featured
                  ? 'bg-[#03045E] text-white shadow-2xl shadow-[#0077B6]/40 scale-105 z-10'
                  : 'bg-white border-2 border-[#CAF0F8] hover:border-[#00B4D8] hover:shadow-xl hover:shadow-[#00B4D8]/10 hover:-translate-y-1'
              }`}
            >
              {plan.featured && (
                <div className="flex justify-center pt-4 -mb-2">
                  <span className="bg-gradient-to-r from-[#00B4D8] to-[#0077B6] text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg tracking-wider">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className={`text-xl font-bold mb-1 ${plan.featured ? 'text-[#90E0EF]' : 'text-[#03045E]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.featured ? 'text-[#CAF0F8]/70' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                <div className="mb-6 flex items-end gap-1">
                  <span className={`text-5xl font-extrabold ${plan.featured ? 'text-white' : 'text-[#03045E]'}`}>
                    {plan.price}€
                  </span>
                  <span className={`text-sm mb-2 ${plan.featured ? 'text-[#90E0EF]' : 'text-gray-400'}`}>
                    {t.perMonth}
                  </span>
                </div>

                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    plan.featured
                      ? 'bg-[#00B4D8] hover:bg-[#0077B6] text-white shadow-lg shadow-[#00B4D8]/30'
                      : 'bg-[#CAF0F8] hover:bg-[#00B4D8] text-[#03045E] hover:text-white'
                  }`}
                >
                  {t.cta} <ArrowRight size={16} />
                </Link>

                <div className="mt-8 space-y-3 border-t border-current/10 pt-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <span className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.featured ? 'bg-[#00B4D8]/20' : 'bg-[#CAF0F8]'
                        }`}>
                          <Check size={12} className={plan.featured ? 'text-[#00B4D8]' : 'text-[#0077B6]'} />
                        </span>
                      ) : (
                        <X size={20} className="text-gray-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${
                        feature.included
                          ? plan.featured ? 'text-[#CAF0F8]' : 'text-gray-700'
                          : 'text-gray-300'
                      }`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Setup fee note below cards */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-[#0077B6] flex-shrink-0" />
            <span><span className="font-semibold text-[#03045E]">{t.setupFee}:</span> {t.setupFeeAmount}</span>
          </div>
          <span className="hidden sm:block text-gray-300">|</span>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-[#0077B6] flex-shrink-0" />
            <span>{t.trial}</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#CAF0F8]/30 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#03045E] mb-12 text-center">{t.faqTitle}</h2>
          <div className="space-y-4">
            {t.faq.map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-[#CAF0F8] overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-[#03045E] list-none hover:bg-[#CAF0F8]/40 transition-colors">
                  {item.q}
                  <span className="ml-4 text-[#0077B6] transition-transform duration-200 group-open:rotate-45 flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-[#CAF0F8]">
                  <p className="pt-4">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-[#03045E] via-[#0077B6] to-[#00B4D8] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === 'de' ? 'Bereit zu starten?' : 'Ready to get started?'}
          </h2>
          <p className="text-[#CAF0F8] mb-8">
            {t.trial}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#03045E] hover:bg-[#CAF0F8] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            {t.cta} <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
