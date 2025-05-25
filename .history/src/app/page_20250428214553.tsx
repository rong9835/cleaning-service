import GetQuoteSection from '@/components/home/GetQuoteSection';
import ServiceSection from '@/components/home/ServicesSection';

export default function Page() {
  return (
    <>
      <GetQuoteSection />
      <div className="max-w-sm mx-auto px-6 space-y-4 ">
        <ServiceSection />
      </div>
    </>
  );
}
