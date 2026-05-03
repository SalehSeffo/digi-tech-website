import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DigiTechIcon } from './DigiTechIcon';

interface HeaderProps {
  language: 'de' | 'en';
  onLanguageChange: (lang: 'de' | 'en') => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    de: {
      restaurant: 'Restaurantmanagement',
      pricing: 'Preise',
      consult: 'Beraten Lassen',
      login: 'Anmelden',
    },
    en: {
      restaurant: 'Restaurant Management',
      pricing: 'Pricing',
      consult: 'Get Consultation',
      login: 'Login',
    },
  };

  const text = t[language];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-8 lg:gap-12">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <DigiTechIcon size={40} />
              <span className="font-bold text-lg hidden sm:inline text-[#0EA5E9]">Digi-Tech</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/restaurant-management" className="text-gray-700 hover:text-[#E8762C] transition-colors font-medium text-sm">
                {text.restaurant}
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-[#E8762C] transition-colors font-medium text-sm">
                {text.pricing}
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onLanguageChange(language === 'de' ? 'en' : 'de')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle language"
            >
              <span className="text-2xl">{language === 'de' ? '🇩🇪' : '🇬🇧'}</span>
            </button>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors text-sm">
                {text.login}
              </button>
              <Link to="/contact" className="px-6 py-2.5 bg-[#E8762C] text-white rounded-lg hover:bg-[#d46620] transition-colors font-medium text-sm">
                {text.consult}
              </Link>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2">
              <Link 
                to="/restaurant-management" 
                className="px-4 py-2 text-gray-700 hover:text-[#E8762C] hover:bg-gray-50 rounded-lg transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {text.restaurant}
              </Link>
              <Link 
                to="/pricing" 
                className="px-4 py-2 text-gray-700 hover:text-[#E8762C] hover:bg-gray-50 rounded-lg transition-colors" 
                onClick={() => setMobileMenuOpen(false)}
              >
                {text.pricing}
              </Link>
              <div className="flex flex-col gap-2 px-4 pt-2">
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                  {text.login}
                </button>
                <Link 
                  to="/contact" 
                  className="px-4 py-2 bg-[#E8762C] text-white rounded-lg hover:bg-[#d46620] transition-colors text-center font-medium" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {text.consult}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
