'use client';

import Image from 'next/image';
import { useState } from 'react';
import BackgroundImage from '../../../../../../../public/images/headers/mask-group.svg';
import ImageHeader from '../../../../../../../public/logos/headers/global.svg';
import ArrowRight from '../../../../../../../public/icons/headers/arrow-right.svg';
import { HEADER } from '@/constants/routes';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import ButtonIcon from '@/components/molicular/ButtonIcon';

const NavbarHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MAIN NAVBAR */}
      <div className="flex bg-white border-t border-t-gray-300 items-center justify-between">
        <div className="flex items-center">
          {/* Logo background */}
          <div
            className="
              w-[365px] h-[92px] 
              overflow-hidden 
              relative bg-cover bg-center border-r border-white
              hidden md:block
            "
            style={{ backgroundImage: `url(${BackgroundImage.src})` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={ImageHeader}
                alt="logo"
                width={197}
                height={56}
                className="max-lg:w-[140px]"
              />
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden xl:flex items-center gap-12">
            {HEADER.map((h, index) => (
              <Link
                key={index}
                href={h.route}
                className="flex items-center gap-1 text-base hover:underline"
              >
                <span>{h.name}</span>
                {h.icon && <ChevronDown size={16} strokeWidth={2} className="text-gray-600" />}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="mr-14 flex items-center gap-4 mt-2 md:mt-0">
          <ButtonIcon
            image={ArrowRight}
            text="Request a quote"
            className="bg-header-btn text-white w-[180px] lg:w-[230px] h-12 lg:h-14 rounded-full"
          />
          {/* Mobile Menu Icon */}
          <button className="lg:hidden p-2" onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-gray-100/20 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 p-6 
                    transform transition-transform duration-300
                    ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close icon */}
        <button className="absolute top-4 right-4" onClick={() => setOpen(false)}>
          <X size={28} />
        </button>

        {/* Drawer menu list */}
        <div className="flex flex-col gap-6 mt-10">
          {HEADER.map((h, index) => (
            <Link
              key={index}
              href={h.route}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between text-lg font-medium border-b border-b-gray-200 pb-2"
            >
              {h.name}
              {h.icon && <ChevronDown size={20} className="text-gray-600" />}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavbarHeader;
