import TextManrope from '@/components/molicular/TextManrope';
import TextMontez from '@/components/molicular/TextMontez';
import Image from 'next/image';
import background from '../../../../public/images/tour/Background.png';
import { TOUR_GUIDE } from '@/constants/text';
import TourAvatar from '@/components/molicular/TourAvatar';

const TourGuide = () => {
  return (
    <div className="relative flex justify-center w-full py-10">
      {/* Background image */}
      <Image src={background} alt="Banner" fill className="object-cover object-center z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center py-10">
        <TextMontez
          text="Meet with Guide"
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-850"
        />
        <TextManrope
          text="Tour Guide"
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-850"
        />
        <div className="flex flex-col items-center justify-center lg:flex-row gap-20 md:gap-4 mt-25 md:mt-40">
          {TOUR_GUIDE.map((t, index) => {
            return <TourAvatar key={index} avatar={t.avatar} name={t.name} carer={t.carer} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TourGuide;
