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
    "marketing solutions"
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
    canonical: '/',
    languages: {
      'de': '/de',
      'en': '/en',
    },
  },
  openGraph: {
    title: "Fylu Marketing & Design | Professional Marketing Agency",
    description: "Transform your brand with professional website development, stunning flyer designs, and comprehensive marketing solutions tailored to your business needs.",
    url: 'https://fylumarketing.de',
    siteName: 'Fylu Marketing & Design',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo1.png',
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
    images: ['/logo1.png'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/logo1.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preload" href="/video2.mov" as="video" type="video/mp4" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#9333ea" />
        <link rel="canonical" href="https://fylumarketing.de" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
