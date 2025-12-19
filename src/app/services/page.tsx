'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const [language, setLanguage] = useState<'de' | 'en'>('de');

  const translations = {
    de: {
      nav: {
        home: 'Home',
        about: 'Über uns',
        services: 'Leistungen',
        contact: 'Kontakt',
        backToHome: 'Zurück zur Startseite'
      },
      hero: {
        badge: 'Unsere Leistungen',
        title1: 'Professionelle',
        title2: 'Webdesign Services',
        description: 'Wir bieten maßgeschneiderte Webdesign-Lösungen, die Ihr Unternehmen erfolgreich im digitalen Raum positionieren.'
      },
      services: {
        webDesign: {
          title: 'Webdesign & Entwicklung',
          description: 'Moderne, responsive Websites, die auf allen Geräten perfekt funktionieren. Von der ersten Skizze bis zum Launch begleiten wir Sie durch den gesamten Prozess.',
          features: [
            'Responsive Design für alle Geräte',
            'Moderne, intuitive Benutzeroberflächen',
            'Optimale Performance & Ladezeiten',
            'SEO-optimiert von Anfang an'
          ]
        },
        customDevelopment: {
          title: 'Individuelle Entwicklung',
          description: 'Maßgeschneiderte Web-Anwendungen und Funktionen, die genau auf Ihre Bedürfnisse zugeschnitten sind.',
          features: [
            'Kundenspezifische Funktionen',
            'Integration mit bestehenden Systemen',
            'Datenbank-Design & -Entwicklung',
            'API-Entwicklung & -Integration'
          ]
        },
        ecommerce: {
          title: 'E-Commerce Lösungen',
          description: 'Professionelle Online-Shops mit allem, was Sie für erfolgreiches Online-Business brauchen.',
          features: [
            'Sichere Zahlungsabwicklung',
            'Produktverwaltung & Kataloge',
            'Warenkorbsystem & Checkout',
            'Kundenverwaltung & Analytics'
          ]
        },
        maintenance: {
          title: 'Wartung & Support',
          description: 'Kontinuierliche Betreuung Ihrer Website, damit alles reibungslos läuft und sicher bleibt.',
          features: [
            'Regelmäßige Updates & Backups',
            'Sicherheitschecks & Monitoring',
            'Technischer Support',
            'Content-Updates & Anpassungen'
          ]
        },
        seo: {
          title: 'SEO & Performance',
          description: 'Optimierung Ihrer Website für Suchmaschinen und maximale Geschwindigkeit.',
          features: [
            'On-Page SEO Optimierung',
            'Performance-Optimierung',
            'Mobile-First Ansatz',
            'Technisches SEO'
          ]
        },
        consulting: {
          title: 'Beratung & Strategie',
          description: 'Strategische Beratung für Ihre digitale Präsenz und Online-Marketing.',
          features: [
            'Digitale Strategie-Entwicklung',
            'UX/UI Konzeption',
            'Conversion-Optimierung',
            'Technologie-Beratung'
          ]
        }
      },
      cta: {
        title: 'Bereit für Ihr Projekt?',
        description: 'Lassen Sie uns gemeinsam die perfekte Lösung für Ihre Anforderungen entwickeln.',
        button: 'Jetzt Kontakt aufnehmen'
      },
      footer: {
        tagline: 'Professionelles Webdesign seit 2025',
        privacy: 'Datenschutz',
        terms: 'AGB',
        contact: 'Kontakt',
        copyright: '© 2025 Fylu Web Design. Alle Rechte vorbehalten.',
        services: 'Services',
        company: 'Unternehmen',
        country: 'Deutschland',
        cookieSettings: 'Cookie-Einstellungen'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        contact: 'Contact',
        backToHome: 'Back to Home'
      },
      hero: {
        badge: 'Our Services',
        title1: 'Professional',
        title2: 'Web Design Services',
        description: 'We offer tailored web design solutions that successfully position your business in the digital space.'
      },
      services: {
        webDesign: {
          title: 'Web Design & Development',
          description: 'Modern, responsive websites that work perfectly on all devices. We guide you through the entire process from initial sketch to launch.',
          features: [
            'Responsive design for all devices',
            'Modern, intuitive user interfaces',
            'Optimal performance & loading times',
            'SEO-optimized from the start'
          ]
        },
        customDevelopment: {
          title: 'Custom Development',
          description: 'Tailored web applications and features designed specifically for your needs.',
          features: [
            'Custom-built features',
            'Integration with existing systems',
            'Database design & development',
            'API development & integration'
          ]
        },
        ecommerce: {
          title: 'E-Commerce Solutions',
          description: 'Professional online stores with everything you need for successful online business.',
          features: [
            'Secure payment processing',
            'Product management & catalogs',
            'Shopping cart system & checkout',
            'Customer management & analytics'
          ]
        },
        maintenance: {
          title: 'Maintenance & Support',
          description: 'Continuous support for your website to ensure everything runs smoothly and stays secure.',
          features: [
            'Regular updates & backups',
            'Security checks & monitoring',
            'Technical support',
            'Content updates & adjustments'
          ]
        },
        seo: {
          title: 'SEO & Performance',
          description: 'Optimization of your website for search engines and maximum speed.',
          features: [
            'On-page SEO optimization',
            'Performance optimization',
            'Mobile-first approach',
            'Technical SEO'
          ]
        },
        consulting: {
          title: 'Consulting & Strategy',
          description: 'Strategic consulting for your digital presence and online marketing.',
          features: [
            'Digital strategy development',
            'UX/UI conception',
            'Conversion optimization',
            'Technology consulting'
          ]
        }
      },
      cta: {
        title: 'Ready for Your Project?',
        description: "Let's develop the perfect solution for your requirements together.",
        button: 'Get in Touch'
      },
      footer: {
        tagline: 'Professional web design since 2025',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact',
        copyright: '© 2025 Fylu Web Design. All rights reserved.',
        services: 'Services',
        company: 'Company',
        country: 'Germany',
        cookieSettings: 'Cookie Settings'
      }
    }
  };

  const t = translations[language];

  const servicesList = [
    {
      key: 'webDesign',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      key: 'customDevelopment',
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
      key: 'ecommerce',
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      key: 'maintenance',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
      key: 'seo',
      icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
    },
    {
      key: 'consulting',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-6 flex justify-between items-center">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image src="/logomase.png" alt="Fylu Web Design Logo" width={180} height={50} className="w-auto h-12 lg:h-16 object-contain" />
          </Link>
          <div className="flex gap-3 lg:gap-6 items-center text-sm lg:text-lg">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors duration-300 hidden sm:block">{t.nav.home}</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors duration-300 hidden sm:block">{t.nav.about}</Link>
            <Link href="/services" className="text-gray-900 font-semibold">{t.nav.services}</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">{t.nav.contact}</Link>
            <button 
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className="ml-2 lg:ml-4 px-4 lg:px-5 py-2 lg:py-3 bg-[#49B1CE] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm lg:text-lg hover:bg-[#3a9bb8]"
            >
              {language === 'de' ? 'DE' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-24 px-4 lg:px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-gray-900/10 to-gray-700/10 rounded-full border border-gray-300 animate-fade-in-up">
            <span className="text-sm font-semibold text-gray-800">{t.hero.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              {t.hero.title1}
            </span>
            <br />
            <span className="text-gray-800">{t.hero.title2}</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {servicesList.map((service, index) => {
              const serviceData = t.services[service.key as keyof typeof t.services];
              return (
                <div
                  key={service.key}
                  className="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-[#49B1CE] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{serviceData.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{serviceData.description}</p>
                  <ul className="space-y-3">
                    {serviceData.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#49B1CE] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-4 lg:px-6 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
            {t.cta.title}
          </h3>
          <p className="text-base lg:text-xl mb-6 lg:mb-8 text-gray-700">
            {t.cta.description}
          </p>
          <a href="mailto:hello@fylu.com" className="inline-block px-8 lg:px-10 py-4 lg:py-5 bg-[#49B1CE] text-white rounded-full font-bold text-base lg:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-[#3a9bb8]">
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-12 lg:py-16 px-4 lg:px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Company Info */}
            <div>
              <Link href="/" className="inline-block transition-opacity hover:opacity-80 mb-4">
                <Image src="/logomase.png" alt="Fylu Marketing & Design Logo" width={180} height={50} className="w-auto h-14 object-contain" />
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.footer.tagline}
              </p>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-4">{t.footer.services}</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Webdesign</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Weboptimization</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-4">{t.footer.company}</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">{t.nav.about}</Link></li>
                <li><Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">{t.footer.contact}</Link></li>
                <li><Link href="/agb" className="text-gray-600 hover:text-gray-900 transition-colors">{t.footer.terms}</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600">+49 151 684 88999</li>
                <li><a href="mailto:hello@fylu.com" className="text-gray-600 hover:text-gray-900 transition-colors">hello@fylu.com</a></li>
                <li className="text-gray-600">{t.footer.country}</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500">{t.footer.copyright}</p>
              <div className="flex gap-6 text-xs">
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">{t.footer.privacy}</a>
                <Link href="/agb" className="text-gray-500 hover:text-gray-900 transition-colors">{t.footer.terms}</Link>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">{t.footer.cookieSettings}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
