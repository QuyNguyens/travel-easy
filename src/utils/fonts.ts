import { Montez, Manrope } from 'next/font/google';

const montez = Montez({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export { montez, manrope };
