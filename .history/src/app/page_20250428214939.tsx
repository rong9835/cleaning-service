import GetQuoteSection from '@/components/home/GetQuoteSection';
import ServiceSection from '@/components/home/ServicesSection';

export default function Page() {
  return (
    <>
      <GetQuoteSection />
      <div className="max-w-7xl mx-auto space-y-4 md:px-5 lg:px-20">
        <ServiceSection />
      </div>
    </>
  );
}
