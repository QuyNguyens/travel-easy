'use client';
import TextIcon from '@/components/molicular/TextIcon';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Divider,
} from '@heroui/react';
import LocationIcon from '../../../../../../../public/icons/headers/location.svg';
import WatchIcon from '../../../../../../../public/icons/headers/watch.svg';
import LanguageSelect from './LanguageSelect';
const TopHeader = () => {
  return (
    <Navbar className="py-2 px-2 md:px-4 lg:px-14 justify-center md:justify-between bg-white">
      <NavbarBrand className="hidden md:flex">
        <div className="flex items-center gap-4">
          <TextIcon className="flex" icon={LocationIcon} text="45 New Eskaton Road, Austria" />
          <Divider className="bg-gray-400 h-4 w-[1px] hidden lg:block" orientation="vertical" />
          <TextIcon
            className="hidden lg:flex"
            icon={WatchIcon}
            text="Sun to Friday: 8.00 am - 7.00 pm, Austria"
          />
        </div>
      </NavbarBrand>
      <NavbarContent justify="end" className="items-center">
        <NavbarItem>
          <LanguageSelect />
        </NavbarItem>
        <NavbarItem>
          <span className="font-medium text-sm hover:underline">Faq</span>
        </NavbarItem>
        <NavbarItem>
          <Divider className="bg-gray-400 h-4 w-[1px]" orientation="vertical" />
        </NavbarItem>
        <NavbarItem>
          <span className="font-medium text-sm hover:underline">Support</span>
        </NavbarItem>
        <NavbarItem>
          <Divider className="bg-gray-400 h-4 w-[1px]" orientation="vertical" />
        </NavbarItem>
        <NavbarItem>
          <div>
            <Button
              className="px-0 font-medium text-sm hover:text-primary hover:underline"
              as={Link}
              color="primary"
              href="#"
              variant="flat"
            >
              Sign in
            </Button>
            /{' '}
            <Button
              className="px-0 font-medium text-sm hover:text-primary hover:underline"
              as={Link}
              color="primary"
              href="#"
              variant="flat"
            >
              Register
            </Button>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopHeader;
