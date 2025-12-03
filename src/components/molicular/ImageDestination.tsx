import React from 'react';
import ButtonIcon from './ButtonIcon';
import ArrowRight from '../../../public/icons/headers/arrow-right.svg';
import TextManrope from './TextManrope';
import Image, { StaticImageData } from 'next/image';

type ImageDestinationProps = {
  image: StaticImageData;
  text: string;
  amount: number;
};

const ImageDestination = ({ image, text, amount }: ImageDestinationProps) => {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      {/* Image */}
      <Image src={image} alt="slide_image" className="w-full h-full object-cover" />

      {/* Overlay màu đen bán trong suốt */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text & Button */}
      <div className="absolute bottom-7 left-0 right-0 px-10 flex items-center justify-between">
        <div className="flex flex-col text-white gap-1">
          <TextManrope text={text} className="text-base md:text-xl lg:text-2xl font-semibold" />
          <span className="text-sm md:text-base opacity-80">{amount} Listing</span>
        </div>

        <ButtonIcon
          text="View All"
          image={ArrowRight}
          className="text-white w-[120px] md:w-[154px] h-[48px] md:h-[51px] rounded-full border border-white"
        />
      </div>
    </div>
  );
};

export default ImageDestination;
