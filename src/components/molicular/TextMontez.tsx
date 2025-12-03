import { montez } from '@/utils/fonts';

type TextMontezProps = {
  text: string;
  className: string;
};

const TextMontez = ({ text, className }: TextMontezProps) => {
  return <span className={`${className} ${montez.className}`}>{text}</span>;
};

export default TextMontez;
