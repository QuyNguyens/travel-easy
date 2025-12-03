import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import InitialLayout from '@/components/layouts/initialLayout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Trang chủ',
  description:
    'Đặt lịch và khám phá những địa điểm du lịch hấp dẫn, trải nghiệm chuyến đi dễ dàng và tiện lợi cùng chúng tôi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <InitialLayout>{children}</InitialLayout>
      </body>
    </html>
  );
}
