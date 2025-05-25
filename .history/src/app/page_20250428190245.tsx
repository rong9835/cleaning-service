import GetQuoteSection from '@/components/home/GetQuoteSection';
import ServiceSection from '@/components/home/ServicesSection';

export default function Page() {
  return (
    <>
      <GetQuoteSection />
      <div className="px-6 space-y-4 md:px-10 lg:px-20 xl:px-30">
        <ServiceSection />
      </div>
    </>
  );
}
