import Image from 'next/image';
import GetQuoteForm from '@/components/ui/GetQuoteForm';

export default function GetQuoteSection() {
  return (
    <section className="hero w-full">
      <div className="relative h-[600px]">
        <Image
          src="/images/main.jpg"
          alt="Hero image"
          fill
          className="object-cover brightness-90"
          priority
          quality={90}
        />
        <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-16 px-4">
          <div className="w-full max-w-md lg:w-96 lg:max-w-none">
            <GetQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
