import { SOCIAL_ICON } from '@/constants/text';
import Image from 'next/image';
import React from 'react';

type SocialDisplayProps = {
  isFullSocial: boolean;
  className: string;
};

const SocialDisplay = ({ isFullSocial, className }: SocialDisplayProps) => {
  return (
    <div className={`flex mt-2 ${className}`}>
      {SOCIAL_ICON.map((s, index) => {
        return isFullSocial ? (
          <div
            key={index}
            className={`border border-blue-header-btn rounded-full w-8 h-8 flex items-center justify-center`}
          >
            <Image src={s.icon} alt="" width={16} className="!h-4" />
          </div>
        ) : (
          s.isDisplay && (
            <div
              key={index}
              className="border border-blue-header-btn rounded-full w-8 h-8 flex items-center justify-center"
            >
              <Image src={s.icon} alt="" width={16} className="!h-4" />
            </div>
          )
        );
      })}
    </div>
  );
};

export default SocialDisplay;
