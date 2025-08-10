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
  title: 'Jay & Anna Cleaning Service | Professional Home & Office Cleaning',
  description: 'Jay & Anna Cleaning Service provides expert cleaning solutions for homes, offices, and commercial spaces. Get your free quote today for professional, reliable, and affordable cleaning services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${abrilFatface.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
