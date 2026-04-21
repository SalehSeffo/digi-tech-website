import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RestaurantManagementPage } from './pages/RestaurantManagementPage';
import { RestaurantMarketingPage } from './pages/RestaurantMarketingPage';
import { RestaurantWebsitePage } from './pages/RestaurantWebsitePage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [language, setLanguage] = useState<'de' | 'en'>('de');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage language={language} onLanguageChange={setLanguage} />} />
        <Route path="/restaurant-management" element={<RestaurantManagementPage language={language} onLanguageChange={setLanguage} />} />
        <Route path="/restaurant-marketing" element={<RestaurantMarketingPage language={language} onLanguageChange={setLanguage} />} />
        <Route path="/restaurant-website" element={<RestaurantWebsitePage language={language} onLanguageChange={setLanguage} />} />
        <Route path="/pricing" element={<PricingPage language={language} onLanguageChange={setLanguage} />} />
        <Route path="/contact" element={<ContactPage language={language} onLanguageChange={setLanguage} />} />
      </Routes>
    </Router>
  );
}
