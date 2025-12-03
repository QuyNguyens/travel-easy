import Image from 'next/image';
import shape1 from '../../../../public/images/trip/shape_1.png.png';
import shape2 from '../../../../public/images/trip/shape_2.png.png';
import shape3 from '../../../../public/images/trip/shape_3.png.png';
import shape5 from '../../../../public/images/recommend/shape_5.png.png';
import shape6 from '../../../../public/images/recommend/shape_6.png.png';
import { STATISTIC_TRAVEL } from '@/constants/text';
import StatisticItem from '@/components/molicular/StatisticItem';

const StatisticTravel = () => {
  return (
    <div className="relative flex justify-center pb-10 md:pb-25">
      <div className="hidden lg:block">
        <div className="absolute -top-[25%] left-[1%]">
          <Image src={shape1} alt="" layout="responsive" className="!w-[15px] !h-[21px]" />
        </div>

        <div className="absolute -top-[15%] left-[2.5%]">
          <Image src={shape2} alt="" layout="responsive" className="!w-[56px] !h-[78px]" />
        </div>

        <div className="absolute -top-[20%] left-[6%]">
          <Image src={shape3} alt="" layout="responsive" className="!w-[35px] !h-[47px]" />
        </div>

        <div className="absolute -top-[35%] right-[2%]">
          <Image src={shape5} alt="" layout="responsive" className="!w-[52px] !h-[60px]" />
        </div>

        <div className="absolute bottom-0 left-0">
          <Image src={shape6} alt="" layout="responsive" className="!w-[177px] !h-[111px]" />
        </div>
      </div>
      <div className="w-[95%] md:w-[90%] xl:w-[85%] 2xl:w-[80%] flex flex-col items-center justify-center lg:flex-row gap-10">
        {STATISTIC_TRAVEL.map((s, index) => {
          const offsetClass =
            index === 0 || index === 2
              ? 'lg:translate-y-[60px]' // lg+ mới zigzag
              : 'lg:translate-y-[-60px]';

          return (
            <div key={index} className={`transition-all duration-300 ${offsetClass}`}>
              <StatisticItem amount={s.amount} text={s.text} position={s.position} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatisticTravel;
