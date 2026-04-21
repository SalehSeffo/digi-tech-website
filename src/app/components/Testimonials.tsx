import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TestimonialsProps {
  language: 'de' | 'en';
}

export function Testimonials({ language }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const t = {
    de: {
      title: 'Was unsere Kunden sagen',
      testimonials: [
        {
          text: 'Digi-Tech hat unsere gesamte Betriebsführung revolutioniert. Die Zeitersparnis ist enorm und wir können uns endlich auf das konzentrieren, was wirklich zählt – unsere Gäste.',
          author: 'Maria Schmidt',
          role: 'Inhaberin, Bella Italia München',
        },
        {
          text: 'Die Integration aller Tools in einer Plattform war genau das, was wir gebraucht haben. Besonders die Marketing-Automatisierung hat unsere Reservierungen um 40% gesteigert.',
          author: 'Thomas Weber',
          role: 'Geschäftsführer, Weber\'s Gasthaus Berlin',
        },
        {
          text: 'Der deutschsprachige Support ist fantastisch. Bei Fragen wird sofort geholfen. Für uns als mittelständisches Restaurant ist das unbezahlbar.',
          author: 'Anna Müller',
          role: 'Betriebsleiterin, Alpenblick Salzburg',
        },
      ],
    },
    en: {
      title: 'What Our Customers Say',
      testimonials: [
        {
          text: 'Digi-Tech has revolutionized our entire operations. The time savings are enormous and we can finally focus on what really matters – our guests.',
          author: 'Maria Schmidt',
          role: 'Owner, Bella Italia Munich',
        },
        {
          text: 'The integration of all tools in one platform was exactly what we needed. Especially the marketing automation has increased our reservations by 40%.',
          author: 'Thomas Weber',
          role: 'Managing Director, Weber\'s Gasthaus Berlin',
        },
        {
          text: 'The German-speaking support is fantastic. Questions are answered immediately. For us as a medium-sized restaurant, this is invaluable.',
          author: 'Anna Müller',
          role: 'Operations Manager, Alpenblick Salzburg',
        },
      ],
    },
  };

  const text = t[language];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % text.testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [text.testimonials.length]);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{text.title}</h2>

          <div className="relative">
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-xl border border-border">
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
                "{text.testimonials[activeIndex].text}"
              </p>
              <div>
                <p className="font-semibold">{text.testimonials[activeIndex].author}</p>
                <p className="text-sm text-muted-foreground">{text.testimonials[activeIndex].role}</p>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {text.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex ? 'bg-primary w-8' : 'bg-border'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
