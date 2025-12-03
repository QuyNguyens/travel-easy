'use client';

import Image from 'next/image';
import BannerImage from '../../../../public/images/banner/background1.png';
import { TOUR_CATEGORY } from '@/constants/text';
import TextMontez from '@/components/molicular/TextMontez';
import TextManrope from '@/components/molicular/TextManrope';

const TourCategory = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
      <Image
        src={BannerImage}
        alt="Banner"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col text-center">
          <TextMontez
            text="Wornderful Place For You"
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-850"
          />
          <TextManrope
            text="Tour Categories"
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-850"
          />
          <div className="w-full flex items-center justify-center py-6">
            <div className="flex gap-4">
              {TOUR_CATEGORY.map((c, index) => {
                const translateMap = ['45px', '15px', '0px', '15px', '45px'];
                const translateMapText = ['30px', '0px', '0px', '0', '30px'];
                const rotateMap = ['-7.09deg', '-3.55deg', '0deg', '3.55deg', '7.09deg'];

                return (
                  <div
                    key={index}
                    className={`
          flex flex-col items-center text-center cursor-pointer
          ${index === 0 || index === 4 ? 'hidden md:flex' : ''}
        `}
                  >
                    <div
                      className="overflow-hidden hover:scale-105 transition duration-300"
                      style={{
                        transform: `translateY(${translateMap[index]})`,
                      }}
                    >
                      <Image
                        src={c.image}
                        alt={c.name}
                        width={307}
                        height={305}
                        className="object-cover"
                      />
                    </div>

                    <div
                      style={{
                        transform: `rotate(${rotateMap[index]}) translateY(${translateMapText[index]})`,
                      }}
                      className="mt-3"
                    >
                      <TextManrope
                        text={c.name}
                        className="font-semibold block text-base md:text-xl lg:text-2xl text-gray-850"
                      />
                      <span className="text-[10px] md:text-[12px] lg:text-sm block font-semibold text-gray-600">
                        {c.next}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCategory;
