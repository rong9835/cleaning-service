'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function ServiceSection() {
  const slides = [
    {
      id: 1,
      src: '/images/services/home.jpg',
      alt: 'Slide 1',
      title: 'Home cleaning',
    },
    {
      id: 2,
      src: '/images/services/office.jpg',
      alt: 'Slide 2',
      title: 'Office cleaning',
      position: 'bottom',
    },
    {
      id: 3,
      src: '/images/services/window.jpg',
      alt: 'Slide 3',
      title: 'Window cleaning',
    },
    {
      id: 4,
      src: '/images/services/strata.jpg',
      alt: 'Slide 4',
      title: 'Strata cleaning',
    },
    {
      id: 5,
      src: '/images/services/deep.jpg',
      alt: 'Slide 5',
      title: 'Deep cleaning',
    },
    {
      id: 6,
      src: '/images/services/regular.jpg',
      alt: 'Slide 6',
      title: 'Regular cleaning',
      position: 'bottom',
    },
  ];

  return (
    <section>
      <div className="max-w-[360px] mx-auto">
        <h2 className="text-4xl font-semibold py-4">Services</h2>
        {/* 모바일에서만 보이는 섹션 */}
        <div className="sm:hidden w-full">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="bg-gray rounded-3xl px-11 pt-8 pb-4"
              >
                <div className="relative h-[200px] w-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: slide.position || 'center' }}
                  />
                </div>
                <h3 className="text-3xl mt-1 text-center whitespace-nowrap">
                  {slide.title}
                </h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 데스크탑에서만 보이는 섹션 */}
      <div className="hidden sm:grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
        {slides.map((slide) => (
          <div key={slide.id} className="bg-gray rounded-3xl px-11 py-8">
            <div className="relative h-[200px] w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                style={{ objectPosition: slide.position || 'center' }}
              />
            </div>
            <h3 className="text-3xl mt-1 text-center whitespace-nowrap">
              {slide.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
