'use client';
import { PhoneCall, Envelope, User, Alarm } from '@phosphor-icons/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#747474] text-white">
      <div className="container mx-auto max-w-sm p-6 md:max-w-md lg:px-40">
        <div className="flex flex-col md:flex-row md:justify-between gap-3">
          {/* 왼쪽 */}
          <div className="space-y-3">
            {/* 전화번호*/}
            <div className="flex items-start gap-3">
              <PhoneCall size={48} className="flex-shrink-0" />
              <div>
                <p>Call</p>
                <Link href="tel:0474724805" className="hover:underline">
                  047-472-4805
                </Link>
              </div>
            </div>
            {/* 사업자등록번호 */}
            <div className="flex items-start gap-3">
              <User size={48} className="flex-shrink-0" />
              <div>
                <p>ABN</p>
                <p>50 183 002 680</p>
              </div>
            </div>
          </div>
          {/* 오른쪽 */}
          <div className="space-y-3">
            {/* 이메일 */}
            <div className="flex items-start gap-3">
              <Envelope size={48} className="flex-shrink-0" />
              <div>
                <p>E-mail</p>
                <Link
                  href="mailto:jayandannacleaning@gmail.com"
                  className="hover:underline"
                >
                  jayandannacleaning@gmail.com
                </Link>
              </div>
            </div>

            {/* 영업시간 */}
            <div className="flex items-start gap-3">
              <Alarm size={48} className="flex-shrink-0" />
              <div>
                <p>Business Hours</p>
                <p className="whitespace-nowrap">
                  Mon - Fri : 9:00 AM - 5:00 PM
                </p>
                <p>Weekend : Closed</p>
              </div>
            </div>
          </div>
        </div>
        {/* 저작권,이용약관,개인정보 링크처리 */}
        <div className="pt-3 mt-3 border-t border-white flex flex-wrap gap-2">
          <span>Copyright © 2025 All Rights Reserved</span>
          <span className="hidden sm:inline">-</span>
          <Link href="/terms" className="hover:underline">
            Terms and Conditions
          </Link>
          <span className="hidden sm:inline">-</span>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
