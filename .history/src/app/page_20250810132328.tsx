import GetQuoteSection from '@/components/home/GetQuoteSection';
import ServiceSection from '@/components/home/ServicesSection';
import ServiceAreasSection from '@/components/home/ServiceAreasSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';

export default function Page() {
  return (
    <div className="w-full">
      <GetQuoteSection />

      <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceSection />
        <WhyChooseUs />
      </div>

      <ServiceAreasSection />
    </div>
  );
}
