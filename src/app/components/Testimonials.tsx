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
          text: 'Gastly hat unsere gesamte Betriebsführung verändert. Keine Zettel mehr, keine Fehler bei Bestellungen. Die Zeitersparnis ist enorm — wir können uns endlich auf unsere Gäste konzentrieren.',
          author: 'Maria Schmidt',
          role: 'Inhaberin, Bella Italia München',
        },
        {
          text: 'Seit wir Gastly nutzen, läuft die Küche wie ein Uhrwerk. Die Echtzeit-Küchenansicht macht einen riesigen Unterschied. Bestellungen kommen sofort an — kein Rufen mehr.',
          author: 'Thomas Weber',
          role: 'Küchenchef, Weber\'s Gasthaus Berlin',
        },
        {
          text: 'Der deutschsprachige Support ist fantastisch. Bei Fragen wird sofort geholfen. Für uns als mittelständisches Restaurant ist das unbezahlbar.',
          author: 'Anna Müller',
          role: 'Betriebsleiterin, Alpenblick Restaurant',
        },
      ],
    },
    en: {
      title: 'What Our Customers Say',
      testimonials: [
        {
          text: 'Gastly transformed our entire operations. No more paper, no more order mistakes. The time savings are enormous — we can finally focus on our guests.',
          author: 'Maria Schmidt',
          role: 'Owner, Bella Italia Munich',
        },
        {
          text: 'Since we started using Gastly, the kitchen runs like clockwork. The real-time kitchen display makes a huge difference. Orders arrive instantly — no more shouting.',
          author: 'Thomas Weber',
          role: 'Head Chef, Weber\'s Gasthaus Berlin',
        },
        {
          text: 'The German-speaking support is fantastic. Questions are answered immediately. For us as a medium-sized restaurant, this is invaluable.',
          author: 'Anna Müller',
          role: 'Operations Manager, Alpenblick Restaurant',
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
    <section className="py-16 md:py-24 bg-[#CAF0F8]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#03045E] text-center mb-12">{text.title}</h2>

          <div className="relative">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-[#CAF0F8]">
              <Quote className="w-12 h-12 text-[#00B4D8]/30 mb-6" />
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                "{text.testimonials[activeIndex].text}"
              </p>
              <div>
                <p className="font-bold text-[#03045E]">{text.testimonials[activeIndex].author}</p>
                <p className="text-sm text-[#0077B6]">{text.testimonials[activeIndex].role}</p>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {text.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-[#0077B6] w-8' : 'bg-[#CAF0F8] w-2.5'
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
