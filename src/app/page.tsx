'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [language, setLanguage] = useState<'de' | 'en'>('de');
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [videoCardsSwapped, setVideoCardsSwapped] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const translations = {
    de: {
      nav: {
        services: 'Dienstleistungen',
        about: 'Über uns',
        contact: 'Kontakt'
      },
      hero: {
        title1: 'Skalieren Sie Ihr Unternehmen',
        title2: 'Mit kreativer Exzellenz',
        description: 'Wir erwecken Ihre Vision zum Leben mit atemberaubenden Websites, auffälligen Flyern und professionellen Marketingmaterialien, die Ihr Unternehmen hervorheben.',
        getStarted: 'Jetzt starten',
        ourServices: 'Unsere Dienstleistungen'
      },
      pricing: {
        title: 'Individuelle Preise',
        description: 'Unsere Preise richten sich nach Ihren individuellen Anforderungen. Kontaktieren Sie uns für ein maßgeschneidertes Angebot.',
        contact: 'Jetzt Kontakt aufnehmen'
      },
      websiteService: {
        title: 'WEBSITE SERVICE',
        paragraph1: 'Eine erstklassige Website braucht ein <strong>brillantes, modernes Design</strong>, das auf <strong>jedem Gerät perfekt funktioniert</strong> und <strong>extrem schnell lädt</strong>. Besucher sollen sofort verstehen, was dein Unternehmen anbietet, und alle wichtigen Informationen ohne Umwege finden. Eine <strong>klare Navigation, präzise formulierte Texte, hochwertige Bilder und eine durchdachte Struktur</strong> sorgen dafür, dass die Seite professionell, vertrauenswürdig und beeindruckend wirkt.',
        paragraph2: 'Damit die Website deinem Unternehmen echten Nutzen bringt, sollte sie <strong>praktische und wirkungsvolle Funktionen</strong> enthalten – zum Beispiel Kontaktformulare, Fotogalerien, Menüs, Buchungssysteme oder Standortanzeigen. Jede Schaltfläche, jeder Link und jede Unterseite muss <strong>reibungslos, schnell und zuverlässig</strong> funktionieren, damit der gesamte Auftritt stark und einheitlich wirkt.',
        paragraph3: 'Die <strong>DSGVO-Konformität</strong> ist dabei unverzichtbar. Die Website benötigt eine korrekte, leicht verständliche und gut sichtbare <strong>Datenschutzerklärung</strong>, die genau erklärt, welche Daten erhoben werden und warum. Jedes Formular, das persönliche Daten sammelt, muss eine <strong>klare Einwilligung</strong> einholen. Wenn Cookies oder externe Dienste genutzt werden, ist ein professionelles <strong>Cookie-Consent-System</strong> notwendig, damit Besucher selbst entscheiden können, was sie erlauben. Die Seite muss außerdem über eine <strong>sichere Verbindung, zuverlässiges Hosting</strong> und einen verantwortungsvollen Umgang mit allen Daten verfügen. Ein rechtssicheres <strong>Impressum</strong> ist für fast alle geschäftlichen Websites in Deutschland Pflicht.',
        paragraph4: 'Eine wirklich starke Website sollte zudem <strong>leicht aktualisierbar</strong> sein, damit du jederzeit neue Bilder, Inhalte oder Unterseiten hinzufügen kannst. Sie muss so aufgebaut sein, dass sie problemlos <strong>wachsen kann</strong> – zum Beispiel durch zukünftige Erweiterungen wie einen Online-Shop, einen Blog oder ein Buchungssystem. <strong>Regelmäßige Updates, Backups und Sicherheitsprüfungen</strong> halten alles dauerhaft stabil und geschützt.',
        paragraph5: 'Eine hervorragende Website ist schnell, klar, überzeugend, rechtssicher und bereit, mit deinem Unternehmen mitzuwachsen.',
        ideaLink: 'Haben Sie bereits eine Idee?'
      },
      latestArtworks: {
        title: 'Neueste Kunstwerke'
      },
      services: {
        title: 'Unsere Dienstleistungen',
        clickHint: 'Klicken Sie, um den nächsten Service zu sehen',
        website: {
          title: 'Websites All-Inclusive',
          description: 'Moderne, responsive Websites mit den neuesten Technologien. Von Design bis Deployment kümmern wir uns um alles.'
        },
        flyer: {
          title: 'Flyer-Design',
          description: 'Auffällige Flyer, die Aufmerksamkeit erregen und Ihre Botschaft effektiv an Ihre Zielgruppe kommunizieren.'
        },
        businessCards: {
          title: 'Visitenkarten',
          description: 'Professionelle Visitenkarten, die einen bleibenden ersten Eindruck hinterlassen und Ihre Marke perfekt repräsentieren.'
        },
        marketing: {
          title: 'Marketingmaterialien',
          description: 'Komplette Marketinglösungen einschließlich Broschüren, Poster und mehr.'
        },
        branding: {
          title: 'Branding & Identität',
          description: 'Erstellen Sie eine kohärente Markenidentität, die bei Ihrem Publikum Anklang findet und Sie von der Konkurrenz abhebt.'
        }
      },
      cta: {
        title: 'Bereit, Ihre Marke zu verbessern?',
        description: 'Lassen Sie uns zusammenarbeiten, um etwas Großartiges zu schaffen. Kontaktieren Sie uns noch heute!',
        button: 'Kontaktieren Sie uns'
      },
      clients: {
        title: 'Zufriedene Kunden',
        subtitle: 'Vertrauen von führenden Unternehmen'
      },
      footer: {
        tagline: 'Außergewöhnliche digitale Erlebnisse seit 2025',
        privacy: 'Datenschutz',
        terms: 'Nutzungsbedingungen',
        contact: 'Kontakt',
        copyright: '© 2025 Fylu Marketing & Design. Alle Rechte vorbehalten.',
        pricingNote: 'Unsere Preise variieren und werden speziell auf die individuellen Anforderungen unserer Kunden zugeschnitten.'
      }
    },
    en: {
      nav: {
        services: 'Services',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title1: 'Elevate Your Brand',
        title2: 'With creative excellence',
        description: 'We bring your vision to life with stunning websites, eye-catching flyers, and professional marketing materials that make your business stand out.',
        getStarted: 'Get Started',
        ourServices: 'Our Services'
      },
      pricing: {
        title: 'Custom Pricing',
        description: 'Our prices are tailored to your individual requirements. Contact us for a customized quote.',
        contact: 'Get in Contact'
      },
      websiteService: {
        title: 'WEBSITE SERVICE',
        paragraph1: 'A brilliant website needs a <strong>stunning, cutting-edge design</strong> that works flawlessly on <strong>every single device</strong> and <strong>loads lightning-fast</strong>. Visitors should instantly understand what your business offers and be able to find all crucial information without any effort. <strong>Crystal-clear navigation, compelling texts, premium images and an intuitive structure</strong> make the page effortless to use and leave a powerful, professional impression.',
        paragraph2: 'To make the website truly valuable for your business, it should include <strong>powerful and effective features</strong> such as contact forms, photo galleries, menus, booking systems or location information. Every button, link and page must work <strong>flawlessly, reliably and seamlessly</strong>.',
        paragraph3: '<strong>DSGVO compliance</strong> is absolutely essential. The website needs a precise and easily accessible <strong>privacy policy</strong> that clearly explains what data is collected and why. Any form that collects personal data must ask for <strong>explicit consent</strong>. If you use cookies or external tools that collect data, a professional <strong>cookie consent system</strong> is mandatory so visitors can choose exactly what they allow. The website must use a <strong>secure connection, reliable hosting</strong> and handle all personal data responsibly. A legally compliant <strong>Impressum</strong> is required for almost all business websites in Germany.',
        paragraph4: 'A truly exceptional website should also be <strong>effortlessly updatable</strong>, so you can add new images, content or pages at any time. It must be built in a way that allows <strong>unlimited growth</strong>, for example adding a shop, blog or booking system later. <strong>Regular updates, backups and security checks</strong> keep everything running safely and flawlessly.',
        paragraph5: 'An outstanding website is lightning-fast, crystal-clear, exceptionally user-friendly, legally bulletproof and ready to scale with your business.',
        ideaLink: 'Have an idea already?'
      },
      latestArtworks: {
        title: 'Latest Artworks'
      },
      services: {
        title: 'Our Services',
        clickHint: 'Click to see next service',
        website: {
          title: 'Websites All-Inclusive',
          description: 'Modern, responsive websites built with the latest technologies. From design to deployment, we handle everything.'
        },
        flyer: {
          title: 'Flyer Design',
          description: 'Eye-catching flyers that grab attention and communicate your message effectively to your target audience.'
        },
        businessCards: {
          title: 'Business Cards',
          description: 'Professional business cards that make a lasting first impression and represent your brand perfectly.'
        },
        marketing: {
          title: 'Marketing Materials',
          description: 'Complete marketing solutions including brochures, posters, and more.'
        },
        branding: {
          title: 'Branding & Identity',
          description: 'Build a cohesive brand identity that resonates with your audience and sets you apart from competitors.'
        }
      },
      cta: {
        title: 'Ready to Elevate Your Brand?',
        description: "Let's work together to create something amazing. Get in touch with us today!",
        button: 'Contact Us'
      },
      clients: {
        title: 'Happy Clients',
        subtitle: 'Trusted by leading companies'
      },
      footer: {
        tagline: 'Creating exceptional digital experiences since 2025',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact',
        copyright: '© 2025 Fylu Marketing & Design. All rights reserved.',
        pricingNote: 'Our prices vary and are specifically tailored to the individual requests of our clients.'
      }
    }
  };

  const t = translations[language];

  const services = [
    {
      title: t.services.website.title,
      description: t.services.website.description,
      gradient: "from-purple-500 to-purple-600",
      frameColor: "border-purple-400",
      glowColor: "shadow-purple-500/50",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      featured: true // Mark as featured
    },
    {
      title: t.services.flyer.title,
      description: t.services.flyer.description,
      gradient: "from-pink-500 to-pink-600",
      frameColor: "border-pink-400",
      glowColor: "shadow-pink-500/50",
      icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      title: t.services.businessCards.title,
      description: t.services.businessCards.description,
      gradient: "from-blue-500 to-blue-600",
      frameColor: "border-blue-400",
      glowColor: "shadow-blue-500/50",
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    },
    {
      title: t.services.marketing.title,
      description: t.services.marketing.description,
      gradient: "from-yellow-500 to-orange-500",
      frameColor: "border-orange-400",
      glowColor: "shadow-orange-500/50",
      icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
    },
    {
      title: t.services.branding.title,
      description: t.services.branding.description,
      gradient: "from-green-500 to-teal-500",
      frameColor: "border-teal-400",
      glowColor: "shadow-teal-500/50",
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    }
  ];

  const handleCardClick = () => {
    console.log('Card clicked! Current index:', activeCardIndex);
    setActiveCardIndex((prev) => {
      const next = (prev + 1) % services.length;
      console.log('Switching to index:', next);
      return next;
    });
  };

  const handleVideoCardClick = () => {
    setVideoCardsSwapped((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if sections are visible
      if (servicesRef.current) {
        const rect = servicesRef.current.getBoundingClientRect();
        setIsServicesVisible(rect.top < window.innerHeight * 0.75);
      }
      
      if (ctaRef.current) {
        const rect = ctaRef.current.getBoundingClientRect();
        setIsCtaVisible(rect.top < window.innerHeight * 0.75);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    // Try to autoplay video
    const playVideo = () => {
      if (videoRef.current) {
        // Set playback speed to 1.2x (20% faster)
        videoRef.current.playbackRate = 1.2;
        // Start video at 4 seconds
        videoRef.current.currentTime = 4;
        videoRef.current.play().catch(() => {
          // Silently fail if autoplay is blocked
          // Video will play when user interacts with the page
        });
      }
    };

    // Attempt to play video
    playVideo();

    // Also try to play on any user interaction
    const handleUserInteraction = () => {
      playVideo();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('scroll', handleUserInteraction, { once: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Fylu Marketing & Design",
            "description": "Professional marketing agency specializing in website development, flyer design, business cards, and comprehensive marketing solutions.",
            "url": "https://fylumarketing.de",
            "logo": "https://fylumarketing.de/logo1.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "email": "hello@fylu.com"
            },
            "sameAs": [],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "DE"
            },
            "areaServed": ["DE", "EU", "Worldwide"],
            "offers": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Website Development",
                  "description": "Professional, responsive websites built with modern technologies"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Flyer Design",
                  "description": "Eye-catching flyer designs that communicate your message effectively"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Business Cards",
                  "description": "Professional business cards that make a lasting impression"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Marketing Materials",
                  "description": "Complete marketing solutions including brochures, posters, and more"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Branding & Identity",
                  "description": "Cohesive brand identity that resonates with your audience"
                }
              }
            ]
          })
        }}
      />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2 lg:py-1 flex justify-between items-center">
          <a href="https://www.vars-development.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
            <Image src="/logo1.png" alt="Fylu Marketing & Design Logo" width={150} height={35} className="w-auto h-8 lg:h-12 object-contain" />
          </a>
          <div className="flex gap-3 lg:gap-6 items-center text-xs lg:text-base">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-purple-600 transition-colors duration-300 bg-transparent border-none cursor-pointer hidden sm:block">{t.nav.services}</button>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors duration-300 hidden sm:block">{t.nav.about}</a>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors duration-300 bg-transparent border-none cursor-pointer">{t.nav.contact}</button>
            <button 
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className="ml-2 lg:ml-4 px-3 lg:px-4 py-1.5 lg:py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs lg:text-base"
            >
              {language === 'de' ? 'DE' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 lg:px-6 pt-24 lg:pt-20" itemScope itemType="https://schema.org/WebPageElement">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                {t.hero.title1}
              </span>
              <br />
              <span className="text-gray-800">{t.hero.title2}</span>
            </h1>
            <p className="text-base lg:text-xl text-gray-600 leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center">
                {t.hero.getStarted}
              </a>
              <button onClick={() => scrollToSection('services')} className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300">
                {t.hero.ourServices}
              </button>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <video 
              ref={videoRef}
              autoPlay 
              loop 
              muted 
              playsInline
              webkit-playsinline="true"
              preload="metadata"
              className="w-full h-96 sm:h-[500px] lg:h-[600px] object-cover rounded-3xl animate-float bg-gradient-to-br from-purple-100 to-blue-100"
              style={{ backgroundColor: '#e9d5ff' }}
            >
              <source src="/video2.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className={`py-12 lg:py-16 px-4 lg:px-6 bg-white/50 relative overflow-hidden transition-all duration-1000 ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} itemScope itemType="https://schema.org/ItemList">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-5 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 lg:mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          
          {/* Decorative Frame */}
          <div className="relative">
            {/* Corner Decorations - Dynamic Color - Hidden on small screens */}
            <div className={`hidden lg:block absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 ${services[activeCardIndex].frameColor} rounded-tl-3xl transition-colors duration-500`}></div>
            <div className={`hidden lg:block absolute -top-8 -right-8 w-16 h-16 border-t-4 border-r-4 ${services[activeCardIndex].frameColor} rounded-tr-3xl transition-colors duration-500`}></div>
            <div className={`hidden lg:block absolute -bottom-8 -left-8 w-16 h-16 border-b-4 border-l-4 ${services[activeCardIndex].frameColor} rounded-bl-3xl transition-colors duration-500`}></div>
            <div className={`hidden lg:block absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 ${services[activeCardIndex].frameColor} rounded-br-3xl transition-colors duration-500`}></div>
            
            <div className="flex justify-center items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[580px]">
              <div 
                className="relative w-full max-w-[350px] sm:max-w-[450px] lg:w-[500px] h-[450px] sm:h-[500px] lg:h-[550px] cursor-pointer group"
                onClick={handleCardClick}
              >
              {services.map((service, index) => {
                const position = (index - activeCardIndex + services.length) % services.length;
                const isActive = position === 0;
                const offsetDistance = 15; // Use consistent offset for all screen sizes
                const isFeatured = service.featured && isActive;
                
                return (
                  <article
                    key={index}
                    className={`absolute top-1/2 left-1/2 w-full p-6 sm:p-8 lg:p-10 bg-white rounded-3xl transition-all duration-500 ease-in-out ${isActive ? `shadow-2xl ${services[activeCardIndex].glowColor} hover:shadow-3xl` : 'shadow-xl'} ${isFeatured ? 'ring-4 ring-purple-400 ring-opacity-50 scale-105' : ''}`}
                    style={{
                      transform: `translate(-50%, -50%) translateX(${position * offsetDistance}px) translateY(${position * offsetDistance}px) rotate(${position * 1.5}deg) scale(${1 - position * 0.03})`,
                      zIndex: services.length - position,
                      opacity: position < 3 ? 1 - position * 0.15 : 0,
                      pointerEvents: position === 0 ? 'auto' : 'none'
                    }}
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    {isFeatured && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        {language === 'de' ? 'HAUPTDIENSTLEISTUNG' : 'MAIN SERVICE'}
                      </div>
                    )}
                    <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${service.gradient} rounded-2xl mb-4 lg:mb-6 flex items-center justify-center transition-transform duration-300 ${isActive ? 'group-hover:scale-110' : ''} ${isFeatured ? 'animate-pulse shadow-lg shadow-purple-500/50' : ''}`}>
                      <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </div>
                    <h3 className={`text-2xl sm:text-2xl lg:text-3xl font-bold mb-3 lg:mb-5 text-gray-800 ${isFeatured ? 'text-purple-600' : ''}`} itemProp="name">{service.title}</h3>
                    <p className="text-base sm:text-base lg:text-lg text-gray-600 leading-relaxed" itemProp="description">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
            </div>
          </div>
          <p className="text-center mt-6 text-gray-500 text-sm animate-pulse">{t.services.clickHint}</p>
        </div>
      </section>

      {/* Full Screen Round Card Section */}
      <section className="relative py-16 px-4 lg:px-6 bg-white">
        {/* Mobile: Stacked Layout, Desktop: Side-by-side */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          {/* Website Service Card - Full width on mobile, 45% on desktop */}
          <div className="w-full lg:w-[45%] rounded-[30px] lg:rounded-[50px] bg-gradient-to-br from-blue-200 via-white to-pink-100 shadow-lg p-6 sm:p-8 lg:p-12 xl:p-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
              {t.websiteService.title}
            </h2>
            <div className="text-gray-800 space-y-4 lg:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed text-center max-h-[500px] lg:max-h-[600px] overflow-y-auto">
              <p dangerouslySetInnerHTML={{ 
                __html: t.websiteService.paragraph1.replace(/<strong>/g, '<span class="font-bold text-purple-700">').replace(/<\/strong>/g, '</span>')
              }} />
              <p dangerouslySetInnerHTML={{ 
                __html: t.websiteService.paragraph2.replace(/<strong>/g, '<span class="font-bold text-purple-700">').replace(/<\/strong>/g, '</span>')
              }} />
              <p dangerouslySetInnerHTML={{ 
                __html: t.websiteService.paragraph3.replace(/<strong>/g, '<span class="font-bold text-purple-700">').replace(/<\/strong>/g, '</span>')
              }} />
              <p dangerouslySetInnerHTML={{ 
                __html: t.websiteService.paragraph4.replace(/<strong>/g, '<span class="font-bold text-purple-700">').replace(/<\/strong>/g, '</span>')
              }} />
              <p className="font-bold text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t.websiteService.paragraph5}
              </p>
              <div className="mt-6 lg:mt-8">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                >
                  {t.websiteService.ideaLink}
                </button>
              </div>
            </div>
          </div>

          {/* Latest Artworks Section - Below on mobile, right side on desktop */}
          <div className="w-full lg:w-[50%] flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
              {t.latestArtworks.title}
            </h3>
            
            {/* 3D Overlapping Video Cards - Responsive sizing */}
            <div className="flex flex-col items-center gap-0 w-full max-w-md lg:max-w-none">
              {/* First Card - Bildschirmaufnahme */}
              <div 
                onClick={handleVideoCardClick}
                className={`relative w-[280px] h-[190px] sm:w-[360px] sm:h-[240px] lg:w-[460px] lg:h-[300px] xl:w-[560px] xl:h-[340px] rounded-xl lg:rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.7)] transform transition-all duration-500 hover:scale-105 cursor-pointer ${
                  videoCardsSwapped 
                    ? 'rotate-[8deg] hover:rotate-[4deg] -mt-12 sm:-mt-16 lg:-mt-20 xl:-mt-24 z-0' 
                    : 'rotate-[-8deg] hover:rotate-[-4deg] z-10'
                }`}
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/Bildschirmaufnahme 2025-12-06 um 20.37.38.mov" type="video/mp4" />
                </video>
              </div>
              
              {/* Second Card - video.mp4 */}
              <div 
                onClick={handleVideoCardClick}
                className={`relative w-[280px] h-[190px] sm:w-[360px] sm:h-[240px] lg:w-[460px] lg:h-[300px] xl:w-[560px] xl:h-[340px] rounded-xl lg:rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.7)] transform transition-all duration-500 hover:scale-105 cursor-pointer ${
                  videoCardsSwapped 
                    ? 'rotate-[-8deg] hover:rotate-[-4deg] z-10' 
                    : 'rotate-[8deg] hover:rotate-[4deg] -mt-12 sm:-mt-16 lg:-mt-20 xl:-mt-24 z-0'
                }`}
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t.clients.title}
            </h3>
            <p className="text-base lg:text-xl text-gray-600">{t.clients.subtitle}</p>
          </div>
          
          {/* Client Logo */}
          <div className="flex justify-center items-center">
            <a href="https://www.vars-development.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <Image 
                src="/logovars.png" 
                alt="Vaillant" 
                width={300} 
                height={120} 
                className="w-auto h-20 lg:h-28 object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} id="contact" className="py-16 lg:py-24 px-4 lg:px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{t.cta.title}</h3>
          <p className="text-base lg:text-xl mb-6 lg:mb-8 text-gray-700">
            {t.cta.description}
          </p>
          <a href="mailto:hello@fylu.com" className="inline-block px-8 lg:px-10 py-4 lg:py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold text-base lg:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-8 lg:py-12 px-4 lg:px-6 pb-12 lg:pb-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <a href="https://www.vars-development.com" target="_blank" rel="noopener noreferrer" className="inline-block transition-opacity hover:opacity-80">
            <Image src="/logo1.png" alt="Fylu Marketing & Design Logo" width={200} height={50} className="mx-auto mb-3 lg:mb-4 w-auto h-14 lg:h-16 object-contain" />
          </a>
          <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">{t.footer.tagline}</p>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-6 mb-4 lg:mb-6 text-sm lg:text-base">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">{t.footer.privacy}</a>
            <span className="text-gray-400">•</span>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">{t.footer.terms}</a>
            <span className="text-gray-400">•</span>
            <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">{t.footer.contact}</a>
          </div>
          <p className="text-xs lg:text-sm text-gray-500 italic mb-3">{t.footer.pricingNote}</p>
          <p className="text-xs lg:text-sm text-gray-500">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
