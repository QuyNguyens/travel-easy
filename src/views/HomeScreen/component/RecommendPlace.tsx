import Image from 'next/image';
import background from '../../../../public/images/recommend/Background.png';
import TextMontez from '@/components/molicular/TextMontez';
import TextManrope from '@/components/molicular/TextManrope';
import { RECOMMEND_PLACE } from '@/constants/text';
import ProductItem from '@/components/molicular/ProductItem';
const RecommendPlace = () => {
  return (
    <div className="relative flex justify-center w-full mt-5 md:mt-20">
      {/* Background image */}
      <Image src={background} alt="Banner" fill className="object-cover object-center z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center py-10">
        <TextMontez
          text="Best Recommended Places"
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-850"
        />
        <TextManrope
          text="Popular Destination we offer for all"
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-850"
        />
        <p className="text-gray-850 text-[18px] w-3/4 md:w-3/5 lg:w-1/2 text-center mt-2 md:mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-7 mt-2 md:mt-5 p-2 lg:p-0">
          {RECOMMEND_PLACE.map((r, index) => {
            return (
              <ProductItem
                key={index}
                name={r.name}
                place={r.place}
                price={r.price}
                image={r.image}
                day={r.day}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecommendPlace;
