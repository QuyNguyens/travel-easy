import Image, { StaticImageData } from 'next/image';
import React from 'react';
import point from '../../../public/images/recommend/point.svg';
import watch from '../../../public/images/recommend/watch.svg';
import arrowRight from '../../../public/images/recommend/arrow.svg.png';
import ButtonIcon from './ButtonIcon';
import TextManrope from './TextManrope';

type ProductItemProps = {
  image: StaticImageData;
  name: string;
  place: string;
  price: number;
  day: number;
};

const ProductItem = ({ image, name, place, price, day }: ProductItemProps) => {
  return (
    <div className="group flex flex-col border border-stroke-200 rounded-2xl overflow-hidden">
      <div className="overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt=""
          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 md:gap-8 bg-white">
        <div className="flex flex-col gap-1">
          <TextManrope text={name} className="text-gray-900 text-[18px] font-semibold truncate" />
          <div className="flex text-gray-600 text-base">
            <Image src={point} alt="" width={16} height={16} />
            <span>{place}</span>
          </div>
          <p className="text-gray-900 text-base md:text-xl lg:text-2xl font-medium">
            ${Number(price).toFixed(2)}/
            <span className="text-gray-600 font-normal text-sm md:text-base lg:text-[18px]">
              Person
            </span>
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-gray-850 text-sm md:text-base">
            <Image src={watch} alt="" width={16} height={16} />
            <span>{day} Days</span>
          </div>

          <ButtonIcon
            text="Book Now"
            image={arrowRight}
            className="bg-white hidden md:flex border border-border-gray-300 rounded-full text-gray-850 w-[100px] md:w-[151px] h-[44px] md:h-[48px] hover:bg-gray-100"
          />
          <ButtonIcon
            text="Book Now"
            className="bg-white flex md:hidden border border-border-gray-300 rounded-full text-gray-850 w-[100px] md:w-[151px] h-[44px] md:h-[48px] hover:bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
