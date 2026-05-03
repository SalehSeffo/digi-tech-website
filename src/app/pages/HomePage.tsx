import { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { FeatureBlock } from '../components/FeatureBlock';
import { Differentiators } from '../components/Differentiators';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';
import {
  Grid3x3,
  ShoppingCart,
  BarChart3,
  TrendingUp,
  Clock,
} from 'lucide-react';

interface HomePageProps {
  language: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

export function HomePage({ language, onLanguageChange }: HomePageProps) {
  const translations = {
    de: {
      restaurantManagement: {
        heading: 'Restaurantmanagement',
        description:
          'Optimieren Sie Ihre täglichen Abläufe mit intelligenten Tools für Tischplanung, Bestellverwaltung, Inventar und Personal. Alles zentral gesteuert.',
        imageAlt: 'Restaurant Management Dashboard',
        features: [
          {
            icon: Grid3x3,
            title: 'Tischplanung',
            description: 'Verwalten Sie Ihren Gastraum mit Echtzeit-Verfügbarkeit, Gästeprofile und Reservierungshistorie.',
          },
          {
            icon: ShoppingCart,
            title: 'Bestellverwaltung',
            description: 'Schnelle Auftragserfassung von Tisch oder Bar mit Status-Updates für die Küche und Abrechnung.',
          },
          {
            icon: BarChart3,
            title: 'Tagesberichte & Analytics',
            description: 'Detaillierte Berichte über Umsatz, Bestseller und Gästetrends – direkt für den Chef.',
          },
          {
            icon: TrendingUp,
            title: 'Echtzeit-Küchenansicht',
            description: 'Echtzeitanzeige von Bestellungen in der Küche für optimalen Workflow.',
          },
        ],
        cta: '→ MEHR ÜBER RESTAURANTMANAGEMENT',
      },
    },
    en: {
      restaurantManagement: {
        heading: 'Restaurant Management',
        description:
          'Optimize your daily operations with intelligent tools for table planning, order management, inventory, and staff. All centrally controlled.',
        imageAlt: 'Restaurant Management Dashboard',
        features: [
          {
            icon: Grid3x3,
            title: 'Table Planning',
            description: 'Manage your dining room with real-time availability, guest profiles, and reservation history.',
          },
          {
            icon: ShoppingCart,
            title: 'Order Management',
            description: 'Quick order capture from table or bar with status updates to kitchen and billing.',
          },
          {
            icon: BarChart3,
            title: 'Daily Reports & Analytics',
            description: 'Detailed reports on revenue, bestsellers, and guest trends – direct for the chef.',
          },
          {
            icon: TrendingUp,
            title: 'Real-time Kitchen Display',
            description: 'Real-time order display in the kitchen for optimal workflow.',
          },
        ],
        cta: '→ MORE ABOUT RESTAURANT MANAGEMENT',
      },
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={onLanguageChange} />
      <Hero language={language} />

      <FeatureBlock
        icon={Clock}
        heading={t.restaurantManagement.heading}
        description={t.restaurantManagement.description}
        imageUrl="https://images.unsplash.com/photo-1728044849291-69f90d443aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        imageAlt={t.restaurantManagement.imageAlt}
        features={t.restaurantManagement.features}
        ctaText={t.restaurantManagement.cta}
      />

      <Differentiators language={language} />
      <Testimonials language={language} />
      <Footer language={language} />
    </div>
  );
}
