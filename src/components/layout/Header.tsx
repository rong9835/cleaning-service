'use client';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-0 max-w-sm sm:max-w-2xl lg:max-w-5xl xl:max-w-7xl">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <div className="px-4">
            <Link href="/" className="block">
              <div className="w-56 h-14">
                <Image
                  src="/logo/Logo.png"
                  alt="Logo"
                  width={224}
                  height={56}
                  className="w-32 h-full object-contain"
                />
              </div>
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
              <a
                href="#Service"
                className="text-xl px-6 py-4 hover:text-brand-dark scroll-smooth cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('Service')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Service
              </a>
              <a
                href="#ServiceArea"
                className="text-xl px-6 py-4 hover:text-brand-dark scroll-smooth cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('ServiceArea')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Service Area
              </a>

              <Link href="tel:0474724805" className="px-6 py-4">
                <Phone className="w-8 h-8" />
              </Link>
            </nav>
          </div>
          {/* 모바일에서 보여지는 네비게이션 */}
          <div className="flex md:hidden">
            <button>
              <Link href="tel:0474724805" className="px-6 py-4">
                <Phone className="w-8 h-8" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
