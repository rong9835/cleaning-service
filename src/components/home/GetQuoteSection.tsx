import Image from 'next/image';

export default function GetQuoteSection() {
  return (
    <section className="hero w-full">
      <div className="relative h-[600px]">
        <Image src="/images/main.jpg" alt="Hero image" fill />
      </div>
    </section>
  );
}
