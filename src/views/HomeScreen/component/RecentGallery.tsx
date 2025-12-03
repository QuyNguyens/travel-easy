import Image from 'next/image';
import background from '../../../../public/images/gallery/gallery.png';
import shape from '../../../../public/images/gallery/shape.png';
import image1 from '../../../../public/images/gallery/image1.png';
import image2 from '../../../../public/images/gallery/image2.png';
import image3 from '../../../../public/images/gallery/image3.png';
import image4 from '../../../../public/images/gallery/image4.png';
import image5 from '../../../../public/images/gallery/image5.png';
import image6 from '../../../../public/images/gallery/image6.png';
import image7 from '../../../../public/images/gallery/image7.png';

import TextMontez from '@/components/molicular/TextMontez';
import TextManrope from '@/components/molicular/TextManrope';

const RecentGallery = () => {
  return (
    <div className="relative flex justify-center w-full mt-8 md:mt-0 h-full md:min-h-screen">
      <div className="hidden lg:block">
        <div className="absolute top-[13%] left-[4%]">
          <Image src={shape} alt="" layout="responsive" className="!w-[85px] !h-[52px]" />
        </div>
      </div>
      <Image
        src={background}
        alt="Banner"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="relative md:absolute flex flex-col items-center justify-center w-full">
        <TextMontez
          text="Make Your Tour More Pleasure"
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-850"
        />
        <TextManrope
          text="Recent Gallery"
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-850"
        />
        <div
          className="w-full p-5
    flex flex-col items-center gap-5 mt-10

    md:flex-row md:flex-wrap md:justify-center md:gap-4

    lg:flex-row lg:justify-center lg:gap-3
  "
        >
          {/* 1 */}
          <Image
            src={image1}
            alt=""
            className=" h-auto w-full rounded-xl lg:w-[282px] lg:h-[284px] object-cover hover:scale-105 duration-300 md:w-auto"
          />

          {/* 3 + 2 */}
          <div className="flex flex-col gap-5 md:gap-3 w-full md:w-auto">
            <Image
              src={image3}
              alt=""
              className=" h-auto w-full rounded-xl lg:w-[282px] lg:h-[284px] object-cover hover:scale-105 duration-300 md:w-auto"
            />
            <Image
              src={image2}
              alt=""
              className=" h-auto w-full rounded-xl lg:w-[282px] lg:h-[284px] object-cover hover:scale-105 duration-300 md:w-auto"
            />
          </div>

          {/* 4 */}
          <Image
            src={image4}
            alt=""
            className=" h-auto w-full rounded-xl lg:w-[282px] lg:h-[455px] object-cover hover:scale-105 duration-300 md:w-auto"
          />

          {/* 6 + 5 */}
          <div className="flex flex-col gap-5 md:gap-3 w-full md:w-auto">
            <Image
              src={image6}
              alt=""
              className=" h-auto w-full rounded-xl lg:w-[282px] lg:h-[284px] object-cover hover:scale-105 duration-300 md:w-auto"
            />
            <Image
              src={image5}
              alt=""
              className=" h-auto w-full rounded-xl lg:w-[282px] lg:h-[284px] object-cover hover:scale-105 duration-300 md:w-auto"
            />
          </div>

          {/* 7 */}
          <Image
            src={image7}
            alt=""
            className=" h-auto w-full rounded-xl lg:w-[282px] lg:h-[284px] object-cover hover:scale-105 duration-300 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentGallery;
