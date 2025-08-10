'use client';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { List } from '@phosphor-icons/react';
import GetQuote from '../ui/GetQuoteButton';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto p-0 max-w-sm sm:max-w-2xl lg:max-w-5xl xl:max-w-7xl">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="p-2">
            <Link href="/">
              <Image src="/logo/Logo.png" alt="Logo" width={150px} />
            </Link>
            <p className="text-4xl md:text-7xl text-black "></p>
          </div>
          {/* 데스크탑에서 보여지는 네비게이션 */}
          <div className="hidden md:block">
            <nav className="flex items-center">
              <Link
                href="/"
                className="text-xl px-6 py-4 hover:text-brand-dark"
              >
                Home
              </Link>
              <Link
                href="#Service"
                className="text-xl px-6 py-4  hover:text-brand-dark"
              >
                Service
              </Link>
              <Link
                href="#FAQ"
                className="text-xl px-6 py-4  hover:text-brand-dark"
              >
                FAQ
              </Link>
              <GetQuote />
              <Link href="tel:0474724805" className="px-6 py-4">
                <Phone className="w-8 h-8" />
              </Link>
            </nav>
          </div>
          {/* 모바일에서 보여지는 네비게이션 */}
          <div className="flex md:hidden">
            <GetQuote />
            <button>
              <List className="size-12 p-2" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
