'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

type TextIconProps = {
  icon: StaticImageData;
  text: string;
  className?: string;
};

const TextIcon = ({ icon, text, className }: TextIconProps) => {
  return (
    <div className={`${className} gap-1 font-medium text-sm items-center`}>
      <Image className="w-4 h-4" src={icon} alt="" />
      <span>{text}</span>
    </div>
  );
};

export default TextIcon;
