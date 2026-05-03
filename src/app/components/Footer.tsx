import { Link } from 'react-router-dom';
import { GastlyLogo } from './GastlyLogo';

interface FooterProps {
  language: 'de' | 'en';
}

export function Footer({ language }: FooterProps) {
  const t = {
    de: {
      tagline: 'Die moderne Lösung für Ihr Restaurantmanagement.',
      product: 'Produkt',
      legal: 'Rechtliches',
      links: {
        management: 'Restaurantmanagement',
        pricing: 'Preise',
        contact: 'Kontakt',
        agb: 'AGB',
        impressum: 'Impressum',
        datenschutz: 'Datenschutz',
      },
      rights: '© 2026 Degi-Tech. Alle Rechte vorbehalten.',
      bavaria: 'Made with ❤️ in Bavaria',
    },
    en: {
      tagline: 'The modern solution for your restaurant management.',
      product: 'Product',
      legal: 'Legal',
      links: {
        management: 'Restaurant Management',
        pricing: 'Pricing',
        contact: 'Contact',
        agb: 'Terms & Conditions',
        impressum: 'Imprint',
        datenschutz: 'Privacy Policy',
      },
      rights: '© 2026 Degi-Tech. All rights reserved.',
      bavaria: 'Made with ❤️ in Bavaria',
    },
  };

  const text = t[language];

  return (
    <footer className="bg-[#03045E] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <GastlyLogo size={40} variant="primary" />
              <span className="font-bold text-lg text-[#00B4D8]">Degi-Tech</span>
            </div>
            <p className="text-sm text-[#90E0EF]">{text.tagline}</p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#00B4D8]">{text.product}</h4>
            <ul className="space-y-2 text-sm text-[#90E0EF]">
              <li><Link to="/restaurant-management" className="hover:text-white transition-colors">{text.links.management}</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">{text.links.pricing}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{text.links.contact}</Link></li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#00B4D8]">{text.legal}</h4>
            <ul className="space-y-2 text-sm text-[#90E0EF]">
              <li><Link to="/impressum" className="hover:text-white transition-colors">{text.links.impressum}</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white transition-colors">{text.links.datenschutz}</Link></li>
              <li><Link to="/agb" className="hover:text-white transition-colors">{text.links.agb}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#0077B6] flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[#90E0EF]">
          <span>{text.rights}</span>
          <span>{text.bavaria}</span>
        </div>
      </div>
    </footer>
  );
}
