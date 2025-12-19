import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fylu Marketing & Design | Professional Marketing Agency",
  description: "Fylu Marketing & Design offers professional website development, flyer design, business cards, and complete marketing solutions for businesses.",
  keywords: [
    "marketing agency",
    "website development",
    "web design",
    "flyer design",
    "business cards",
    "digital marketing",
    "branding",
    "marketing materials",
    "graphic design",
    "professional websites",
    "responsive web design",
    "SEO optimization",
    "corporate identity",
    "brand design",
    "marketing solutions",
    "Fylu Marketing",
    "Webdesign Deutschland",
    "Marketing Agentur",
    "Professionelles Webdesign"
  ],
  authors: [{ name: "Fylu Marketing & Design" }],
  creator: "Fylu Marketing & Design",
  publisher: "Fylu Marketing & Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fylumarketing.de'),
  alternates: {
    canonical: 'https://fylumarketing.de',
  },
  openGraph: {
    title: "Fylu Marketing & Design | Professional Marketing Agency",
    description: "Transform your brand with professional website development, stunning flyer designs, and comprehensive marketing solutions tailored to your business needs.",
    url: 'https://fylumarketing.de',
    siteName: 'Fylu Marketing & Design',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://fylumarketing.de/logomase.png',
        width: 1200,
        height: 630,
        alt: 'Fylu Marketing & Design Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fylu Marketing & Design | Professional Marketing Agency",
    description: "Transform your brand with professional website development, stunning flyer designs, and comprehensive marketing solutions.",
    images: ['https://fylumarketing.de/logomase.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logomase.png',
    apple: '/logomase.png',
  },
  category: 'business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preload" href="/dadaadad.mov" as="video" type="video/mp4" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#163159" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
