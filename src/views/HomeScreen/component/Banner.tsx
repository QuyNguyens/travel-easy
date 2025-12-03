'use client';
import Image from 'next/image';
import BannerImage from '../../../../public/images/headers/Banner.png';
import ButtonIcon from '@/components/molicular/ButtonIcon';
import FilterLocation from './FilterLocation';
import TextMontez from '@/components/molicular/TextMontez';
import TextManrope from '@/components/molicular/TextManrope';
import ArrowRight from '../../../../public/icons/headers/arrow-right.svg';

const Banner = () => {
  return (
    <div className="relative w-full h-[80vh] lg:h-[90vh] mt-2 md:mt-0">
      {/* Background image */}
      <Image
        src={BannerImage}
        alt="Banner"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="flex flex-col ml-3 md:ml-0">
          <TextMontez
            text="Get unforgetable pleasure with us"
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white"
          />
          <TextManrope
            text="Explore beauty of the whole world"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold w-[80%] md:w-[55%]"
          />
          <div className="flex gap-3 mt-8">
            <ButtonIcon
              image={ArrowRight}
              text="Explore Tours"
              className="bg-blue-header-btn text-white w-[205px] h-[63px] rounded-full"
            />
            <ButtonIcon
              image={ArrowRight}
              text="Our Services"
              className="text-white w-[205px] h-[63px] rounded-full border border-white"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[75%] z-10">
        <FilterLocation />
      </div>
    </div>
  );
};

export default Banner;
