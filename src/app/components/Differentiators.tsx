import { Send, Euro, HeadphonesIcon } from 'lucide-react';

interface DifferentiatorsProps {
  language: 'de' | 'en';
}

export function Differentiators({ language }: DifferentiatorsProps) {
  const t = {
    de: {
      title: 'Warum Gastly?',
      reports: {
        title: 'Tagesberichte',
        description: 'Tagesberichte über Umsatz, Bestseller und den täglichen Überblick — direkt für den Chef mit persönlichem Zugang.',
      },
      pricing: {
        title: 'Klare Pakete, faire Preise',
        description: 'Wählen Sie das Modell, das zu Ihrer Betriebsgröße passt. Basis für kleine Cafés, Standard für typische Restaurants, Premium für große Betriebe.',
      },
      support: {
        title: 'Erstklassiger Support',
        description: 'Deutschsprachiger Support. Standard-Plan: Antwort innerhalb von 3 Stunden. Premium-Plan: Prioritäts-Support. Wir verstehen Ihr Geschäft.',
      },
    },
    en: {
      title: 'Why Gastly?',
      reports: {
        title: 'Daily Reports',
        description: 'Daily reports on revenue, bestsellers, and overview – direct access for the chef with personal login.',
      },
      pricing: {
        title: 'Clear Plans, Fair Prices',
        description: 'Choose the model that fits your operation size. Basic for small cafes, Standard for typical restaurants, Premium for large operations.',
      },
      support: {
        title: 'First-Class Support',
        description: 'German-speaking support. Standard Plan: response within 3 hours. Premium Plan: priority support. We understand your business.',
      },
    },
  };

  const text = t[language];

  const items = [
    { icon: Send, ...text.reports },
    { icon: Euro, ...text.pricing },
    { icon: HeadphonesIcon, ...text.support },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#CAF0F8]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03045E] text-center mb-12">{text.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border-2 border-[#CAF0F8] text-center hover:border-[#00B4D8] hover:shadow-xl hover:shadow-[#00B4D8]/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#CAF0F8] rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#0077B6]" />
                </div>
                <h3 className="text-xl font-semibold text-[#03045E] mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
