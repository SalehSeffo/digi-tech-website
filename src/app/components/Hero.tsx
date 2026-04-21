interface HeroProps {
  language: 'de' | 'en';
}

export function Hero({ language }: HeroProps) {
  const t = {
    de: {
      headline: 'Ihr Restaurant. Digitalisiert. Erfolgreich.',
      subheadline: 'Die All-in-One-Plattform für modernes Restaurantmanagement in Deutschland, Österreich und der Schweiz',
      cta1: 'Kostenlos testen',
      cta2: 'Demo ansehen',
    },
    en: {
      headline: 'Your Restaurant. Digitized. Successful.',
      subheadline: 'The all-in-one platform for modern restaurant management in Germany, Austria, and Switzerland',
      cta1: 'Start Free Trial',
      cta2: 'Watch Demo',
    },
  };

  const text = t[language];

  return (
    <section className="relative bg-gradient-to-b from-accent/50 to-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {text.headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {text.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg">
              {text.cta1}
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-background text-foreground border-2 border-border rounded-lg hover:bg-secondary transition-colors">
              {text.cta2}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
