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
      icon: <UserCheck />,
      alt: 'Icon 1',
      title: 'Trusted & Verified Cleaners',
      description: 'Professional cleaners you can trust in your home',
    },
    {
      id: 2,
      icon: <Alarm />,
      alt: 'Icon 2',
      title: 'Reliable & Punctual Service',
      description: 'We value your time and always arrive when promised',
    },
    {
      id: 3,
      icon: <ShieldCheck />,
      alt: 'Icon 3',
      title: 'Fully Insured & Guaranteed',
      description: 'Your property is protected with our comprehensive coverage',
    },
    {
      id: 4,
      icon: <SprayBottle />,
      alt: 'Icon 4',
      title: 'Eco-Friendly Cleaning',
      description: 'Safe products for your family,pets and our environment',
    },
  ];
  return (
    <div>
      <section>
        <h2 className="text-4xl font-semibold py-4">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.id}>
              <div>
                <div>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
