import { LucideIcon, ArrowRight } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { ImageWithFallback } from './ImageWithFallback';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureBlockProps {
  icon: LucideIcon;
  heading: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  features: Feature[];
  ctaText: string;
}

export function FeatureBlock({
  icon: Icon,
  heading,
  description,
  imageUrl,
  imageAlt,
  features,
  ctaText,
}: FeatureBlockProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
              <p className="text-muted-foreground max-w-3xl">{description}</p>
            </div>
          </div>

          <div className="mb-12">
            <ImageWithFallback
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-[400px] md:h-[600px] object-cover rounded-xl shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <button className="group px-6 py-3 bg-secondary text-foreground rounded-lg hover:bg-secondary/80 transition-all duration-300 flex items-center gap-2">
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
