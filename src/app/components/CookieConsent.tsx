"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface CookieConsentProps {
  language?: 'de' | 'en';
}

export function CookieConsent({ language = 'de' }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const translations = {
    de: {
      title: 'Cookie-Einstellungen',
      description: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern, unsere Website zu optimieren und Ihnen personalisierte Inhalte anzubieten.',
      necessary: 'Notwendige Cookies',
      necessaryDesc: 'Für den Betrieb der Website erforderlich. Können nicht deaktiviert werden.',
      analytics: 'Analyse-Cookies',
      analyticsDesc: 'Helfen uns zu verstehen, wie Sie unsere Website nutzen.',
      marketing: 'Marketing-Cookies',
      marketingDesc: 'Für personalisierte Werbung und Retargeting-Kampagnen.',
      acceptAll: 'Alle akzeptieren',
      rejectAll: 'Nur notwendig',
      settings: 'Einstellungen',
      save: 'Speichern',
      moreInfo: 'Mehr Informationen',
    },
    en: {
      title: 'Cookie Settings',
      description: 'We use cookies to improve your experience, optimize our website, and provide personalized content.',
      necessary: 'Necessary Cookies',
      necessaryDesc: 'Required for the operation of the website. Cannot be disabled.',
      analytics: 'Analytics Cookies',
      analyticsDesc: 'Help us understand how you use our website.',
      marketing: 'Marketing Cookies',
      marketingDesc: 'For personalized advertising and retargeting campaigns.',
      acceptAll: 'Accept All',
      rejectAll: 'Only Necessary',
      settings: 'Settings',
      save: 'Save',
      moreInfo: 'More Information',
    },
  };

  const t = translations[language] || translations.de;

  const [cookies, setCookies] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  // Check if user has already made a choice
  useEffect(() => {
    const savedCookieChoice = document.cookie
      .split('; ')
      .find(row => row.startsWith('cookie_consent='));

    if (!savedCookieChoice) {
      setShowBanner(true);
    } else {
      try {
        const choice = JSON.parse(decodeURIComponent(savedCookieChoice.split('=')[1]));
        setCookies(choice);
      } catch (e) {
        setShowBanner(true);
      }
    }
  }, []);

  const saveCookieChoice = (choice: typeof cookies) => {
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);

    document.cookie = `cookie_consent=${encodeURIComponent(JSON.stringify(choice))}; path=/; expires=${expiryDate.toUTCString()}`;
    setCookies(choice);
    setShowBanner(false);
    setShowDetails(false);
  };

  const handleAcceptAll = () => {
    saveCookieChoice({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    saveCookieChoice({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSaveSettings = () => {
    saveCookieChoice(cookies);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowBanner(false)} />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 max-h-screen overflow-y-auto">
        <div className="bg-white shadow-2xl rounded-t-xl md:rounded-xl md:max-w-2xl md:mx-auto md:mb-4 md:mr-4 md:bottom-4 md:right-4 md:left-auto">
          {/* Close Button */}
          <button
            onClick={() => setShowBanner(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {!showDetails ? (
            // Main Banner
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#2D3E50] mb-3">{t.title}</h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">{t.description}</p>

              <div className="flex flex-col gap-3 md:flex-row md:gap-3">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium text-sm md:text-base"
                >
                  {t.rejectAll}
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="px-6 py-2 border-2 border-[#E8762C] text-[#E8762C] rounded-lg hover:bg-orange-50 transition font-medium text-sm md:text-base"
                >
                  {t.settings}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-[#E8762C] text-white rounded-lg hover:bg-[#d46620] transition font-medium text-sm md:text-base"
                >
                  {t.acceptAll}
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                <a href="/privacy" className="underline hover:text-gray-700">
                  {t.moreInfo}
                </a>
              </p>
            </div>
          ) : (
            // Detailed Settings
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#2D3E50] mb-6">{t.title}</h2>

              {/* Cookie Categories */}
              <div className="space-y-4 mb-6">
                {/* Necessary */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{t.necessary}</h3>
                      <p className="text-sm text-gray-600">{t.necessaryDesc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="mt-1 w-5 h-5 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Analytics */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{t.analytics}</h3>
                      <p className="text-sm text-gray-600">{t.analyticsDesc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={cookies.analytics}
                      onChange={(e) => setCookies({ ...cookies, analytics: e.target.checked })}
                      className="mt-1 w-5 h-5 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Marketing */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{t.marketing}</h3>
                      <p className="text-sm text-gray-600">{t.marketingDesc}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={cookies.marketing}
                      onChange={(e) => setCookies({ ...cookies, marketing: e.target.checked })}
                      className="mt-1 w-5 h-5 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 md:flex-row md:justify-end md:gap-3">
                <button
                  onClick={() => setShowDetails(false)}
                  className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Zurück
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="px-6 py-2 bg-[#E8762C] text-white rounded-lg hover:bg-[#d46620] transition font-medium"
                >
                  {t.save}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
