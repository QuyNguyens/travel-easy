import Image, { StaticImageData } from 'next/image';

type GetInTouchProps = {
  icon: StaticImageData;
  text1: string;
  text2?: string;
};

const GetInTouch = ({ icon, text1, text2 }: GetInTouchProps) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
        <Image src={icon} alt="" width={18} height={18} />
      </div>
      <div className="flex flex-col flex-1">
        <span className="text-gray-600">{text1}</span>
        {text2 && <span className="text-gray-600">{text2}</span>}
      </div>
    </div>
  );
};

export default GetInTouch;
