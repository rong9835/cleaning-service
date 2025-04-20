'use client';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { List } from 'phosphor-react';
import GetQuote from './GetQuote';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto lg:px-4 xl:px-20">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="p-2">
            {/* <Link href="/">
              <Image src="/logo.png" alt="Logo" className="h-16 w-auto" />
            </Link> */}
            <p className="text-4xl md:text-7xl text-black ">로고</p>
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
