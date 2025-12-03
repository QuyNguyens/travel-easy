import { Divider } from '@heroui/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import TextManrope from './TextManrope';
import ButtonIcon from './ButtonIcon';
import maskIcon from '../../../public/images/article/Mask Group.png';

type ArticleItemProps = {
  avatar: StaticImageData;
  createdAt: string;
  time: string;
  description: string;
};

const ArticleItem = ({ avatar, createdAt, time, description }: ArticleItemProps) => {
  return (
    <div className="flex flex-col gap-2 overflow-hidden rounded-2xl w-full">
      {/* Image */}
      <div className="rounded-2xl overflow-hidden w-full">
        <Image
          src={avatar}
          alt=""
          className="w-full h-auto object-cover"
          width={424}
          height={350}
        />
      </div>

      {/* Meta */}
      <div className="flex gap-2 mt-2 items-center">
        <span className="text-xs md:text-sm text-gray-500">{createdAt}</span>
        <Divider className="bg-gray-500 h-3 md:h-4 w-[1px]" orientation="vertical" />
        <span className="text-xs md:text-sm text-gray-500">{time}</span>
      </div>

      {/* Description */}
      <TextManrope
        text={description}
        className="
          font-semibold
          text-2xl
          text-gray-850 
          line-clamp-2
          w-full
        "
      />

      {/* Button */}
      <ButtonIcon
        text="Read More"
        className="
          text-gray-850 rounded-full border border-gray-850
          w-[130px] md:w-[156px]
          h-[40px] md:h-12
          mt-3 md:mt-4
        "
        image={maskIcon}
      />
    </div>
  );
};

export default ArticleItem;
