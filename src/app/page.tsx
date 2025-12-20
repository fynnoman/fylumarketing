'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const [videoCardsSwapped, setVideoCardsSwapped] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const t = {
    nav: {
      about: 'Über uns',
      services: 'Leistungen',
      contact: 'Kontakt'
    },
    hero: {
      title1: 'Modernes Webdesign',
      title2: 'für Ihren digitalen Erfolg',
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
  };

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
            "logo": "https://fylumarketing.de/logomase.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "email": "fynnschulzonline@gmail.com"
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-3 sm:py-4 lg:py-6 flex justify-between items-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="transition-opacity hover:opacity-80 active:opacity-60 bg-transparent border-none cursor-pointer p-0 touch-manipulation">
            <Image src="/logomase.png" alt="Fylu Web Design Logo" width={180} height={50} className="w-auto h-10 sm:h-12 lg:h-16 object-contain" />
          </button>
          <div className="flex gap-2 sm:gap-3 lg:gap-6 items-center text-sm sm:text-base lg:text-lg">
            <a href="/about" className="relative text-gray-700 hover:text-gray-900 active:text-gray-900 transition-colors duration-300 hidden sm:block touch-manipulation py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#163159] after:transition-all after:duration-300 hover:after:w-full">{t.nav.about}</a>
            <a href="/services" className="relative text-gray-700 hover:text-gray-900 active:text-gray-900 transition-colors duration-300 hidden sm:block touch-manipulation py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#163159] after:transition-all after:duration-300 hover:after:w-full">{t.nav.services}</a>
            <button onClick={() => scrollToSection('contact')} className="relative text-gray-700 hover:text-gray-900 active:text-gray-900 transition-colors duration-300 touch-manipulation py-2 px-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#163159] after:transition-all after:duration-300 hover:after:w-full bg-transparent border-none cursor-pointer">{t.nav.contact}</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-6 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12" itemScope itemType="https://schema.org/WebPageElement">
        <div className="max-w-7xl mx-auto w-full">
          {/* Mobile Layout: Heading first, then Video */}
          <div className="flex flex-col lg:hidden gap-6 items-center">
            {/* Hero Text - Mobile */}
            <div className="space-y-3 sm:space-y-4 animate-fade-in-up text-center px-2 sm:px-0 w-full">
              <h1 className="font-extrabold leading-[1.2] pb-2">
                <span className="block text-4xl xs:text-5xl sm:text-6xl mb-3 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  {t.hero.title1}
                </span>
                <span className="block text-3xl xs:text-4xl sm:text-5xl bg-gradient-to-r from-[#163159] via-[#1e4173] to-[#163159] bg-clip-text text-transparent">
                  {t.hero.title2}
                </span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2">
                <a href="#contact" className="px-6 sm:px-7 py-3.5 sm:py-4 bg-[#163159] text-white rounded-full font-semibold hover:shadow-2xl active:scale-95 transition-all duration-300 text-center hover:bg-[#0f2340] touch-manipulation text-sm sm:text-base min-h-[48px] flex items-center justify-center">
                  {t.hero.getStarted}
                </a>
                <a href="/about" className="px-6 sm:px-7 py-3.5 sm:py-4 border-2 border-[#163159] text-[#163159] rounded-full font-semibold hover:bg-[#163159] hover:text-white active:scale-95 transition-all duration-300 text-center touch-manipulation text-sm sm:text-base min-h-[48px] flex items-center justify-center">
                  {t.nav.about}
                </a>
              </div>
            </div>
            
            {/* Video - Mobile (below heading) */}
            <div className="relative w-full flex items-start justify-center mt-4">
              <div className="relative h-[400px] xs:h-[450px] sm:h-[520px] w-full">
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
                  onLoadedData={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.play().catch(() => {
                      video.muted = true;
                      video.play();
                    });
                  }}
                >
                  <source src="/heading2.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="hero-video-overlay"></div>
              </div>
            </div>
          </div>

          {/* Desktop Layout: Side by Side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Column - Text */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6 animate-fade-in-up text-left">
                <h1 className="font-extrabold leading-[1.2] pb-2">
                  <span className="block text-7xl xl:text-8xl mb-3 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    {t.hero.title1}
                  </span>
                  <span className="block text-6xl xl:text-7xl bg-gradient-to-r from-[#163159] via-[#1e4173] to-[#163159] bg-clip-text text-transparent">
                    {t.hero.title2}
                  </span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  {t.hero.description}
                </p>
                <div className="flex gap-4 pt-2">
                  <a href="#contact" className="px-8 py-4 bg-[#163159] text-white rounded-full font-semibold hover:shadow-2xl active:scale-95 transition-all duration-300 text-center hover:bg-[#0f2340] touch-manipulation text-base min-h-[48px] flex items-center justify-center">
                    {t.hero.getStarted}
                  </a>
                  <a href="/about" className="px-8 py-4 border-2 border-[#163159] text-[#163159] rounded-full font-semibold hover:bg-[#163159] hover:text-white active:scale-95 transition-all duration-300 text-center touch-manipulation text-base min-h-[48px] flex items-center justify-center">
                    {t.nav.about}
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Video */}
            <div className="relative mt-0 flex items-start justify-center lg:-mt-12">
              <div className="relative h-[680px] xl:h-[760px] w-full">
                <video 
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
                  onLoadedData={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.play().catch(() => {
                      video.muted = true;
                      video.play();
                    });
                  }}
                >
                  <source src="/heading2.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="hero-video-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Removed - Video Section merged into Hero */}

      {/* Full Screen Round Card Section */}
      <section className="relative py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-6 bg-white">
        {/* Mobile: Stacked Layout, Desktop: Side-by-side */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 items-center lg:items-start">
          {/* Website Service Card - Full width on mobile, 45% on desktop */}
          <div className="w-full lg:w-[45%] rounded-[25px] sm:rounded-[30px] lg:rounded-[50px] bg-white shadow-lg p-5 sm:p-7 md:p-10 lg:p-12 xl:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-5 sm:mb-6 lg:mb-8 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent text-center">
              {t.websiteService.title}
            </h2>
            <div className="text-gray-800 space-y-3 sm:space-y-4 lg:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed text-center max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] overflow-y-auto overscroll-contain">
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
              <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                {t.websiteService.paragraph5}
              </p>
              <div className="mt-5 sm:mt-6 lg:mt-8 pb-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-block px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 bg-[#163159] text-white rounded-full font-semibold hover:shadow-xl active:scale-95 transition-all duration-300 cursor-pointer text-sm sm:text-base hover:bg-[#0f2340] touch-manipulation min-h-[48px]"
                >
                  {t.websiteService.ideaLink}
                </button>
              </div>
            </div>
          </div>

          {/* Latest Artworks Section - Below on mobile, right side on desktop */}
          <div className="w-full lg:w-[50%] flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent text-center px-4">
              {t.latestArtworks.title}
            </h3>
            
            {/* Video blending into background */}
            <div className="w-full max-w-2xl lg:max-w-none relative">
              <video 
                autoPlay 
                muted 
                playsInline
                preload="auto"
                className="w-full h-auto object-cover opacity-90"
                onLoadedData={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.play().catch(() => {
                    video.muted = true;
                    video.play();
                  });
                }}
                onEnded={(e) => {
                  const video = e.target as HTMLVideoElement;
                  setTimeout(() => {
                    video.currentTime = 0;
                    video.play().catch(() => {
                      video.muted = true;
                      video.play();
                    });
                  }, 10000); // 10 seconds delay
                }}
              >
                <source src="/varsmac.mov" type="video/mp4" />
              </video>
              {/* White overlay to cover watermark */}
              <div className="project-video-overlay"></div>
            </div>

            {/* Second video - taskeymac.mov */}
            <div className="w-full max-w-2xl lg:max-w-none relative mt-8 sm:mt-10 lg:mt-12">
              <video 
                autoPlay 
                muted 
                playsInline
                preload="auto"
                className="w-full h-auto object-cover opacity-90"
                onLoadedData={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.play().catch(() => {
                    video.muted = true;
                    video.play();
                  });
                }}
                onEnded={(e) => {
                  const video = e.target as HTMLVideoElement;
                  setTimeout(() => {
                    video.currentTime = 0;
                    video.play().catch(() => {
                      video.muted = true;
                      video.play();
                    });
                  }, 10000); // 10 seconds delay
                }}
              >
                <source src="/taskeymac.mov" type="video/mp4" />
              </video>
              {/* White overlay to cover watermark */}
              <div className="project-video-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
              {t.clients.title}
            </h3>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 px-4">{t.clients.subtitle}</p>
          </div>
          
          {/* Client Logo */}
          <div className="flex justify-center items-center gap-6 sm:gap-8 lg:gap-16 flex-wrap">
            <a href="https://taskey-ten.vercel.app" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80 active:opacity-60 touch-manipulation">
              <Image 
                src="/taskey.png" 
                alt="Taskey" 
                width={300} 
                height={120} 
                className="w-auto h-16 sm:h-20 lg:h-28 object-contain"
              />
            </a>
            <a href="https://www.vars-development.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80 active:opacity-60 touch-manipulation">
              <Image 
                src="/logovars.png" 
                alt="Vars Development" 
                width={300} 
                height={120} 
                className="w-auto h-16 sm:h-20 lg:h-28 object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} id="contact" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-6 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent px-4">{t.cta.title}</h3>
          <p className="text-sm sm:text-base lg:text-xl mb-5 sm:mb-6 lg:mb-8 text-gray-700 px-4 max-w-2xl mx-auto leading-relaxed">
            {t.cta.description}
          </p>
          <a href="mailto:fynnschulzonline@gmail.com" className="inline-block px-7 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 bg-[#163159] text-white rounded-full font-bold text-sm sm:text-base lg:text-lg hover:shadow-2xl active:scale-95 transition-all duration-300 hover:bg-[#0f2340] touch-manipulation min-h-[48px]">
            {t.cta.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
            {/* Company Info */}
            <div className="text-center sm:text-left">
              <Link href="/" className="inline-block transition-opacity hover:opacity-80 active:opacity-60 mb-3 sm:mb-4 touch-manipulation">
                <Image src="/logomase.png" alt="Fylu Marketing & Design Logo" width={180} height={50} className="w-auto h-12 sm:h-14 object-contain" />
              </Link>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {t.footer.tagline}
              </p>
            </div>

            {/* Services Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-3 sm:mb-4">{t.footer.services}</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900 active:text-gray-900 transition-colors inline-block py-1 touch-manipulation">Webdesign</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900 active:text-gray-900 transition-colors inline-block py-1 touch-manipulation">Weboptimization</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-3 sm:mb-4">{t.footer.company}</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 active:text-gray-900 transition-colors inline-block py-1 touch-manipulation">{t.nav.about}</Link></li>
                <li><a href="#contact" className="text-gray-600 hover:text-gray-900 active:text-gray-900 transition-colors inline-block py-1 touch-manipulation">{t.nav.contact}</a></li>
                <li><Link href="/agb" className="text-gray-600 hover:text-gray-900 active:text-gray-900 transition-colors inline-block py-1 touch-manipulation">{t.footer.terms}</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="text-center sm:text-left">
              <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-3 sm:mb-4">{t.footer.contact}</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li className="text-gray-600">+49 151 684 88999</li>
                <li><a href="mailto:fynnschulzonline@gmail.com" className="text-gray-600 hover:text-gray-900 active:text-gray-900 transition-colors inline-block py-1 touch-manipulation">fynnschulzonline@gmail.com</a></li>
                <li className="text-gray-600">{t.footer.country}</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 sm:pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-xs text-gray-500 text-center md:text-left">{t.footer.copyright}</p>
              <div className="flex gap-4 sm:gap-6 text-xs flex-wrap justify-center">
                <Link href="/impressum" className="text-gray-500 hover:text-gray-900 active:text-gray-900 transition-colors py-1 touch-manipulation">Impressum</Link>
                <Link href="/datenschutz" className="text-gray-500 hover:text-gray-900 active:text-gray-900 transition-colors py-1 touch-manipulation">{t.footer.privacy}</Link>
                <Link href="/agb" className="text-gray-500 hover:text-gray-900 active:text-gray-900 transition-colors py-1 touch-manipulation">{t.footer.terms}</Link>
                <button onClick={() => localStorage.removeItem('cookieConsent')} className="text-gray-500 hover:text-gray-900 active:text-gray-900 transition-colors py-1 touch-manipulation bg-transparent border-none cursor-pointer">{t.footer.cookieSettings}</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
}
