import TextManrope from '@/components/molicular/TextManrope';
import TextMontez from '@/components/molicular/TextMontez';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './destination.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { POPULAR_DESTINATION } from '@/constants/text';
import ImageDestination from '@/components/molicular/ImageDestination';

const PopularDestination = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <TextMontez
        text="Top Destination"
        className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-850"
      />
      <TextManrope
        text="Popular Destination"
        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-850"
      />
      <div className="container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {POPULAR_DESTINATION.map((item, index) => (
            <SwiperSlide key={index}>
              <ImageDestination image={item.image} text={item.title} amount={item.amount} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularDestination;
