import { manrope } from '@/utils/fonts';

type TextManropeProps = {
  text: string;
  className: string;
};

const TextManrope = ({ text, className }: TextManropeProps) => {
  return <span className={`${className} ${manrope.className}`}>{text}</span>;
};

export default TextManrope;
