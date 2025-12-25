import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-[#163159] hover:text-[#0f2340] transition-colors">
              Fylu Marketing & Design
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#163159] transition-colors">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-[#163159] transition-colors">Services</Link>
              <Link href="/about" className="text-gray-700 hover:text-[#163159] transition-colors">About</Link>
              <Link href="/contact" className="text-[#163159] font-semibold">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Kontaktieren Sie uns
          </h1>
          <p className="text-xl text-gray-600">
            Wir freuen uns auf Ihre Nachricht und helfen Ihnen gerne weiter!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#163159] focus:border-transparent transition-all"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#163159] focus:border-transparent transition-all"
                placeholder="ihre@email.de"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#163159] focus:border-transparent transition-all"
                placeholder="+49 123 456789"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                Interessiert an
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#163159] focus:border-transparent transition-all"
              >
                <option value="">Bitte wählen...</option>
                <option value="website">Website Entwicklung</option>
                <option value="flyer">Flyer Design</option>
                <option value="business-cards">Visitenkarten</option>
                <option value="marketing">Marketing Services</option>
                <option value="other">Sonstiges</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#163159] focus:border-transparent transition-all resize-none"
                placeholder="Beschreiben Sie Ihr Projekt..."
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#163159] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0f2340] active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Nachricht senden
              </button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-[#163159] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">E-Mail</h3>
                <p className="text-gray-600">info@fylumarketing.de</p>
              </div>

              <div>
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-[#163159] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                <p className="text-gray-600">+49 123 456789</p>
              </div>

              <div>
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-[#163159] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Standort</h3>
                <p className="text-gray-600">Deutschland</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white/80 backdrop-blur-md mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © 2025 Fylu Marketing & Design. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6">
              <Link href="/impressum" className="text-gray-600 hover:text-[#163159] transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-gray-600 hover:text-[#163159] transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-gray-600 hover:text-[#163159] transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
