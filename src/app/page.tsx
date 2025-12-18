'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        about: 'Über uns',
        services: 'Leistungen',
        contact: 'Kontakt'
      },
      hero: {
        title1: 'Professionelles Webdesign',
        title2: 'Für Ihren digitalen Erfolg',
        description: 'Wir gestalten moderne, performante Websites, die Ihre Marke perfekt präsentieren und Ihre Besucher begeistern.',
        getStarted: 'Jetzt starten',
        ourServices: 'Unsere Leistungen'
      },
      pricing: {
        title: 'Individuelle Preise',
        description: 'Unsere Preise richten sich nach Ihren individuellen Anforderungen. Kontaktieren Sie uns für ein maßgeschneidertes Angebot.',
        contact: 'Jetzt Kontakt aufnehmen'
      },
      websiteService: {
        title: 'WEBDESIGN',
        paragraph1: 'Eine erstklassige Website braucht ein <strong>brillantes, modernes Design</strong>, das auf <strong>jedem Gerät perfekt funktioniert</strong> und <strong>extrem schnell lädt</strong>. Besucher sollen sofort verstehen, was dein Unternehmen anbietet, und alle wichtigen Informationen ohne Umwege finden. Eine <strong>klare Navigation, präzise formulierte Texte, hochwertige Bilder und eine durchdachte Struktur</strong> sorgen dafür, dass die Seite professionell, vertrauenswürdig und beeindruckend wirkt.',
        paragraph2: 'Damit die Website deinem Unternehmen echten Nutzen bringt, sollte sie <strong>praktische und wirkungsvolle Funktionen</strong> enthalten – zum Beispiel Kontaktformulare, Fotogalerien, Menüs, Buchungssysteme oder Standortanzeigen. Jede Schaltfläche, jeder Link und jede Unterseite muss <strong>reibungslos, schnell und zuverlässig</strong> funktionieren, damit der gesamte Auftritt stark und einheitlich wirkt.',
        paragraph3: 'Die <strong>DSGVO-Konformität</strong> ist dabei unverzichtbar. Die Website benötigt eine korrekte, leicht verständliche und gut sichtbare <strong>Datenschutzerklärung</strong>, die genau erklärt, welche Daten erhoben werden und warum. Jedes Formular, das persönliche Daten sammelt, muss eine <strong>klare Einwilligung</strong> einholen. Wenn Cookies oder externe Dienste genutzt werden, ist ein professionelles <strong>Cookie-Consent-System</strong> notwendig, damit Besucher selbst entscheiden können, was sie erlauben. Die Seite muss außerdem über eine <strong>sichere Verbindung, zuverlässiges Hosting</strong> und einen verantwortungsvollen Umgang mit allen Daten verfügen. Ein rechtssicheres <strong>Impressum</strong> ist für fast alle geschäftlichen Websites in Deutschland Pflicht.',
        paragraph4: 'Eine wirklich starke Website sollte zudem <strong>leicht aktualisierbar</strong> sein, damit du jederzeit neue Bilder, Inhalte oder Unterseiten hinzufügen kannst. Sie muss so aufgebaut sein, dass sie problemlos <strong>wachsen kann</strong> – zum Beispiel durch zukünftige Erweiterungen wie einen Online-Shop, einen Blog oder ein Buchungssystem. <strong>Regelmäßige Updates, Backups und Sicherheitsprüfungen</strong> halten alles dauerhaft stabil und geschützt.',
        paragraph5: 'Eine hervorragende Website ist schnell, klar, überzeugend, rechtssicher und bereit, mit deinem Unternehmen mitzuwachsen.',
        ideaLink: 'Haben Sie bereits eine Idee?'
      },
      latestArtworks: {
        title: 'Neueste Projekte'
      },
      services: {
        title: 'Webdesign Leistungen',
        clickHint: 'Klicken Sie, um mehr zu erfahren',
        website: {
          title: 'Professionelles Webdesign',
          description: 'Moderne, responsive Websites mit den neuesten Technologien. Von Design bis Deployment kümmern wir uns um alles.'
        }
      },
      cta: {
        title: 'Bereit für Ihre neue Website?',
        description: 'Lassen Sie uns gemeinsam Ihre digitale Präsenz aufbauen. Kontaktieren Sie uns für ein unverbindliches Gespräch!',
        button: 'Kontaktieren Sie uns'
      },
      clients: {
        title: 'Zufriedene Kunden',
        subtitle: 'Vertrauen von führenden Unternehmen'
      },
      footer: {
        tagline: 'Professionelles Webdesign seit 2025',
        privacy: 'Datenschutz',
        terms: 'AGB',
        contact: 'Kontakt',
        copyright: '© 2025 Fylu Web Design. Alle Rechte vorbehalten.',
        pricingNote: 'Unsere Preise variieren und werden speziell auf die individuellen Anforderungen unserer Kunden zugeschnitten.',
        services: 'Services',
        company: 'Unternehmen',
        country: 'Deutschland',
        cookieSettings: 'Cookie-Einstellungen'
      }
    },
    en: {
      nav: {
        about: 'About',
        services: 'Services',
        contact: 'Contact'
      },
      hero: {
        title1: 'Professional Web Design',
        title2: 'For your digital success',
        description: 'We create modern, high-performance websites that perfectly showcase your brand and inspire your visitors.',
        getStarted: 'Get Started',
        ourServices: 'Our Services'
      },
      pricing: {
        title: 'Custom Pricing',
        description: 'Our prices are tailored to your individual requirements. Contact us for a customized quote.',
        contact: 'Get in Contact'
      },
      websiteService: {
        title: 'WEB DESIGN',
        paragraph1: 'A brilliant website needs a <strong>stunning, cutting-edge design</strong> that works flawlessly on <strong>every single device</strong> and <strong>loads lightning-fast</strong>. Visitors should instantly understand what your business offers and be able to find all crucial information without any effort. <strong>Crystal-clear navigation, compelling texts, premium images and an intuitive structure</strong> make the page effortless to use and leave a powerful, professional impression.',
        paragraph2: 'To make the website truly valuable for your business, it should include <strong>powerful and effective features</strong> such as contact forms, photo galleries, menus, booking systems or location information. Every button, link and page must work <strong>flawlessly, reliably and seamlessly</strong>.',
        paragraph3: '<strong>DSGVO compliance</strong> is absolutely essential. The website needs a precise and easily accessible <strong>privacy policy</strong> that clearly explains what data is collected and why. Any form that collects personal data must ask for <strong>explicit consent</strong>. If you use cookies or external tools that collect data, a professional <strong>cookie consent system</strong> is mandatory so visitors can choose exactly what they allow. The website must use a <strong>secure connection, reliable hosting</strong> and handle all personal data responsibly. A legally compliant <strong>Impressum</strong> is required for almost all business websites in Germany.',
        paragraph4: 'A truly exceptional website should also be <strong>effortlessly updatable</strong>, so you can add new images, content or pages at any time. It must be built in a way that allows <strong>unlimited growth</strong>, for example adding a shop, blog or booking system later. <strong>Regular updates, backups and security checks</strong> keep everything running safely and flawlessly.',
        paragraph5: 'An outstanding website is lightning-fast, crystal-clear, exceptionally user-friendly, legally bulletproof and ready to scale with your business.',
        ideaLink: 'Have an idea already?'
      },
      latestArtworks: {
        title: 'Latest Projects'
      },
      services: {
        title: 'Web Design Services',
        clickHint: 'Click to learn more',
        website: {
          title: 'Professional Web Design',
          description: 'Modern, responsive websites built with the latest technologies. From design to deployment, we handle everything.'
        }
      },
      cta: {
        title: 'Ready for Your New Website?',
        description: "Let's build your digital presence together. Contact us for a free consultation!",
        button: 'Contact Us'
      },
      clients: {
        title: 'Happy Clients',
        subtitle: 'Trusted by leading companies'
      },
      footer: {
        tagline: 'Professional web design since 2025',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact',
        copyright: '© 2025 Fylu Web Design. All rights reserved.',
        pricingNote: 'Our prices vary and are specifically tailored to the individual requests of our clients.',
        services: 'Services',
        company: 'Company',
        country: 'Germany',
        cookieSettings: 'Cookie Settings'
      }
    }
  };

  const t = translations[language];

  const services = [
    {
      title: t.services.website.title,
      description: t.services.website.description,
      gradient: "from-gray-700 to-gray-900",
      frameColor: "border-gray-600",
      glowColor: "shadow-gray-700/50",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      featured: true
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
        // Start German video at 4 seconds, English video at 1 second
        videoRef.current.currentTime = language === 'de' ? 4 : 1;
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

    // Additional handler for iOS/Safari - ensure videos play on visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        playVideo();
        // Also try to play all other videos on the page
        const allVideos = document.querySelectorAll('video');
        allVideos.forEach(video => {
          if (video.paused) {
            video.play().catch(() => {});
          }
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-white/80'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-6 flex justify-between items-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="transition-opacity hover:opacity-80 bg-transparent border-none cursor-pointer p-0">
            <Image src="/logo1.png" alt="Fylu Web Design Logo" width={180} height={50} className="w-auto h-12 lg:h-16 object-contain" />
          </button>
          <div className="flex gap-3 lg:gap-6 items-center text-sm lg:text-lg">
            <a href="/about" className="text-gray-700 hover:text-gray-900 transition-colors duration-300 hidden sm:block">{t.nav.about}</a>
            <a href="/services" className="text-gray-700 hover:text-gray-900 transition-colors duration-300 hidden sm:block">{t.nav.services}</a>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 transition-colors duration-300 bg-transparent border-none cursor-pointer">{t.nav.contact}</button>
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
      <section className="min-h-screen flex items-center justify-center px-4 lg:px-6 pt-14 lg:pt-12" itemScope itemType="https://schema.org/WebPageElement">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Image Top + Text Below */}
          <div className="flex flex-col gap-2 lg:gap-3 order-2 lg:order-1 justify-center">
            {/* Hero Image - Top Left */}
            <div className="relative w-full h-[225px] sm:h-[315px] lg:h-[360px] animate-fade-in-up">
              <Image 
                src="/Unbenanntes_Projekt 30.png" 
                alt="Professional Web Design Showcase" 
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            
            {/* Hero Text - Below Image */}
            <div className="space-y-4 lg:space-y-6 animate-fade-in-up text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent animate-gradient">
                  {t.hero.title1}
                </span>
                <br />
                <span className="text-gray-800">{t.hero.title2}</span>
              </h1>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                <a href="#contact" className="px-6 lg:px-8 py-3 lg:py-4 bg-[#49B1CE] text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center hover:bg-[#3a9bb8]">
                  {t.hero.getStarted}
                </a>
                <a href="/about" className="px-6 lg:px-8 py-3 lg:py-4 border-2 border-[#49B1CE] text-[#49B1CE] rounded-full font-semibold hover:bg-[#49B1CE] hover:text-white transition-all duration-300 text-center">
                  {t.nav.about}
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Video */}
          <div className="relative order-1 lg:order-2 mt-8 lg:mt-0 flex items-center justify-center">
            <div className="relative h-[239px] sm:h-[279px] lg:h-[359px] xl:h-[399px] w-full">
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
                }}
                key={language}
                onLoadedData={(e) => {
                  const video = e.target as HTMLVideoElement;
                  // Start English video at 1 second to skip the first second
                  if (language === 'en') {
                    video.currentTime = 1;
                  }
                  video.play().catch(() => {
                    // Fallback for autoplay restrictions
                    video.muted = true;
                    video.play();
                  });
                }}
              >
                <source src={language === 'de' ? '/german.mov' : '/animation.mov'} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Removed - Video Section merged into Hero */}

      {/* Full Screen Round Card Section */}
      <section className="relative py-24 lg:py-32 px-4 lg:px-6 bg-white">
        {/* Mobile: Stacked Layout, Desktop: Side-by-side */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          {/* Website Service Card - Full width on mobile, 45% on desktop */}
          <div className="w-full lg:w-[45%] rounded-[30px] lg:rounded-[50px] bg-white shadow-lg p-6 sm:p-8 lg:p-12 xl:p-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-center">
              {t.websiteService.title}
            </h2>
            <div className="text-gray-800 space-y-4 lg:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed text-center max-h-[500px] lg:max-h-[600px] overflow-y-auto">
              <p dangerouslySetInnerHTML={{ 
                __html: t.websiteService.paragraph1.replace(/<strong>/g, '<span class="font-bold text-gray-900">').replace(/<\/strong>/g, '</span>')
              }} />
              <p dangerouslySetInnerHTML={{ 
                __html: t.websiteService.paragraph2.replace(/<strong>/g, '<span class="font-bold text-gray-900">').replace(/<\/strong>/g, '</span>')
              }} />
              <p dangerouslySetInnerHTML={{ 
                __html: t.websiteService.paragraph3.replace(/<strong>/g, '<span class="font-bold text-gray-900">').replace(/<\/strong>/g, '</span>')
              }} />
              <p dangerouslySetInnerHTML={{ 
                __html: t.websiteService.paragraph4.replace(/<strong>/g, '<span class="font-bold text-gray-900">').replace(/<\/strong>/g, '</span>')
              }} />
              <p className="font-bold text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {t.websiteService.paragraph5}
              </p>
              <div className="mt-6 lg:mt-8">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-[#49B1CE] text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer text-sm sm:text-base hover:bg-[#3a9bb8]"
                >
                  {t.websiteService.ideaLink}
                </button>
              </div>
            </div>
          </div>

          {/* Latest Artworks Section - Below on mobile, right side on desktop */}
          <div className="w-full lg:w-[50%] flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent text-center">
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
                  preload="auto"
                  className="w-full h-full object-cover"
                  onLoadedData={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.play().catch(() => {
                      video.muted = true;
                      video.play();
                    });
                  }}
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
                  preload="auto"
                  className="w-full h-full object-cover"
                  onLoadedData={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.play().catch(() => {
                      video.muted = true;
                      video.play();
                    });
                  }}
                >
                  <source src="/video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="py-12 lg:py-16 px-4 lg:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              {t.clients.title}
            </h3>
            <p className="text-base lg:text-xl text-gray-600">{t.clients.subtitle}</p>
          </div>
          
          {/* Client Logo */}
          <div className="flex justify-center items-center gap-8 lg:gap-16 flex-wrap">
            <a href="https://taskey-ten.vercel.app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <Image 
                src="/taskey.png" 
                alt="Taskey" 
                width={300} 
                height={120} 
                className="w-auto h-20 lg:h-28 object-contain"
              />
            </a>
            <a href="https://www.vars-development.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
              <Image 
                src="/logovars.png" 
                alt="Vars Development" 
                width={300} 
                height={120} 
                className="w-auto h-20 lg:h-28 object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} id="contact" className="py-16 lg:py-24 px-4 lg:px-6 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{t.cta.title}</h3>
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
                <Image src="/logo1.png" alt="Fylu Marketing & Design Logo" width={180} height={50} className="w-auto h-14 object-contain" />
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
                <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">{t.nav.contact}</a></li>
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
