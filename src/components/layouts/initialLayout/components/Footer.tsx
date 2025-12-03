'use client';
import ButtonIcon from '@/components/molicular/ButtonIcon';
import TextManrope from '@/components/molicular/TextManrope';
import plane from '../../../../../public/images/footer/plane.svg.svg';
import Background from '../../../../../public/images/footer/Background.png';
import Image from 'next/image';
import Logo from '../../../../../public/images/footer/logo.svg.png';
import Card from '../../../../../public/images/footer/cards.png.png';
import SocialDisplay from '@/components/molicular/SocialDisplay';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { GET_IN_TOUCH, POST_INS } from '@/constants/text';
import GetInTouch from '@/components/molicular/GetInTouch';

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-2">
      <div className="w-full md:w-[80%] lg:w-[70%] bg-white py-12 md:py-18 lg:py-25 flex flex-col gap-5">
        <div
          className="
            flex flex-col 
            md:flex-row 
            md:justify-between 
            md:items-center 
            pb-10 
            border-b border-b-gray-200 
            gap-5 md:gap-0
          "
        >
          {/* Title */}
          <TextManrope
            text="Get updated the latest newsletter"
            className="
              text-2xl md:text-3xl lg:text-4xl 
              text-gray-850 font-semibold
              w-full md:w-[40%]
              text-center md:text-left
            "
          />

          {/* Form */}
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <input
              className="
                border border-gray-850 
                px-5 rounded-full 
                w-full md:w-[300px] lg:w-[350px] 
                h-[52px] md:h-[62px]
              "
              type="email"
              placeholder="Enter your email"
            />
            <ButtonIcon
              text="Subscribe Now"
              className="
              text-white 
                w-full md:w-[187px] 
                h-[52px] md:h-[64px] 
                bg-gray-850 rounded-full
              "
              image={plane}
            />
          </div>
        </div>

        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-4 
            gap-10
            mt-10
          "
        >
          {/* 1. Logo + mô tả */}
          <div className="flex flex-col gap-4 lg:w-[260px]">
            <Image src={Logo} alt="" />
            <p className="text-gray-666">
              Rapidiously myocardinate cross-platform intellectual capital model. Appropriately
              create interactive infrastructures.
            </p>
            <SocialDisplay isFullSocial={true} className="gap-2" />
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col gap-4">
            <TextManrope
              text="Quick Links"
              className="text-xl md:text-2xl lg:text-3xl text-gray-850 font-semibold"
            />
            <div className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about-us', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/tour-guide', label: 'Tour Guide' },
                { href: '/contact-us', label: 'Contact Us' },
              ].map((link, idx) => (
                <div className="flex gap-2 items-center" key={idx}>
                  <ChevronRight size={20} className="text-gray-888" />
                  <Link className="text-gray-888 hover:underline" href={link.href}>
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Get In Touch */}
          <div className="flex flex-col gap-4">
            <TextManrope
              text="Get In Touch"
              className="text-xl md:text-2xl lg:text-3xl text-gray-850 font-semibold"
            />
            <div className="flex flex-col gap-4">
              {GET_IN_TOUCH.map((t, index) => (
                <GetInTouch key={index} icon={t.icon} text1={t.text1} text2={t?.text2} />
              ))}
            </div>
          </div>

          {/* 4. Instagram Post */}
          <div className="flex flex-col gap-4">
            <TextManrope
              text="Instagram Post"
              className="text-xl md:text-2xl lg:text-3xl text-gray-850 font-semibold"
            />
            <div className="grid grid-cols-3 gap-2">
              {POST_INS.map((p, index) => (
                <Image
                  key={index}
                  src={p}
                  alt=""
                  className="w-full h-full object-cover rounded-md hover:scale-105 duration-300"
                  width={300}
                  height={300}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[68px] flex justify-center">
        {/* Background image */}
        <Image
          src={Background}
          alt="Banner"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />

        {/* Content */}
        <div className="w-full md:w-[80%] lg:w-[70%] flex justify-between items-center z-50 p-3">
          <div className="flex gap-2 text-white text-sm">
            <span>Copyright 2025 </span>
            <span>Tours</span>
            <span className="hidden md:block">. All Rights Reserved.</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="hidden md:block text-white text-base">We Accept</span>
            <Image src={Card} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
