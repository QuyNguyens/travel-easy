"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type Language = {
  label: string;
  value: string;
  icon: string; // đường dẫn đến cờ
};

const languages: Language[] = [
  { label: "English", value: "en", icon: "/icons/headers/united-kingdom.png" },
  { label: "Tiếng Việt", value: "vi", icon: "/icons/headers/vietnam.png" },
];

const LanguageSelect = () => {
  const [selected, setSelected] = useState<Language>(languages[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-[130px]"> {/* width cố định */}
      {/* Button */}
      <button
        className="
          flex items-center justify-between
          px-2 py-1.5 w-full
          rounded-full border border-gray-300 
          text-sm font-medium bg-white
        "
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          <Image src={selected.icon} alt="" width={18} height={18} />
          <span>{selected.label}</span>
        </div>

        <ChevronDown size={14} />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute mt-2 w-full bg-white 
            border border-gray-200 rounded-lg shadow-md 
            z-50 overflow-hidden
          "
        >
          {languages.map((lang) => (
            <button
              key={lang.value}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              className="
                flex items-center gap-2 
                w-full px-4 py-2 text-sm 
                hover:bg-gray-100
              "
            >
              <Image src={lang.icon} alt="" width={18} height={18} />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
