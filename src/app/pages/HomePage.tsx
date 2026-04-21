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
  Package,
  BarChart3,
  Mail,
  Star,
  Gift,
  Instagram,
  Layout,
  Globe,
  Smartphone,
  Search,
  Clock,
  TrendingUp,
  Zap,
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
            icon: Package,
            title: 'Inventarverwaltung',
            description: 'Bestandsüberwachung mit automatischen Bestellvorschlägen und Lieferantenintegration.',
          },
          {
            icon: BarChart3,
            title: 'Reporting & Analytics',
            description: 'Detaillierte Berichte über Umsatz, Auslastung und Gästetrends – live und automatisiert.',
          },
        ],
        cta: '→ MEHR ÜBER RESTAURANTMANAGEMENT',
      },
      marketing: {
        heading: 'Restaurant-Marketing',
        description:
          'Gewinnen Sie mehr Gäste und steigern Sie die Kundenbindung mit automatisierten Kampagnen, Social Media Integration und personalisierten Angeboten.',
        imageAlt: 'Restaurant Marketing Tools',
        features: [
          {
            icon: Mail,
            title: 'Email-Marketing',
            description: 'Erstellen Sie automatische Willkommels-Mails, Feedback-Kampagnen und persönliche Angebote für Ihre Gäste.',
          },
          {
            icon: Star,
            title: 'Bewertungsmanagement',
            description: 'Überwachen Sie Google-Bewertungen, reagieren Sie schnell auf Feedback und steigern Sie Ihr Online-Rating.',
          },
          {
            icon: Gift,
            title: 'Promotionen & Gutscheine',
            description: 'Erstellen und verteilen Sie zeitgesteuerte Angebote, Rabatte und Loyalitätsprogramme direkt an Ihre Gäste.',
          },
          {
            icon: Instagram,
            title: 'Social-Media-Integration',
            description: 'Verbinden Sie Ihre Marketing mit Instagram und Facebook – automatische Beiträge und Gast-Engagement.',
          },
        ],
        cta: '→ MEHR ÜBER RESTAURANT-MARKETING',
      },
      website: {
        heading: 'Restaurant-Website',
        description:
          'Präsentieren Sie Ihr Restaurant professionell online mit einer schönen Website, aktuellem Speiseplan und integriertem Reservierungssystem.',
        imageAlt: 'Restaurant Website Design',
        features: [
          {
            icon: Layout,
            title: 'Website-Builder',
            description: 'Erstellen Sie eine professionelle Website ohne Code – anpassbare Templates für Ihr Restaurant.',
          },
          {
            icon: Globe,
            title: 'Digitale Speisekarte',
            description: 'Einfach verwaltbare Menüs mit Fotos, Preisen und Allergenen – automatisch auf Ihrer Website aktuell.',
          },
          {
            icon: Smartphone,
            title: 'Mobile-Ready',
            description: 'Ihre Website sieht auf allen Geräten perfekt aus – Smartphone, Tablet und Desktop optimiert.',
          },
          {
            icon: Search,
            title: 'SEO & Online-Sichtbarkeit',
            description: 'Integrierte SEO-Optimierung, Google-Präsenz und lokale Suchergebnisse für mehr Sichtbarkeit.',
          },
        ],
        cta: '→ MEHR ÜBER RESTAURANT-WEBSITE',
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
            icon: Package,
            title: 'Inventory Management',
            description: 'Stock monitoring with automatic order suggestions and supplier integration.',
          },
          {
            icon: BarChart3,
            title: 'Reporting & Analytics',
            description: 'Detailed reports on revenue, occupancy, and guest trends – live and automated.',
          },
        ],
        cta: '→ MORE ABOUT RESTAURANT MANAGEMENT',
      },
      marketing: {
        heading: 'Restaurant Marketing',
        description:
          'Attract more guests and increase customer loyalty with automated campaigns, social media integration, and personalized offers.',
        imageAlt: 'Restaurant Marketing Tools',
        features: [
          {
            icon: Mail,
            title: 'Email Marketing',
            description: 'Create automated welcome emails, feedback campaigns, and personal offers for your guests.',
          },
          {
            icon: Star,
            title: 'Review Management',
            description: 'Monitor Google reviews, respond quickly to feedback, and boost your online rating.',
          },
          {
            icon: Gift,
            title: 'Promotions & Vouchers',
            description: 'Create and distribute time-based offers, discounts, and loyalty programs directly to your guests.',
          },
          {
            icon: Instagram,
            title: 'Social Media Integration',
            description: 'Connect your marketing with Instagram and Facebook – automatic posts and guest engagement.',
          },
        ],
        cta: '→ MORE ABOUT RESTAURANT MARKETING',
      },
      website: {
        heading: 'Restaurant Website',
        description:
          'Present your restaurant professionally online with a beautiful website, up-to-date menu, and integrated reservation system.',
        imageAlt: 'Restaurant Website Design',
        features: [
          {
            icon: Layout,
            title: 'Website Builder',
            description: 'Create a professional website without code – customizable templates for your restaurant.',
          },
          {
            icon: Globe,
            title: 'Digital Menu',
            description: 'Easy-to-manage menus with photos, prices, and allergens – automatically updated on your website.',
          },
          {
            icon: Smartphone,
            title: 'Mobile-Ready',
            description: 'Your website looks perfect on all devices – smartphone, tablet, and desktop optimized.',
          },
          {
            icon: Search,
            title: 'SEO & Online Visibility',
            description: 'Integrated SEO optimization, Google presence, and local search results for better visibility.',
          },
        ],
        cta: '→ MORE ABOUT RESTAURANT WEBSITE',
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

      <div className="bg-accent/20">
        <FeatureBlock
          icon={TrendingUp}
          heading={t.marketing.heading}
          description={t.marketing.description}
          imageUrl="https://images.unsplash.com/photo-1564758564211-cc16d061f020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
          imageAlt={t.marketing.imageAlt}
          features={t.marketing.features}
          ctaText={t.marketing.cta}
        />
      </div>

      <FeatureBlock
        icon={Zap}
        heading={t.website.heading}
        description={t.website.description}
        imageUrl="https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
        imageAlt={t.website.imageAlt}
        features={t.website.features}
        ctaText={t.website.cta}
      />

      <Differentiators language={language} />
      <Testimonials language={language} />
      <Footer language={language} />
    </div>
  );
}
