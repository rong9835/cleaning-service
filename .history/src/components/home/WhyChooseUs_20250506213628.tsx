'use client';
import {
  UserCheck,
  Alarm,
  ShieldCheck,
  SprayBottle,
} from '@phosphor-icons/react';

export default function WhyChooseUs() {
  const items = [
    {
      id: 1,
      icon: <UserCheck size={32} weight="fill" className="text-blue-500" />,
      alt: 'Icon 1',
      title: 'Trusted & Verified Cleaners',
      description: 'Professional cleaners you can trust in your home',
    },
    {
      id: 2,
      icon: <Alarm size={32} weight="fill" className="text-blue-500" />,
      alt: 'Icon 2',
      title: 'Reliable & Punctual Service',
      description: 'We value your time and always arrive when promised',
    },
    {
      id: 3,
      icon: <ShieldCheck size={32} weight="fill" className="text-blue-500" />,
      alt: 'Icon 3',
      title: 'Fully Insured & Guaranteed',
      description: 'Your property is protected with our comprehensive coverage',
    },
    {
      id: 4,
      icon: <SprayBottle size={32} weight="fill" className="text-blue-500" />,
      alt: 'Icon 4',
      title: 'Eco-Friendly Cleaning',
      description: 'Your property is protected with our comprehensive coverage',
    },
  ];
  return <div>WhyChooseUs</div>;
}
