import Image from 'next/image';
import shape1 from '../../../../public/images/trip/shape_1.png.png';
import shape2 from '../../../../public/images/trip/shape_2.png.png';
import shape3 from '../../../../public/images/trip/shape_3.png.png';
import image1 from '../../../../public/images/trip/about_1_1.jpg.png';
import image2 from '../../../../public/images/trip/about_1_2.jpg.png';
import image3 from '../../../../public/images/trip/about_1_3.jpg.png';
import map3 from '../../../../public/images/trip/map3.svg.svg';
import guide from '../../../../public/images/trip/guide.svg.svg';
import aboutSlide from '../../../../public/images/trip/about-slide-img.png.png';
import ArrowRight from '../../../../public/icons/headers/arrow-right.svg';
import TextMontez from '@/components/molicular/TextMontez';
import TextManrope from '@/components/molicular/TextManrope';
import { Button } from '@heroui/react';
import ButtonIcon from '@/components/molicular/ButtonIcon';

const TripWithUs = () => {
  return (
    <div className="relative flex justify-center">
      <div className="hidden lg:block">
        <div className="absolute top-[10%] left-[2%]">
          <Image src={shape1} alt="" layout="responsive" className="!w-[15px] !h-[21px]" />
        </div>

        <div className="absolute top-[15%] left-[2.5%]">
          <Image src={shape2} alt="" layout="responsive" className="!w-[56px] !h-[78px]" />
        </div>

        <div className="absolute top-[12%] left-[7%]">
          <Image src={shape3} alt="" layout="responsive" className="!w-[35px] !h-[47px]" />
        </div>
      </div>
      <div className="w-[95%] md:w-[90%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] flex flex-col lg:flex-row gap-10">
        <div className="flex gap-5 w-fit order-2 lg:order-1">
          <Image src={image1} alt="" width={312} height={630} />
          <div className="flex flex-col gap-5">
            <Image src={image2} alt="" width={312} height={315} />
            <Image src={image3} alt="" width={312} height={315} />
          </div>
        </div>
        <div className="flex flex-col flex-1 order-1 lg:order-2">
          <TextMontez
            text="Let’s Go Together"
            className="text-2xl lg:text-3xl xl:text-4xl text-gray-850 text-center md:text-left"
          />
          <TextManrope
            text="Plan Your Trip With us"
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-850 w-full 2xl:w-[50%] text-center md:text-left"
          />
          <p className="text-[18px] text-gray-600 w-full 2xl:w-[70%] mt-7">
            There are many variations of passages of available but the majority have suffered
            alteration in some form, by injected hum randomised words which don’t look even
            slightly.
          </p>
          <div className="flex gap-3 mt-7">
            <Button
              isIconOnly
              className="rounded-full bg-blue-header-btn h-18 w-18 flex items-center justify-center"
            >
              <Image src={map3} alt="map" width={32} height={32} />
            </Button>

            <div className="flex flex-col gap-3 flex-1">
              <TextManrope
                text="Exclusive Trip"
                className="font-semibold text-gray-850 text-[18px] md:text-xl lg:text-2xl"
              />
              <p className="text-base text-gray-600 w-full 2xl:w-[60%]">
                There are many variations of passages of available but the majority.
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-5">
            <Button
              isIconOnly
              className="rounded-full bg-blue-header-btn h-18 w-18 flex items-center justify-center"
            >
              <Image src={guide} alt="map" width={32} height={32} />
            </Button>

            <div className="flex flex-col gap-3 flex-1">
              <TextManrope
                text="Professional Guide"
                className="font-semibold text-gray-850 text-[18px] md:text-xl lg:text-2xl"
              />
              <p className="text-base text-gray-600 w-full 2xl:w-[60%]">
                There are many variations of passages of available but the majority.
              </p>
            </div>
          </div>
          <ButtonIcon
            text="Learn More"
            image={ArrowRight}
            className="bg-header-btn text-white w-[150px] lg:w-[189px] h-[55px] lg:h-[63.5px] rounded-full mt-7"
          />
        </div>
      </div>
      <div className="absolute flex justify-center right-10 -bottom-5">
        <div className="hidden 2xl:block">
          <div className="w-99 h-99 bg-blue-600 rounded-full relative">
            <Image
              src={aboutSlide}
              alt=""
              width={217}
              height={546}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripWithUs;
