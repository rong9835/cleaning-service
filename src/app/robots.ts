import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '*.json',
      ],
    },
    sitemap: 'https://jayannacleaningservice.com.au/sitemap.xml',
    host: 'https://jayannacleaningservice.com.au',
  };
}