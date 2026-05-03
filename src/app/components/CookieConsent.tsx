"use client";

import React, { useState, useEffect } from 'react';

interface CookieConsentProps {
  language?: 'de' | 'en';
}

export function CookieConsent({ language = 'de' }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [cookies, setCookies] = useState({ necessary: true, analytics: false, marketing: false });

  const t = {
    de: {
      title: 'Wir verwenden Cookies',
      description: 'Um unsere Website optimal zu betreiben und Ihnen das beste Erlebnis zu bieten, verwenden wir Cookies. Notwendige Cookies sind immer aktiv.',
      necessary: 'Notwendige Cookies',
      necessaryDesc: 'Für den Betrieb der Website erforderlich. Immer aktiv.',
      analytics: 'Analyse-Cookies',
      analyticsDesc: 'Helfen uns zu verstehen, wie Sie unsere Website nutzen (z.B. Google Analytics).',
      marketing: 'Marketing-Cookies',
      marketingDesc: 'Ermöglichen personalisierte Inhalte und Werbung.',
      acceptAll: 'Alle akzeptieren',
      acceptNecessary: 'Nur notwendige',
      settings: 'Einstellungen',
      save: 'Auswahl speichern',
      privacy: 'Datenschutz',
    },
    en: {
      title: 'We use Cookies',
      description: 'To operate our website optimally and provide you the best experience, we use cookies. Necessary cookies are always active.',
      necessary: 'Necessary Cookies',
      necessaryDesc: 'Required to operate the website. Always active.',
      analytics: 'Analytics Cookies',
      analyticsDesc: 'Help us understand how you use our website (e.g. Google Analytics).',
      marketing: 'Marketing Cookies',
      marketingDesc: 'Enable personalized content and advertising.',
      acceptAll: 'Accept All',
      acceptNecessary: 'Necessary Only',
      settings: 'Settings',
      save: 'Save Selection',
      privacy: 'Privacy Policy',
    },
  };

  const text = t[language] || t.de;

  useEffect(() => {
    const saved = document.cookie.split('; ').find(r => r.startsWith('cookie_consent='));
    if (!saved) {
      setShowBanner(true);
    } else {
      try {
        setCookies(JSON.parse(decodeURIComponent(saved.split('=')[1])));
      } catch {
        setShowBanner(true);
      }
    }
  }, []);

  const save = (choice: typeof cookies) => {
    const exp = new Date();
    exp.setFullYear(exp.getFullYear() + 1);
    document.cookie = `cookie_consent=${encodeURIComponent(JSON.stringify(choice))}; path=/; expires=${exp.toUTCString()}`;
    setCookies(choice);
    setShowBanner(false);
    setShowDetails(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Non-dismissable overlay — user must make a choice */}
      <div className="fixed inset-0 bg-[#03045E]/60 backdrop-blur-sm z-40" />

      <div className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-auto md:right-6 md:max-w-md">
        <div className="bg-white rounded-t-2xl md:rounded-2xl shadow-2xl border border-[#CAF0F8]">
          {!showDetails ? (
            <div className="p-6">
              <h2 className="text-lg font-bold text-[#03045E] mb-2">{text.title}</h2>
              <p className="text-sm text-gray-600 mb-5">{text.description}</p>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => save({ necessary: true, analytics: true, marketing: true })}
                  className="w-full py-3 bg-[#03045E] hover:bg-[#0077B6] text-white rounded-xl font-semibold text-sm transition-colors"
                >
                  {text.acceptAll}
                </button>
                <button
                  onClick={() => setShowDetails(true)}
                  className="w-full py-3 border-2 border-[#00B4D8] text-[#03045E] hover:bg-[#CAF0F8] rounded-xl font-semibold text-sm transition-colors"
                >
                  {text.settings}
                </button>
                <button
                  onClick={() => save({ necessary: true, analytics: false, marketing: false })}
                  className="w-full py-2 text-gray-500 hover:text-[#03045E] text-sm transition-colors"
                >
                  {text.acceptNecessary}
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-4 text-center">
                <a href="/datenschutz" className="underline hover:text-[#0077B6]">{text.privacy}</a>
              </p>
            </div>
          ) : (
            <div className="p-6">
              <h2 className="text-lg font-bold text-[#03045E] mb-4">{text.settings}</h2>

              <div className="space-y-3 mb-5">
                {/* Necessary — always on */}
                <div className="border border-[#CAF0F8] rounded-xl p-3 bg-[#CAF0F8]/20">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm text-[#03045E]">{text.necessary}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{text.necessaryDesc}</p>
                    </div>
                    <div className="w-10 h-5 bg-[#0077B6] rounded-full flex-shrink-0 mt-0.5 opacity-60" />
                  </div>
                </div>

                {/* Analytics */}
                <div className="border border-[#CAF0F8] rounded-xl p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm text-[#03045E]">{text.analytics}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{text.analyticsDesc}</p>
                    </div>
                    <button
                      onClick={() => setCookies(c => ({ ...c, analytics: !c.analytics }))}
                      className={`w-10 h-5 rounded-full flex-shrink-0 mt-0.5 transition-colors ${cookies.analytics ? 'bg-[#0077B6]' : 'bg-gray-300'}`}
                      aria-checked={cookies.analytics}
                      role="switch"
                    />
                  </div>
                </div>

                {/* Marketing */}
                <div className="border border-[#CAF0F8] rounded-xl p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm text-[#03045E]">{text.marketing}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{text.marketingDesc}</p>
                    </div>
                    <button
                      onClick={() => setCookies(c => ({ ...c, marketing: !c.marketing }))}
                      className={`w-10 h-5 rounded-full flex-shrink-0 mt-0.5 transition-colors ${cookies.marketing ? 'bg-[#0077B6]' : 'bg-gray-300'}`}
                      aria-checked={cookies.marketing}
                      role="switch"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button onClick={() => setShowDetails(false)} className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm hover:bg-gray-50 transition-colors">
                  ← Zurück
                </button>
                <button onClick={() => save(cookies)} className="flex-1 py-2.5 bg-[#03045E] hover:bg-[#0077B6] text-white rounded-xl text-sm font-semibold transition-colors">
                  {text.save}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
