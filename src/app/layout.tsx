import type { Metadata } from 'next';
import { Inter, Abril_Fatface } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const abrilFatface = Abril_Fatface({
  variable: '--font-abril-fatface',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jayannacleaningservice.com.au'),
  title: {
    default: 'Jay & Anna Cleaning Service Sydney | Professional House & Office Cleaning',
    template: '%s | Jay & Anna Cleaning Service Sydney'
  },
  description: 'Premium cleaning services in Sydney. Jay & Anna offers house cleaning, office cleaning, window cleaning, deep cleaning & regular cleaning across South & South-Western Sydney. Book your free quote today!',
  applicationName: 'Jay & Anna Cleaning Service',
  referrer: 'origin-when-cross-origin',
  keywords: ['cleaning service sydney', 'house cleaning sydney', 'office cleaning sydney', 'professional cleaners sydney', 'sydney cleaning company'],
  authors: [{ name: 'Jay & Anna Cleaning Service' }],
  creator: 'Jay & Anna Cleaning Service',
  publisher: 'Jay & Anna Cleaning Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" itemScope itemType="http://schema.org/LocalBusiness">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body
        className={`${inter.variable} ${abrilFatface.variable} antialiased flex flex-col min-h-screen`}
        itemScope 
        itemType="http://schema.org/WebPage"
      >
        <Header />
        <main className="flex-1" role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
