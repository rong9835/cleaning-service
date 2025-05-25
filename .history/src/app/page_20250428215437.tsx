import GetQuoteSection from '@/components/home/GetQuoteSection';
import ServiceSection from '@/components/home/ServicesSection';

export default function Page() {
  return (
    <>
      <GetQuoteSection />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 space-y-4 sm:space-y-6 md:space-y-8">
        <ServiceSection />
      </div>
    </>
  );
}
