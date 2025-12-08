'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const [isValuesVisible, setIsValuesVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);

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

  const values = [
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Innovation",
      description: "We stay ahead of trends, delivering cutting-edge solutions that set your brand apart from the competition.",
      gradient: "from-yellow-400 to-orange-500",
      delay: "delay-0"
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Quality",
      description: "Excellence is not an option—it's our standard. Every project is crafted with meticulous attention to detail.",
      gradient: "from-green-400 to-teal-500",
      delay: "delay-100"
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Collaboration",
      description: "Your vision, our expertise. We work closely with you to bring your ideas to life with creativity and precision.",
      gradient: "from-blue-400 to-indigo-500",
      delay: "delay-200"
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Commitment",
      description: "We're dedicated to your success. Fast turnarounds, responsive communication, and results that exceed expectations.",
      gradient: "from-purple-400 to-pink-500",
      delay: "delay-300"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", gradient: "from-purple-600 to-blue-600" },
    { number: "200+", label: "Happy Clients", gradient: "from-pink-600 to-purple-600" },
    { number: "24/7", label: "Support Available", gradient: "from-orange-600 to-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/90 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 lg:py-4 flex justify-between items-center">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image src="/logo1.png" alt="Fylu Marketing & Design" width={150} height={40} className="w-auto h-10 lg:h-14 object-contain" />
          </Link>
          <Link 
            href="/"
            className="px-6 lg:px-8 py-2 lg:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section with Animated Gradient Background */}
      <section className="relative min-h-screen flex items-center justify-center px-4 lg:px-6 pt-32 pb-20 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full border border-purple-200 animate-fade-in-up">
            <span className="text-purple-600 font-semibold text-sm lg:text-base">About Our Agency</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="text-gray-900">Excellence</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We are a team of passionate designers, developers, and marketers dedicated to transforming brands through innovative digital solutions.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-purple-100"
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
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-purple-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Our Beginning</h3>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    Founded in 2025, Fylu Marketing & Design emerged from a simple vision: to help businesses stand out in an increasingly digital world. What started as a small team of creative minds has grown into a full-service marketing agency.
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    Today, we combine cutting-edge technology with timeless design principles to create experiences that captivate audiences and drive results.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full text-purple-600 font-semibold text-sm mb-4">
                Our Story
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Where Creativity
                </span>
                <br />
                <span className="text-gray-900">Meets Strategy</span>
              </h2>
              <p className="text-xl text-gray-800 leading-relaxed mb-8">
                We believe that great design is more than aesthetics—it's about solving problems, telling stories, and creating meaningful connections between brands and their audiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Client-Centric Approach</h4>
                    <p className="text-gray-800">Your success is our mission. We listen, understand, and deliver.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Data-Driven Results</h4>
                    <p className="text-gray-800">Every decision backed by insights and analytics.</p>
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
        className={`py-20 lg:py-32 px-4 lg:px-6 bg-gradient-to-br from-white to-purple-50/50 relative transition-all duration-1000 ${isValuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 lg:mb-24">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full text-purple-600 font-semibold text-sm mb-4">
              What Drives Us
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              The principles that guide every project, every partnership, and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:scale-105 animate-fade-in-up ${value.delay} flex flex-col items-center text-center`}
              >
                <div className={`w-16 h-16 lg:w-18 lg:h-18 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <svg className="w-8 h-8 lg:w-9 lg:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className={`text-xl lg:text-2xl font-bold mb-3 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                  {value.title}
                </h3>
                <p className="text-gray-800 text-base leading-relaxed">
                  {value.description}
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
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  {/* Replace this Image src with your actual photo path */}
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                    <p className="text-gray-500 text-center px-8">Add your photo here<br/>(Replace in /public folder)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vision Text */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full text-purple-600 font-semibold text-sm mb-4">
                My Vision
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Building Brands
                </span>
                <br />
                <span className="text-gray-900">That Inspire</span>
              </h2>
              <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
                <p>
                  My vision is to empower businesses of all sizes to reach their full potential through innovative design and strategic marketing solutions. I believe that every brand has a unique story to tell, and it's our mission to help them tell it beautifully.
                </p>
                <p>
                  In today's digital landscape, standing out is more important than ever. That's why we're committed to delivering not just websites and marketing materials, but complete brand experiences that resonate with audiences and drive meaningful results.
                </p>
                <p>
                  Together, we can create something extraordinary that not only meets your business goals but exceeds your wildest expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-12 px-4 lg:px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="inline-block transition-opacity hover:opacity-80">
            <Image src="/logo1.png" alt="Fylu Marketing & Design" width={180} height={50} className="mx-auto mb-6 w-auto h-16" />
          </Link>
          <p className="text-gray-600 mb-6">Creating exceptional digital experiences since 2025</p>
          <p className="text-sm text-gray-500">© 2025 Fylu Marketing & Design. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
