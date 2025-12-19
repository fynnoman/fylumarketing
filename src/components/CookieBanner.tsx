'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a small delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowBanner(false);
    setShowSettings(false);
  };

  const declineAll = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300"
        onClick={() => !showSettings && setShowBanner(false)}
      />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up">
        <div className="max-w-7xl mx-auto p-4 sm:p-6">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {!showSettings ? (
              // Main Banner
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#163159] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      Ihre Privatsphäre ist uns wichtig
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                      Wir verwenden Cookies, um die grundlegenden Funktionen der Website bereitzustellen und Ihr Erlebnis zu verbessern. 
                      Sie können wählen, welche Kategorien Sie zulassen möchten. Weitere Informationen finden Sie in unserer{' '}
                      <Link href="/datenschutz" className="text-[#163159] hover:underline font-semibold">
                        Datenschutzerklärung
                      </Link>{' '}
                      und den{' '}
                      <Link href="/agb" className="text-[#163159] hover:underline font-semibold">
                        AGB
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={acceptAll}
                    className="flex-1 px-6 py-3 bg-[#163159] text-white rounded-full font-semibold hover:bg-[#0f2340] active:scale-95 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-semibold hover:bg-gray-200 active:scale-95 transition-all duration-300 text-sm sm:text-base"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-3 text-gray-600 hover:text-gray-900 font-semibold transition-colors text-sm sm:text-base underline"
                  >
                    Einstellungen
                  </button>
                </div>
              </div>
            ) : (
              // Settings Panel
              <div className="p-6 sm:p-8">
                <div className="mb-6">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Zurück
                  </button>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    Cookie-Einstellungen
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Verwalten Sie Ihre Cookie-Präferenzen
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies - Always On */}
                  <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                        Notwendige Cookies
                      </h4>
                      <div className="px-3 py-1 bg-gray-300 text-gray-700 rounded-full text-xs font-semibold">
                        Immer aktiv
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich und können nicht deaktiviert werden. 
                      Sie speichern beispielsweise Ihre Cookie-Einstellungen.
                    </p>
                  </div>

                  {/* Analytics Cookies - Optional */}
                  <div className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                        Analyse & Performance
                      </h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" disabled />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#163159]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#163159]"></div>
                      </label>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen anonym gesammelt werden. 
                      Derzeit werden keine Analyse-Cookies verwendet.
                    </p>
                  </div>

                  {/* Marketing Cookies - Optional */}
                  <div className="border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                        Marketing & Werbung
                      </h4>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" disabled />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#163159]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#163159]"></div>
                      </label>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Diese Cookies werden verwendet, um Ihnen relevante Werbung und Marketing-Inhalte anzuzeigen. 
                      Derzeit werden keine Marketing-Cookies verwendet.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="flex-1 px-6 py-3 bg-[#163159] text-white rounded-full font-semibold hover:bg-[#0f2340] active:scale-95 transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-semibold hover:bg-gray-200 active:scale-95 transition-all duration-300 text-sm sm:text-base"
                  >
                    Auswahl speichern
                  </button>
                  <button
                    onClick={declineAll}
                    className="px-6 py-3 text-gray-600 hover:text-gray-900 font-semibold transition-colors text-sm sm:text-base underline"
                  >
                    Alle ablehnen
                  </button>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Weitere Informationen:{' '}
                    <Link href="/datenschutz" className="text-[#163159] hover:underline">
                      Datenschutzerklärung
                    </Link>
                    {' · '}
                    <Link href="/agb" className="text-[#163159] hover:underline">
                      AGB
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
