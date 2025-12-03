import TextManrope from '@/components/molicular/TextManrope';
import TextMontez from '@/components/molicular/TextMontez';
import Image from 'next/image';
import background from '../../../../public/images/client/line2.png.png';
import shape from '../../../../public/images/gallery/shape.png';
import { BRAND, CLIENT_RATING } from '@/constants/text';
import RatingItem from '@/components/molicular/RatingItem';

const ClientRating = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-center w-full mt-5 md:mt-8 h-full md:min-h-screen">
      <div className="hidden lg:block">
        <div className="absolute top-[15%] left-[4%]">
          <Image src={shape} alt="" layout="responsive" className="!w-[85px] !h-[52px]" />
        </div>
      </div>
      <Image
        src={background}
        alt="Banner"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div className="relative lg:absolute flex flex-col items-center justify-center w-full">
        <TextMontez
          text="Testimonial"
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-850"
        />
        <TextManrope
          text="What Client Say About us"
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-850"
        />
        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between w-full gap-13 md:gap-6 px-2 mt-3 md:mt-5 lg:mt-10 flex-wrap lg:flex-nowrap">
          {CLIENT_RATING.map((c, index) => {
            return (
              <RatingItem
                key={index}
                index={index + 1}
                avatar={c.avatar}
                name={c.name}
                carer={c.carer}
                comment={c.comment}
                rating={c.rating}
              />
            );
          })}
        </div>
      </div>
      <div className="relative lg:absolute bottom-0 w-full md:w-[90%] lg:w-[92%] grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 mt-5 lg:mt-2">
        {BRAND.map((b, index) => {
          return (
            <Image
              key={index}
              src={b}
              alt=""
              width={150}
              height={150}
              className="hover:scale-105"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClientRating;
