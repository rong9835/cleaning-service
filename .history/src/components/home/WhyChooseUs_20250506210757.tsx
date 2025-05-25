'use client';
import {
  UserCheck,
  Alarm,
  ShieldCheck,
  SprayBottle,
} from 'phosphor-icons/react';

export default function WhyChooseUs() {
  const items = [
    {
      id: 1,
      icon: <UserCheck size={32} weight="fill" className="text-blue-500" />,
      alt: '',
      title: 'Trusted & Verified Cleaners',
      description: 'Professional cleaners you can trust in your home',
    },
  ];
  return <div>WhyChooseUs</div>;
}
