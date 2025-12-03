import React from 'react';
import TextManrope from './TextManrope';

type StatisticItemProps = {
  amount: string;
  text: string;
  position: number; // góc độ - ví dụ 45
};

const StatisticItem = ({ amount, text, position }: StatisticItemProps) => {
  return (
    <div
      className="
      relative flex items-center justify-center 
      border border-blue-header-btn rounded-full
      w-56 h-56             /* mobile size */
      md:w-64 md:h-64       /* tablet */
      lg:w-72 lg:h-72       /* desktop */
      xl:w-78 xl:h-78       /* large desktop */
    "
    >
      {/* Dot nhỏ theo góc */}
      <div
        className="absolute w-5 h-5 bg-blue-600 p-3.5 rounded-full"
        style={{
          top: '50%',
          right: 'calc(-12px + 0.5px)', // 10px = nửa chấm, 0.5px = nửa border
          transformOrigin: 'center',
          transform: `translateY(-50%) rotate(${position}deg)`,
        }}
      >
        <div className="bg-blue-header-btn w-2.5 h-2.5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Vòng tròn trong cách 16px mọi kích thước */}
      <div
        className="
        absolute bg-blue-600 rounded-full 
        w-[calc(100%-48px)] h-[calc(100%-48px)]
        flex flex-col items-center justify-center
      "
      >
        <TextManrope
          text={amount}
          className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-850"
        />

        <TextManrope
          text={text}
          className="font-medium text-base md:text-xl xl:text-2xl text-gray-850"
        />
      </div>
    </div>
  );
};

export default StatisticItem;
