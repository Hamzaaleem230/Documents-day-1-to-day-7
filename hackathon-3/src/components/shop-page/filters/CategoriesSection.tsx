"use client";

import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type Category = {
  title: string;
  slug: string;
};

const categoriesData: Category[] = [
  { title: "T-shirts", slug: "t-shirts" },
  { title: "Shorts", slug: "shorts" },
  { title: "Shirts", slug: "shirts" },
  { title: "Hoodie", slug: "hoodie" },
  { title: "Jeans", slug: "jeans" },
];

interface CategoriesSectionProps {
  onCategorySelect: (category: string) => void;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onCategorySelect }) => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      {categoriesData.map((category, idx) => (
        <button
          key={idx}
          onClick={() => onCategorySelect(category.slug)}
          className="flex items-center justify-between py-2"
        >
          {category.title} <MdKeyboardArrowRight />
        </button>
      ))}
    </div>
  );
};

export default CategoriesSection;