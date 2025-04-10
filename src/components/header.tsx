'use client';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white">
      <div className="max-w-8xl mx-auto px-[100px]">
        <div className="flex items-center justify-between h-[70px]">
          {/* 로고 */}
          <div>
            {/* <Link href="/">
              <Image src="/logo.png" alt="Logo" className="h-16 w-auto" />
            </Link> */}
            <p className="text-7xl text-black">로고</p>
          </div>
          <div>
            <nav className="flex items-center">
              <Link
                href="/"
                className="text-xl px-[30px] py-[18px] hover:text-brand-dark"
              >
                Home
              </Link>
              <Link
                href="#Service"
                className="text-xl px-[30px] py-[18px]  hover:text-brand-dark"
              >
                Service
              </Link>
              <Link
                href="#FAQ"
                className="text-xl px-[30px] py-[18px]  hover:text-brand-dark"
              >
                FAQ
              </Link>
              <Link
                href="/GetQuote"
                className="text-xl rounded-3xl bg-brand px-[30px] py-[18px] hover:text-white"
              >
                GET QUOTE
              </Link>
              <Link href="tel:0474724805" className="px-[30px] py-[18px]">
                <Phone className="w-8 h-8" />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
