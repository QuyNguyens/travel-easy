'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ButtonIconProps {
  text: string;
  image?: StaticImageData; // optional nếu muốn icon
  className?: string; // optional để override hoặc thêm class
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ text, image, className = '' }) => {
  return (
    <button
      className={`
        flex items-center justify-center !gap-2
        font-medium text-base
        hover:opacity-90 transition
        ${className}
      `}
    >
      <span>{text}</span>
      {image && (
        <Image
          src={image}
          alt=""
          width={20}
          height={20}
          className="!w-5 !h-5 !min-w-[20px] !min-h-[20px] object-contain inline-block"
        />
      )}
    </button>
  );
};

export default ButtonIcon;
