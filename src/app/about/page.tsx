'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const [isValuesVisible, setIsValuesVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const [language, setLanguage] = useState<'de' | 'en'>('de');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const storySection = document.getElementById('story');
      const valuesSection = document.getElementById('values');
      const teamSection = document.getElementById('team');
      
      if (storySection) {
        const rect = storySection.getBoundingClientRect();
        setIsStoryVisible(rect.top < window.innerHeight * 0.75);
      }
      
      if (valuesSection) {
        const rect = valuesSection.getBoundingClientRect();
        setIsValuesVisible(rect.top < window.innerHeight * 0.75);
      }
      
      if (teamSection) {
        const rect = teamSection.getBoundingClientRect();
        setIsTeamVisible(rect.top < window.innerHeight * 0.75);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    de: {
      nav: {
        backToHome: 'Zurück zur Startseite',
        services: 'Leistungen',
        about: 'Über uns',
        contact: 'Kontakt'
      },
      hero: {
        badge: 'Über Fynn Schulz',
        title1: 'Digitale',
        title2: 'Exzellenz schaffen',
        description: 'Ich bin Fynn Schulz, ein leidenschaftlicher Webdesigner, der sich der Transformation von Marken durch innovative digitale Lösungen verschrieben hat.'
      },
      stats: [
        { number: "500+", label: "Abgeschlossene Projekte", gradient: "from-gray-700 to-gray-900" },
        { number: "200+", label: "Zufriedene Kunden", gradient: "from-gray-600 to-gray-800" },
        { number: "24/7", label: "Support Verfügbar", gradient: "from-gray-800 to-black" }
      ],
      story: {
        badge: 'Meine Geschichte',
        title1: 'Wo Kreativität',
        title2: 'auf Strategie trifft',
        description: 'Ich, Fynn Schulz, glaube, dass großartiges Webdesign mehr ist als Ästhetik – es geht darum, Probleme zu lösen, Geschichten zu erzählen und bedeutungsvolle Verbindungen zwischen Marken und ihrem Publikum zu schaffen.',
        beginning: 'Mein Anfang',
        beginningText1: '2025 gegründet, entstand Fylu Web Design aus meiner Vision: Unternehmen dabei zu helfen, sich in einer zunehmend digitalen Welt hervorzuheben. Als Fynn Schulz habe ich meine Leidenschaft für Design und Technologie zu meinem Beruf gemacht.',
        beginningText2: 'Heute kombiniere ich modernste Technologie mit zeitlosen Designprinzipien, um Websites zu schaffen, die das Publikum fesseln und Ergebnisse erzielen.',
        feature1Title: 'Kundenzentrierter Ansatz',
        feature1Text: 'Ihr Erfolg ist meine Mission. Ich höre zu, verstehe und liefere.',
        feature2Title: 'Datengesteuerte Ergebnisse',
        feature2Text: 'Jede Entscheidung wird durch Erkenntnisse und Analysen gestützt.'
      },
      values: {
        badge: 'Was Mich Antreibt',
        title: 'Meine Grundwerte',
        description: 'Die Prinzipien, die jedes Projekt, jede Partnerschaft und jede Entscheidung leiten, die ich als Fynn Schulz treffe.',
        items: [
          {
            title: "Innovation",
            description: "Ich bin den Trends voraus und liefere modernste Webdesign-Lösungen, die Ihre Marke von der Konkurrenz abheben."
          },
          {
            title: "Qualität",
            description: "Exzellenz ist keine Option – sie ist mein Standard. Jedes Projekt wird mit akribischer Liebe zum Detail gefertigt."
          },
          {
            title: "Zusammenarbeit",
            description: "Ihre Vision, mein Fachwissen. Ich arbeite eng mit Ihnen zusammen, um Ihre Ideen mit Kreativität und Präzision zum Leben zu erwecken."
          },
          {
            title: "Engagement",
            description: "Ich bin Ihrem Erfolg verpflichtet. Schnelle Bearbeitungszeiten, reaktionsschnelle Kommunikation und Ergebnisse, die Erwartungen übertreffen."
          }
        ]
      },
      vision: {
        badge: 'Meine Vision',
        title1: 'Marken aufbauen',
        title2: 'Die inspirieren',
        text1: 'Ich bin Fynn Schulz und meine Vision ist es, Unternehmen jeder Größe zu befähigen, ihr volles Potenzial durch innovatives Webdesign und strategische digitale Lösungen zu erreichen. Ich glaube, dass jede Marke eine einzigartige Geschichte zu erzählen hat, und es ist meine Mission, ihnen dabei zu helfen, sie schön zu erzählen.',
        text2: 'In der heutigen digitalen Landschaft ist es wichtiger denn je, sich abzuheben. Deshalb sind wir bestrebt, nicht nur Websites und Marketingmaterialien zu liefern, sondern komplette Markenerlebnisse, die beim Publikum Anklang finden und bedeutungsvolle Ergebnisse erzielen.',
        text3: 'Gemeinsam können wir etwas Außergewöhnliches schaffen, das nicht nur Ihre Geschäftsziele erfüllt, sondern Ihre kühnsten Erwartungen übertrifft.'
      },
      footer: {
        tagline: 'Außergewöhnliche digitale Erlebnisse seit 2025',
        copyright: '© 2025 Fylu Marketing & Design. Alle Rechte vorbehalten.',
        agb: 'AGB',
        services: 'Services',
        company: 'Unternehmen',
        contact: 'Kontakt',
        country: 'Deutschland',
        privacy: 'Datenschutz',
        cookieSettings: 'Cookie-Einstellungen'
      }
    },
    en: {
      nav: {
        backToHome: 'Back to Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        badge: 'About Fynn Schulz',
        title1: 'Crafting Digital',
        title2: 'Excellence',
        description: 'I am Fynn Schulz, a passionate web designer dedicated to transforming brands through innovative digital solutions.'
      },
      stats: [
        { number: "500+", label: "Projects Completed", gradient: "from-gray-700 to-gray-900" },
        { number: "200+", label: "Happy Clients", gradient: "from-gray-600 to-gray-800" },
        { number: "24/7", label: "Support Available", gradient: "from-gray-800 to-black" }
      ],
      story: {
        badge: 'My Story',
        title1: 'Where Creativity',
        title2: 'Meets Strategy',
        description: 'I, Fynn Schulz, believe that great web design is more than aesthetics—it\'s about solving problems, telling stories, and creating meaningful connections between brands and their audiences.',
        beginning: 'My Beginning',
        beginningText1: 'Founded in 2025, Fylu Web Design emerged from my vision: to help businesses stand out in an increasingly digital world. As Fynn Schulz, I turned my passion for design and technology into my profession.',
        beginningText2: 'Today, I combine cutting-edge technology with timeless design principles to create websites that captivate audiences and drive results.',
        feature1Title: 'Client-Centric Approach',
        feature1Text: 'Your success is my mission. I listen, understand, and deliver.',
        feature2Title: 'Data-Driven Results',
        feature2Text: 'Every decision backed by insights and analytics.'
      },
      values: {
        badge: 'What Drives Me',
        title: 'My Core Values',
        description: 'The principles that guide every project, every partnership, and every decision I, Fynn Schulz, make.',
        items: [
          {
            title: "Innovation",
            description: "I stay ahead of trends, delivering cutting-edge web design solutions that set your brand apart from the competition."
          },
          {
            title: "Quality",
            description: "Excellence is not an option—it's my standard. Every project is crafted with meticulous attention to detail."
          },
          {
            title: "Collaboration",
            description: "Your vision, our expertise. We work closely with you to bring your ideas to life with creativity and precision."
          },
          {
            title: "Collaboration",
            description: "Your vision, my expertise. I work closely with you to bring your ideas to life with creativity and precision."
          },
          {
            title: "Commitment",
            description: "I'm dedicated to your success. Fast turnarounds, responsive communication, and results that exceed expectations."
          }
        ]
      },
      vision: {
        badge: 'My Vision',
        title1: 'Building Brands',
        title2: 'That Inspire',
        text1: 'I am Fynn Schulz and my vision is to empower businesses of all sizes to reach their full potential through innovative web design and strategic digital solutions. I believe that every brand has a unique story to tell, and it\'s my mission to help them tell it beautifully.',
        text2: 'In today\'s digital landscape, standing out is more important than ever. That\'s why I\'m committed to delivering not just websites, but complete brand experiences that resonate with audiences and drive meaningful results.',
        text3: 'Together, we can create something extraordinary that not only meets your business goals but exceeds your wildest expectations.'
      },
      footer: {
        tagline: 'Creating exceptional digital experiences since 2025',
        copyright: '© 2025 Fylu Marketing & Design. All rights reserved.',
        agb: 'Terms & Conditions',
        services: 'Services',
        company: 'Company',
        contact: 'Contact',
        country: 'Germany',
        privacy: 'Privacy Policy',
        cookieSettings: 'Cookie Settings'
      }
    }
  };

  const t = translations[language];

  const values = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      gradient: "from-gray-600 to-gray-800",
      delay: "delay-0"
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      gradient: "from-gray-700 to-gray-900",
      delay: "delay-100"
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      gradient: "from-gray-800 to-black",
      delay: "delay-200"
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      gradient: "from-gray-700 to-gray-900",
      delay: "delay-300"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white/80'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-6 flex justify-between items-center">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image src="/logomase.png" alt="Fylu Web Design Logo" width={180} height={50} className="w-auto h-12 lg:h-16 object-contain" />
          </Link>
          <div className="flex gap-3 lg:gap-6 items-center text-sm lg:text-lg">
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors duration-300 hidden sm:block">{t.nav.about}</Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors duration-300 hidden sm:block">{t.nav.services}</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">{t.nav.contact}</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 lg:px-6 pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-gray-900/10 to-gray-700/10 rounded-full border border-gray-300 animate-fade-in-up">
            <span className="text-gray-800 font-semibold text-sm lg:text-base">{t.hero.badge}</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              {t.hero.title1}
            </span>
            <br />
            <span className="text-gray-900">{t.hero.title2}</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {t.stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200"
              >
                <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm lg:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        id="story"
        className={`py-20 lg:py-32 px-4 lg:px-6 relative transition-all duration-1000 ${isStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-16 h-16 bg-[#49B1CE] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{t.story.beginning}</h3>
                <p className="text-gray-800 leading-relaxed mb-6">
                  {t.story.beginningText1}
                </p>
                <p className="text-gray-800 leading-relaxed">
                  {t.story.beginningText2}
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-900/10 to-gray-700/10 rounded-full text-gray-800 font-semibold text-sm mb-4">
                {t.story.badge}
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                  {t.story.title1}
                </span>
                <br />
                <span className="text-gray-900">{t.story.title2}</span>
              </h2>
              <p className="text-xl text-gray-800 leading-relaxed mb-8">
                {t.story.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#49B1CE] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{t.story.feature1Title}</h4>
                    <p className="text-gray-800">{t.story.feature1Text}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#49B1CE] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{t.story.feature2Title}</h4>
                    <p className="text-gray-800">{t.story.feature2Text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section 
        id="values"
        className={`py-20 lg:py-32 px-4 lg:px-6 bg-white relative transition-all duration-1000 ${isValuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gray-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gray-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-900/10 to-gray-700/10 rounded-full text-gray-800 font-semibold text-sm mb-4">
              {t.values.badge}
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                {t.values.title}
              </span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              {t.values.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`group p-6 lg:p-8 transition-all duration-500 animate-fade-in-up ${value.delay} flex flex-col items-center text-center`}
              >
                <div className={`w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <svg className="w-8 h-8 lg:w-9 lg:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className={`text-xl lg:text-2xl font-bold mb-3 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                  {t.values.items[index].title}
                </h3>
                <p className="text-gray-800 text-base leading-relaxed">
                  {t.values.items[index].description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Vision Section */}
      <section className="py-20 lg:py-32 px-4 lg:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#49B1CE] to-[#3a9bb8] rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src="/IMG_9454.JPG" 
                    alt="Founder of Fylu Marketing & Design" 
                    width={600} 
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Vision Text */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-900/10 to-gray-700/10 rounded-full text-gray-800 font-semibold text-sm mb-4">
                {t.vision.badge}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                  {t.vision.title1}
                </span>
                <br />
                <span className="text-gray-900">{t.vision.title2}</span>
              </h2>
              <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
                <p>
                  {t.vision.text1}
                </p>
                <p>
                  {t.vision.text2}
                </p>
                <p>
                  {t.vision.text3}
                </p>
              </div>
            </div>
          </div>
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
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">{t.nav.about || 'Über uns'}</Link></li>
                <li><Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">{t.footer.contact}</Link></li>
                <li><Link href="/agb" className="text-gray-600 hover:text-gray-900 transition-colors">{t.footer.agb}</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-gray-900 font-bold text-lg mb-4">{t.footer.contact}</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600">+49 151 684 88999</li>
                <li><a href="mailto:fynnschulzonline@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">fynnschulzonline@gmail.com</a></li>
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
                <Link href="/agb" className="text-gray-500 hover:text-gray-900 transition-colors">{t.footer.agb}</Link>
                <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">{t.footer.cookieSettings}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
