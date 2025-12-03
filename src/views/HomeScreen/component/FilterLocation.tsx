'use client';

import { MapPin, Bike, Clock, DollarSign } from 'lucide-react';
import { Divider } from '@heroui/react';
import { FILTER_LOCATION } from '@/constants/text';
import DropdownFilter from '@/components/molicular/DropdownFilter';
import ButtonIcon from '@/components/molicular/ButtonIcon';

const icons: Record<string, React.ReactNode> = {
  destination: <MapPin size={20} />,
  activity: <Bike size={20} />,
  days: <Clock size={20} />,
  price: <DollarSign size={20} />,
};

const FilterLocation = () => {
  const keys = Object.keys(FILTER_LOCATION) as (keyof typeof FILTER_LOCATION)[];

  return (
    <div
      className="
        flex flex-wrap 
        items-center 
        gap-4 
        bg-white 
        border border-blue-header-btn 
        shadow-sm 
        rounded-2xl 
        px-5 py-4

        w-full           /* mobile */
        md:w-[90%]       /* tablet */
        lg:w-full        /* desktop */

        h-auto lg:h-[110px]
      "
    >
      {keys.map((key, index) => {
        const section = FILTER_LOCATION[key];

        return (
          <div key={index} className="flex items-center gap-4">
            <DropdownFilter icon={icons[key]} label={section.name} items={section.items} />
            <Divider className="bg-gray-300 h-5 w-[1px] hidden lg:block" orientation="vertical" />
          </div>
        );
      })}

      {/* Search Button — full width trên mobile, nhỏ lại trên PC */}
      <div className="ml-auto">
        <ButtonIcon
          text="Search"
          className="
            bg-blue-header-btn text-white rounded-full

            w-full sm:w-[180px] h-[55px]    /* mobile */
            lg:w-[157px] lg:h-[57px]        /* desktop */
          "
        />
      </div>
    </div>
  );
};

export default FilterLocation;
