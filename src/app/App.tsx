import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RestaurantManagementPage } from './pages/RestaurantManagementPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { ImpressumPage } from './pages/ImpressumPage';
import { DatenschutzPage } from './pages/DatenschutzPage';
import { AGBPage } from './pages/AGBPage';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
  const [language, setLanguage] = useState<'de' | 'en'>('de');

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage language={language} onLanguageChange={setLanguage} />} />
          <Route path="/restaurant-management" element={<RestaurantManagementPage language={language} onLanguageChange={setLanguage} />} />
          <Route path="/pricing" element={<PricingPage language={language} onLanguageChange={setLanguage} />} />
          <Route path="/contact" element={<ContactPage language={language} onLanguageChange={setLanguage} />} />
          <Route path="/impressum" element={<ImpressumPage language={language} onLanguageChange={setLanguage} />} />
          <Route path="/datenschutz" element={<DatenschutzPage language={language} onLanguageChange={setLanguage} />} />
          <Route path="/agb" element={<AGBPage language={language} onLanguageChange={setLanguage} />} />
        </Routes>
      </Router>
      <CookieConsent language={language} />
    </>
  );
}
