import { Send, Euro, HeadphonesIcon } from 'lucide-react';

interface DifferentiatorsProps {
  language: 'de' | 'en';
}

export function Differentiators({ language }: DifferentiatorsProps) {
  const t = {
    de: {
      title: 'Warum DEGI-TECH?',
      telegram: {
        title: 'Telegram-Berichte',
        description: 'Erhalten Sie Echtzeit-Updates und Berichte direkt in Telegram – bleiben Sie immer informiert, egal wo Sie sind.',
      },
      pricing: {
        title: 'Transparente Preise',
        description: 'Keine versteckten Kosten. Bezahlen Sie nur für das, was Sie nutzen. Flexible Pläne für jede Restaurantgröße.',
      },
      support: {
        title: 'Erstklassiger Support',
        description: 'Deutschsprachiger Support rund um die Uhr. Wir verstehen Ihr Geschäft und sind immer für Sie da.',
      },
    },
    en: {
      title: 'Why DEGI-TECH?',
      telegram: {
        title: 'Telegram Reports',
        description: 'Receive real-time updates and reports directly in Telegram – stay informed wherever you are.',
      },
      pricing: {
        title: 'Transparent Pricing',
        description: 'No hidden costs. Pay only for what you use. Flexible plans for every restaurant size.',
      },
      support: {
        title: 'First-Class Support',
        description: '24/7 German-speaking support. We understand your business and are always there for you.',
      },
    },
  };

  const text = t[language];

  const items = [
    { icon: Send, ...text.telegram },
    { icon: Euro, ...text.pricing },
    { icon: HeadphonesIcon, ...text.support },
  ];

  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{text.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
