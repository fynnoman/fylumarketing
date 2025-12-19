'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AGBPage() {
  const [scrollY, setScrollY] = useState(0);
  const [language, setLanguage] = useState<'de' | 'en'>('de');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    de: {
      nav: {
        backToHome: 'Zurück zur Startseite'
      },
      title: 'Allgemeine Geschäftsbedingungen',
      lastUpdated: 'Stand: Dezember 2025',
      downloadPdf: 'AGB als PDF herunterladen',
      viewBelow: 'Sie können unsere AGB auch direkt hier ansehen:',
      contact: {
        title: 'Kontakt',
        text: 'Bei Fragen zu unseren AGB oder zu unseren Dienstleistungen kontaktieren Sie uns gerne:'
      },
      footer: {
        tagline: 'Außergewöhnliche digitale Erlebnisse seit 2025',
        copyright: '© 2025 Fylu Marketing & Design. Alle Rechte vorbehalten.'
      }
    },
    en: {
      nav: {
        backToHome: 'Back to Home'
      },
      title: 'Terms and Conditions',
      lastUpdated: 'Last Updated: December 2025',
      downloadPdf: 'Download Terms & Conditions as PDF',
      viewBelow: 'You can also view our Terms and Conditions directly here:',
      contact: {
        title: 'Contact',
        text: 'If you have any questions about our Terms and Conditions or our services, please contact us:'
      },
      footer: {
        tagline: 'Creating exceptional digital experiences since 2025',
        copyright: '© 2025 Fylu Marketing & Design. All rights reserved.'
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/90 backdrop-blur-lg shadow-xl' : 'bg-white/80'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-6 flex justify-between items-center">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image src="/logomase.png" alt="Fylu Web Design" width={180} height={50} className="w-auto h-12 lg:h-16 object-contain" />
          </Link>
          <div className="flex gap-3 lg:gap-6 items-center">
            <button 
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className="px-4 lg:px-5 py-2 lg:py-3 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full font-semibold hover:bg-white transition-all duration-300 text-sm lg:text-lg"
            >
              {language === 'de' ? 'EN' : 'DE'}
            </button>
            <Link 
              href="/"
              className="px-6 lg:px-8 py-2 lg:py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {t.nav.backToHome}
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
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>
            <p className="text-gray-600 text-sm lg:text-base mb-6">{t.lastUpdated}</p>
            
            {/* Download Button */}
            <a 
              href="/AGB_FYLU.pdf" 
              download
              className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t.downloadPdf}
            </a>
          </div>

          {/* PDF Display - Full Width */}
          <div className="mb-12">
            <object
              data="/AGB_FYLU.pdf"
              type="application/pdf"
              className="w-full min-h-[1000px] lg:min-h-[1400px]"
              aria-label="AGB PDF Document"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12 border border-gray-300 text-center">
                <p className="text-gray-700 text-lg mb-6">
                  {language === 'de' 
                    ? 'Ihr Browser unterstützt keine PDF-Anzeige. Bitte laden Sie die Datei herunter.' 
                    : 'Your browser does not support PDF viewing. Please download the file.'}
                </p>
                <a 
                  href="/AGB_FYLU.pdf" 
                  download
                  className="inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t.downloadPdf}
                </a>
              </div>
            </object>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 lg:space-y-12">
            {/* Contact Section */}
            <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 lg:p-8 border border-gray-300">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                {t.contact.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-base lg:text-lg">
                {t.contact.text}
              </p>
              <Link 
                href="mailto:hello@fylu.com"
                className="inline-block px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {language === 'de' ? 'Kontaktieren Sie uns' : 'Contact Us'}
              </Link>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-12 px-4 lg:px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="inline-block transition-opacity hover:opacity-80">
            <Image src="/logomase.png" alt="Fylu Marketing & Design" width={180} height={50} className="mx-auto mb-6 w-auto h-16" />
          </Link>
          <p className="text-gray-600 mb-6">{t.footer.tagline}</p>
          <p className="text-sm text-gray-500">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
