import { Avatar } from '@heroui/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import TextManrope from './TextManrope';
import { Star } from 'lucide-react';
import icon99 from '../../../public/images/client/testi-quote.svg.svg';
import iconRed99 from '../../../public/images/client/testi-quote-red.svg.svg';
type RatingItemProps = {
  index: number; // ⭐ thêm
  rating: number;
  avatar: StaticImageData;
  carer: string;
  comment: string;
  name: string;
};

const RatingItem = ({ index, rating, avatar, carer, comment, name }: RatingItemProps) => {
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={` relative
        flex flex-col gap-4 bg-blue-600 rounded-3xl w-full lg:w-[530px] xl:w-[696px] px-5 py-10
        transition-all duration-300
        ${isOdd ? 'translate-y-[0%] lg:translate-y-[30%]' : ''}
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="w-19 h-19 text-large" src={avatar.src} />
          <div className="flex flex-col">
            <TextManrope
              text={name}
              className="text-base md:text-xl lg:text-2xl text-gray-850 font-semibold"
            />
            <span className="text-sm md:text-base text-gray-600">{carer}</span>
          </div>
        </div>

        {/* Stars */}
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map(i => {
            const filled = i <= rating;

            return (
              <Star
                key={i}
                size={14}
                className={filled ? 'text-orange-500' : 'text-gray-300'}
                {...(filled
                  ? { fill: 'currentColor', stroke: 'none' }
                  : { fill: 'none', stroke: 'currentColor' })}
              />
            );
          })}
        </div>
      </div>

      <p className="font-medium text-gray-850 text-base md:text-xl m-3">{comment}</p>
      <div
        className={`absolute bottom-0 left-1/2 
    -translate-x-1/2 translate-y-1/2
    rounded-full w-[78px] h-[78px] 
    flex items-center justify-center 
    ${isOdd ? 'bg-white' : 'bg-blue-header-btn'}`}
      >
        <Image src={isOdd ? icon99 : iconRed99} alt="" width={32} height={32} />
      </div>
    </div>
  );
};

export default RatingItem;
