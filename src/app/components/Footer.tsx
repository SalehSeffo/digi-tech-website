import { Apple, Play } from 'lucide-react';
import { GastlyLogo } from './GastlyLogo';

interface FooterProps {
  language: 'de' | 'en';
}

export function Footer({ language }: FooterProps) {
  const t = {
    de: {
      about: 'Über uns',
      careers: 'Karriere',
      blog: 'Blog',
      contact: 'Kontakt',
      email: 'kontakt@gastly.de',
      phone: '+49 30 1234 5678',
      address: 'Musterstraße 123, 10115 Berlin, Deutschland',
      appStore: 'App Store',
      playStore: 'Google Play',
      rights: '© 2026 GASTLY. Alle Rechte vorbehalten.',
    },
    en: {
      about: 'About Us',
      careers: 'Careers',
      blog: 'Blog',
      contact: 'Contact',
      email: 'contact@gastly.com',
      phone: '+49 30 1234 5678',
      address: 'Musterstraße 123, 10115 Berlin, Germany',
      appStore: 'App Store',
      playStore: 'Google Play',
      rights: '© 2026 GASTLY. All rights reserved.',
    },
  };

  const text = t[language];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GastlyLogo size={40} variant="primary" />
              <span className="font-bold text-lg text-[#2D3E50]">GASTLY</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {language === 'de'
                ? 'Die moderne Lösung für Ihr Restaurant.'
                : 'The modern solution for your restaurant.'}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{language === 'de' ? 'Unternehmen' : 'Company'}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {text.about}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {text.careers}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  {text.blog}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{text.contact}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{text.email}</li>
              <li>{text.phone}</li>
              <li>{text.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{language === 'de' ? 'App laden' : 'Download App'}</h4>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors">
                <Apple className="w-5 h-5" />
                <span className="text-sm">{text.appStore}</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors">
                <Play className="w-5 h-5" />
                <span className="text-sm">{text.playStore}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          {text.rights}
        </div>
      </div>
    </footer>
  );
}
