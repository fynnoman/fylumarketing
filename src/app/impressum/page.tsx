'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ImpressumPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/90 backdrop-blur-lg shadow-xl' : 'bg-white/80'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-6 flex justify-between items-center">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image src="/logomase.png" alt="Fylu Marketing" width={180} height={50} className="w-auto h-12 lg:h-16 object-contain" />
          </Link>
          <div className="flex gap-3 lg:gap-6 items-center">
            <Link 
              href="/"
              className="relative px-6 lg:px-8 py-2 lg:py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                Impressum
              </span>
            </h1>
            <p className="text-gray-600 text-sm lg:text-base">Angaben gemäß § 5 TMG</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Firmenangaben */}
            <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#163159] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                Fylu Marketing
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-base">
                  <strong className="text-gray-900">Rechtsform:</strong><br />
                  Einzelunternehmen
                </p>
                <p className="text-base">
                  <strong className="text-gray-900">Inhaber:</strong><br />
                  Fynn-Luca Schulz
                </p>
                <p className="text-base">
                  <strong className="text-gray-900">Anschrift:</strong><br />
                  Heiligenbornstraße 7<br />
                  66359 Bous<br />
                  Deutschland
                </p>
              </div>
            </section>

            {/* Kontakt */}
            <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#163159] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                Kontakt
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="text-base">
                  <strong className="text-gray-900">Telefon:</strong><br />
                  <a href="tel:+4915168488999" className="text-[#163159] hover:underline">+49 151 68488999</a>
                </p>
                <p className="text-base">
                  <strong className="text-gray-900">E-Mail:</strong><br />
                  <a href="mailto:fynnschulzonline@gmail.com" className="text-[#163159] hover:underline">fynnschulzonline@gmail.com</a>
                </p>
              </div>
            </section>

            {/* Umsatzsteuer-ID */}
            <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#163159] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                Umsatzsteuer-ID
              </h2>
              <p className="text-gray-700 text-base">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <span className="text-gray-500 italic">wird nachgereicht</span>
              </p>
            </section>

            {/* Verantwortlich für den Inhalt */}
            <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#163159] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                Verantwortlich für den Inhalt
              </h2>
              <p className="text-gray-700 text-base mb-2">
                <strong className="text-gray-900">nach § 18 Abs. 2 MStV:</strong>
              </p>
              <p className="text-gray-700 text-base">
                Fynn-Luca Schulz<br />
                Heiligenbornstraße 7<br />
                66359 Bous
              </p>
            </section>

            {/* EU-Streitschlichtung */}
            <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#163159] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                EU-Streitschlichtung
              </h2>
              <p className="text-gray-700 text-base mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <a 
                href="https://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#163159] hover:underline font-semibold text-base"
              >
                https://ec.europa.eu/consumers/odr
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="text-gray-700 text-base mt-4">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            {/* Verbraucherstreitbeilegung */}
            <section className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#163159] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p className="text-gray-700 text-base">
                Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Hinweis zu Links */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Weitere rechtliche Informationen:{' '}
                <Link href="/datenschutz" className="text-[#163159] hover:underline font-semibold">
                  Datenschutzerklärung
                </Link>
                {' · '}
                <Link href="/agb" className="text-[#163159] hover:underline font-semibold">
                  AGB
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-8 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-gray-500">© 2025 Fylu Marketing. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4 justify-center mt-4 text-xs">
            <Link href="/impressum" className="text-gray-500 hover:text-gray-900 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-gray-500 hover:text-gray-900 transition-colors">Datenschutz</Link>
            <Link href="/agb" className="text-gray-500 hover:text-gray-900 transition-colors">AGB</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
