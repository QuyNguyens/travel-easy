import Image from 'next/image';
import shape1 from '../../../../public/images/trip/shape_1.png.png';
import shape2 from '../../../../public/images/trip/shape_2.png.png';
import shape3 from '../../../../public/images/trip/shape_3.png.png';
import maskIcon from '../../../../public/images/article/Mask Group.png';
import TextMontez from '@/components/molicular/TextMontez';
import TextManrope from '@/components/molicular/TextManrope';
import ButtonIcon from '@/components/molicular/ButtonIcon';
import { ARTICLE } from '@/constants/text';
import ArticleItem from '@/components/molicular/ArticleItem';

const Article = () => {
  return (
    <div className="relative flex items-center justify-center bg-blue-600 py-10 md:py-20">
      <div className="hidden lg:block">
        <div className="absolute bottom-[13%] left-[5.5%]">
          <Image src={shape1} alt="" layout="responsive" className="!w-[15px] !h-[21px]" />
        </div>

        <div className="absolute bottom-[5%] left-[1.5%]">
          <Image src={shape2} alt="" layout="responsive" className="!w-[56px] !h-[78px]" />
        </div>

        <div className="absolute bottom-[20%] left-[1.5%]">
          <Image src={shape3} alt="" layout="responsive" className="!w-[35px] !h-[47px]" />
        </div>
      </div>
      <div className="w-full md:w-[80%] lg:w-[70%] flex flex-col gap-8">
        <div className="flex flex-col p-2 md:p-0">
          <TextMontez
            text="About Us Restaurant"
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-850"
          />
          <div className="flex justify-between">
            <TextManrope
              text="News & Articles From Tourm"
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-850"
            />

            <ButtonIcon
              text="see more articles"
              className="hidden md:flex text-gray-850 rounded-full border border-gray-850 w-[170px] md:w-[218px] h-[50px] md:h-14"
              image={maskIcon}
            />
            <ButtonIcon
              text="see more articles"
              className="flex md:hidden text-gray-850 rounded-full border border-gray-850 w-[170px] md:w-[218px] h-[50px] md:h-14"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
          {ARTICLE.map((ar, index) => (
            <ArticleItem
              key={index}
              avatar={ar.avatar}
              createdAt={ar.createdAt}
              time={ar.minute}
              description={ar.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
