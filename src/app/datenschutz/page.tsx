'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DatenschutzPage() {
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
            <Image src="/logomase.png" alt="Fylu Web Design" width={180} height={50} className="w-auto h-12 lg:h-16 object-contain" />
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
                Datenschutzerklärung
              </span>
            </h1>
            <p className="text-gray-600 text-sm lg:text-base">Stand: 1. November 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Allgemeine Hinweise</h3>
              <p className="text-gray-700 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                werden können.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">Datenerfassung auf dieser Website</h3>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">Wer ist verantwortlich für die Datenerfassung?</h4>
              <p className="text-gray-700 mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten finden Sie 
                im Abschnitt „Verantwortliche Stelle".
              </p>

              <h4 className="text-lg font-semibold mb-2 text-gray-800">Wie erfassen wir Ihre Daten?</h4>
              <p className="text-gray-700 mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen, z. B. über das Kontaktformular, 
                per E-Mail, Telefon oder WhatsApp.
              </p>
              <p className="text-gray-700 mb-4">
                Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem 
                technische Daten (z. B. Browser, Betriebssystem, Uhrzeit des Seitenaufrufs).
              </p>

              <h4 className="text-lg font-semibold mb-2 text-gray-800">Wofür nutzen wir Ihre Daten?</h4>
              <p className="text-gray-700 mb-4">
                Zur fehlerfreien Bereitstellung der Website sowie zur Bearbeitung von Anfragen und zur Anbahnung oder 
                Durchführung von Verträgen.
              </p>

              <h4 className="text-lg font-semibold mb-2 text-gray-800">Welche Rechte haben Sie?</h4>
              <p className="text-gray-700 mb-4">
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie 
                ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Hosting</h2>
              <p className="text-gray-700 mb-4">
                Diese Website wird extern gehostet.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Hosting-Anbieter:</h3>
              <p className="text-gray-700 mb-4">
                Vercel Inc.<br />
                440 N Barranca Ave #4133<br />
                Covina, CA 91723<br />
                USA
              </p>
              <p className="text-gray-700 mb-4">
                Beim Besuch dieser Website werden personenbezogene Daten auf den Servern von Vercel verarbeitet. Dabei kann 
                es sich insbesondere um IP-Adressen, Meta- und Kommunikationsdaten sowie Websitezugriffe handeln.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Rechtsgrundlage:</h3>
              <p className="text-gray-700 mb-4">
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren, schnellen und effizienten Bereitstellung 
                der Website)
              </p>
              <p className="text-gray-700 mb-4">
                Vercel ist nach dem EU-US Data Privacy Framework (DPF) zertifiziert. Die Datenübertragung in die USA ist 
                dadurch datenschutzrechtlich zulässig.
              </p>
              <p className="text-gray-700 mb-4">
                Ein Vertrag über Auftragsverarbeitung (AVV) wurde geschlossen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Verantwortliche Stelle</h2>
              <p className="text-gray-700 mb-4">
                <strong>Fynn-Luca Schulz</strong><br />
                Fylu Marketing<br />
                Heiligenbornstraße 7<br />
                66359 Bous
              </p>
              <p className="text-gray-700 mb-4">
                E-Mail: <a href="mailto:fynnschulzonline@gmail.com" className="text-[#163159] hover:underline">fynnschulzonline@gmail.com</a><br />
                Telefon: <a href="tel:+4915168488999" className="text-[#163159] hover:underline">+49 151 68488999</a>
              </p>
              <p className="text-gray-700 mb-4">
                Verantwortliche Stelle ist die natürliche Person, die über die Zwecke und Mittel der Verarbeitung 
                personenbezogener Daten entscheidet.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Allgemeine Hinweise zur Datenverarbeitung</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Speicherdauer</h3>
              <p className="text-gray-700 mb-4">
                Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung des jeweiligen Zwecks 
                erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">Rechtsgrundlagen</h3>
              <p className="text-gray-700 mb-4">
                Je nach Verarbeitungsvorgang erfolgt die Verarbeitung auf Grundlage von:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
                <li>Art. 6 Abs. 1 lit. b DSGVO (Vertrag / vorvertragliche Maßnahmen)</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
                <li>§ 25 Abs. 2 Nr. 2 TDDDG (technisch notwendige Cookies)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Diese Website verwendet ausschließlich technisch notwendige Cookies. Diese Cookies sind erforderlich, 
                um die Website fehlerfrei und sicher bereitzustellen.
              </p>
              <p className="text-gray-700 mb-4">
                Eine Einwilligung ist hierfür nicht erforderlich.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Rechtsgrundlage:</h3>
              <p className="text-gray-700 mb-4">
                Art. 6 Abs. 1 lit. f DSGVO<br />
                § 25 Abs. 2 Nr. 2 TDDDG
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Server-Log-Dateien</h2>
              <p className="text-gray-700 mb-4">
                Der Hosting-Anbieter erhebt automatisch Informationen in sogenannten Server-Log-Dateien. Diese umfassen u. a.:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Browsertyp und Browserversion</li>
                <li>Betriebssystem</li>
                <li>Referrer-URL</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Rechtsgrundlage:</h3>
              <p className="text-gray-700 mb-4">
                Art. 6 Abs. 1 lit. f DSGVO
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Kontaktaufnahme</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Kontaktformular / E-Mail / Telefon</h3>
              <p className="text-gray-700 mb-4">
                Wenn Sie uns per Kontaktformular, E-Mail oder Telefon kontaktieren, werden Ihre Angaben zur Bearbeitung 
                Ihrer Anfrage gespeichert.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Rechtsgrundlage:</h3>
              <p className="text-gray-700 mb-4">
                Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)<br />
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Kommunikation)
              </p>
              <p className="text-gray-700 mb-4">
                Die Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Kommunikation über WhatsApp</h2>
              <p className="text-gray-700 mb-4">
                Für die Kommunikation nutzen wir WhatsApp (WhatsApp Ireland Limited, Dublin).
              </p>
              <p className="text-gray-700 mb-4">
                Die Kommunikation erfolgt Ende-zu-Ende-verschlüsselt. WhatsApp verarbeitet dabei Metadaten 
                (z. B. Absender, Empfänger, Zeitpunkt).
              </p>
              <p className="text-gray-700 mb-4">
                Es kann zu einer Datenübertragung in die USA kommen. Diese erfolgt auf Grundlage von Standardvertragsklauseln 
                sowie der DPF-Zertifizierung des Anbieters.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Rechtsgrundlage:</h3>
              <p className="text-gray-700 mb-4">
                Art. 6 Abs. 1 lit. f DSGVO
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Social Media</h2>
              <p className="text-gray-700 mb-4">
                Wir unterhalten ein öffentliches Profil auf LinkedIn:
              </p>
              <p className="text-gray-700 mb-4">
                <a 
                  href="https://www.linkedin.com/in/fynn-luca-schulz-85a029360/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#163159] hover:underline font-semibold"
                >
                  https://www.linkedin.com/in/fynn-luca-schulz-85a029360/
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                Beim Besuch dieser Seite gelten die Datenschutzbestimmungen von LinkedIn. Es kann zu einer Verarbeitung 
                personenbezogener Daten durch LinkedIn kommen, auf die wir keinen Einfluss haben.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Rechtsgrundlage:</h3>
              <p className="text-gray-700 mb-4">
                Art. 6 Abs. 1 lit. f DSGVO (Öffentlichkeitsarbeit)
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">10. SSL- / TLS-Verschlüsselung</h2>
              <p className="text-gray-700 mb-4">
                Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung 
                erkennen Sie am „https://" in der Adresszeile Ihres Browsers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Ihre Rechte</h2>
              <p className="text-gray-700 mb-4">
                Sie haben jederzeit das Recht auf:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Auskunft</strong> (Art. 15 DSGVO)</li>
                <li><strong>Berichtigung</strong> (Art. 16 DSGVO)</li>
                <li><strong>Löschung</strong> (Art. 17 DSGVO)</li>
                <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
                <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong>Widerspruch</strong> (Art. 21 DSGVO)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Zudem besteht ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Kontakt bei Datenschutzfragen</h3>
              <p className="text-gray-700 mb-4">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, 
                Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
              </p>
              <p className="text-gray-700">
                <strong>Fynn-Luca Schulz</strong><br />
                Fylu Marketing<br />
                Heiligenbornstraße 7<br />
                66359 Bous<br /><br />
                E-Mail: <a href="mailto:fynnschulzonline@gmail.com" className="text-[#163159] hover:underline">fynnschulzonline@gmail.com</a><br />
                Telefon: <a href="tel:+4915168488999" className="text-[#163159] hover:underline">+49 151 68488999</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-8 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-gray-500">© 2025 Fylu Marketing & Design. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4 justify-center mt-4 text-xs">
            <Link href="/agb" className="text-gray-500 hover:text-gray-900 transition-colors">AGB</Link>
            <Link href="/datenschutz" className="text-gray-500 hover:text-gray-900 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
