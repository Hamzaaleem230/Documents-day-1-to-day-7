"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdKeyboardArrowRight } from "react-icons/md";

type DressStyle = {
  title: string;
  slug: string;
};

const dressStylesData: DressStyle[] = [
  { title: "Casual", slug: "casual" },
  { title: "Formal", slug: "formal" },
  { title: "Party", slug: "party" },
  { title: "Gym", slug: "gym" },
];

interface DressStyleSectionProps {
  onChange: (styles: string[]) => void;
}

const DressStyleSection: React.FC<DressStyleSectionProps> = ({ onChange }) => {
  const handleStyleClick = (style: string) => {
    onChange([style]);
  };

  return (
    <Accordion type="single" collapsible defaultValue="filter-style">
      <AccordionItem value="filter-style" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Dress Style
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex flex-col text-black/60 space-y-0.5">
            {dressStylesData.map((dStyle, idx) => (
              <button
                key={idx}
                onClick={() => handleStyleClick(dStyle.slug)}
                className="flex items-center justify-between py-2"
              >
                {dStyle.title} <MdKeyboardArrowRight />
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DressStyleSection;