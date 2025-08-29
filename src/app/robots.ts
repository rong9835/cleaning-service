import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
      ],
    },
    sitemap: 'https://jayannacleaning.com.au/sitemap.xml',
    host: 'https://jayannacleaning.com.au',
  };
}