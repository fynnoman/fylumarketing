import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: 'https://fylumarketing.de/sitemap.xml',
    host: 'https://fylumarketing.de',
  }
}
