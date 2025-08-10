import type { Metadata } from 'next';
import GetQuoteSection from '@/components/home/GetQuoteSection';
import ServiceSection from '@/components/home/ServicesSection';
import ServiceAreasSection from '@/components/home/ServiceAreasSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import StructuredData from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Jay & Anna Cleaning Service Sydney | Professional House & Office Cleaning Services',
  description: 'Premium cleaning services in Sydney. Jay & Anna offers house cleaning, office cleaning, window cleaning, deep cleaning & regular cleaning across South & South-Western Sydney. Book your free quote today!',
  keywords: [
    'cleaning service sydney',
    'house cleaning sydney', 
    'office cleaning sydney',
    'professional cleaners sydney',
    'deep cleaning sydney',
    'window cleaning sydney',
    'strata cleaning sydney',
    'regular cleaning sydney',
    'liverpool cleaning service',
    'campbelltown cleaning service',
    'bankstown cleaning service',
    'south west sydney cleaners',
    'jay anna cleaning',
    'sydney cleaning company',
    'home cleaning service',
    'commercial cleaning sydney'
  ],
  authors: [{ name: 'Jay & Anna Cleaning Service' }],
  creator: 'Jay & Anna Cleaning Service',
  publisher: 'Jay & Anna Cleaning Service',
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
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://jayannacleaningservice.com.au',
    siteName: 'Jay & Anna Cleaning Service Sydney',
    title: 'Jay & Anna Cleaning Service Sydney | Professional House & Office Cleaning',
    description: 'Premium cleaning services in Sydney. House cleaning, office cleaning, window cleaning, deep cleaning & regular cleaning across South & South-Western Sydney.',
    images: [
      {
        url: '/images/main.jpg',
        width: 1200,
        height: 630,
        alt: 'Jay & Anna Professional Cleaning Service Sydney',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jay & Anna Cleaning Service Sydney | Professional House & Office Cleaning',
    description: 'Premium cleaning services in Sydney. Get your free quote today!',
    images: ['/images/main.jpg'],
  },
  alternates: {
    canonical: 'https://jayannacleaningservice.com.au',
  },
  category: 'business',
  other: {
    'geo.region': 'AU-NSW',
    'geo.placename': 'Sydney',
    'geo.position': '-33.8688;151.2093',
    'ICBM': '-33.8688, 151.2093',
  },
};

export default function Page() {
  return (
    <>
      <StructuredData />
      <div className="w-full">
        <GetQuoteSection />

        <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceSection />
          <WhyChooseUs />
          <ServiceAreasSection />
        </div>
      </div>
    </>
  );
}
