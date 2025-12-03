'use client';

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@heroui/react';
import { ChevronDown } from 'lucide-react';
import React from 'react';

interface DropdownFilterProps {
  icon: React.ReactNode;
  label: string;
  items: { key: string; label: string }[];
  onSelect?: (key: string) => void;
}

export default function DropdownFilter({ icon, label, items, onSelect }: DropdownFilterProps) {
  const [selectedLabel, setSelectedLabel] = React.useState(label);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          disableRipple
          className="flex items-center justify-between gap-2 px-3 py-2 text-gray-700 hover:text-black w-[230px] md:w-[170px] lg:w-[230px] bg-transparent shadow-none"
        >
          <div className="flex items-center gap-2">
            <span className="text-blue-header-btn">{icon}</span>
            <span className="font-medium text-sm lg:text-base">{selectedLabel}</span>
          </div>

          <ChevronDown size={18} className="text-gray-500" />
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Filter menu"
        onAction={key => {
          const item = items.find(i => i.key === key);
          if (item) setSelectedLabel(item.label);
          if (onSelect) onSelect(String(key));
        }}
        className="!bg-white !shadow-lg !rounded-lg !p-2 !z-[9999] max-h-[60vh] overflow-auto w-[180px] md:w-[120px] lg:w-[180px] "
        style={{ background: '#ffffff', zIndex: 9999 }}
      >
        {items.map(item => (
          <DropdownItem key={item.key}>{item.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
