import GetQuoteSection from '@/components/home/GetQuoteSection';
import ServiceSection from '@/components/home/ServicesSection';

export default function Page() {
  return (
    <>
      <GetQuoteSection />
      <div className="sm:max-w-sm mx-auto md:max-w-md lg:max-w-lg px-6 space-y-4 ">
        <ServiceSection />
      </div>
    </>
  );
}
