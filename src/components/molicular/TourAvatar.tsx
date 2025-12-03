import Image, { StaticImageData } from 'next/image';
import React from 'react';
import TextManrope from './TextManrope';
import SocialDisplay from './SocialDisplay';
type TourAvatarProps = {
  avatar: StaticImageData;
  name: string;
  carer: string;
};

const TourAvatar = ({ avatar, name, carer }: TourAvatarProps) => {
  return (
    <div
      className="
        relative bg-white rounded-xl flex flex-col items-center 
        p-4 w-78 h-[290px]
        pt-16 md:pt-20  /* chừa chỗ cho avatar không đè chữ */
      "
    >
      {/* Avatar — responsive offset */}
      <Image
        src={avatar}
        alt=""
        width={200}
        height={200}
        className="
          absolute left-1/2 -translate-x-1/2 
          top-0 rounded-full border-white border-4
          -translate-y-1/3 md:-translate-y-1/2 /* mobile nhô ít, desktop nhô nhiều */
          z-10
        "
      />

      {/* Khối màu xanh */}
      <div className="rounded-xl bg-blue-600 flex flex-col items-center justify-center w-full p-4 gap-1 mt-auto">
        <TextManrope
          text={name}
          className="text-base md:text-xl lg:text-2xl font-semibold text-gray-850"
        />

        <span className="text-base text-gray-850">{carer}</span>

        <SocialDisplay isFullSocial={false} className="gap-1" />
      </div>
    </div>
  );
};

export default TourAvatar;
