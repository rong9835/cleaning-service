import Image from 'next/image';
import GetQuoteForm from '@/components/ui/GetQuoteForm';

export default function GetQuoteSection() {
  return (
    <section className="hero w-full">
      <div className="relative h-[700px] lg:h-[600px]">
        <Image
          src="/images/main.jpg"
          alt="Hero image"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-center lg:gap-24 px-4 lg:px-24 xl:px-32 p-5
         lg:pt-0"
        >
          <div className="text-white max-w-xl mb-8 lg:mb-0 text-center lg:text-left px-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight">
              Experience the Difference
              <br /> of a Professional Clean
            </h1>
          </div>
          <div className="w-full max-w-md lg:w-96 lg:max-w-none">
            <GetQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
