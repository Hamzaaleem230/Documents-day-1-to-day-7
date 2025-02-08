"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CategoriesSection from "@/components/shop-page/filters/CategoriesSection";
import ColorsSection from "@/components/shop-page/filters/ColorsSection";
import DressStyleSection from "@/components/shop-page/filters/DressStyleSection";
import PriceSection from "@/components/shop-page/filters/PriceSection";
import SizeSection from "@/components/shop-page/filters/SizeSection";
import { Button } from "@/components/ui/button";

interface FilterState {
  category: string;
  price: {
    min: number;
    max: number;
  };
  colors: string[];
  size: string[];
  style: string[];
}

const Filters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state from URL parameters
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    category: searchParams.get('category') || "",
    price: {
      min: Number(searchParams.get('minPrice')) || 0,
      max: Number(searchParams.get('maxPrice')) || 200
    },
    colors: searchParams.get('colors')?.split(',').filter(Boolean) || [],
    size: searchParams.get('sizes')?.split(',').filter(Boolean) || [],
    style: searchParams.get('styles')?.split(',').filter(Boolean) || []
  });

  const handleCategoryChange = (category: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      category
    }));
  };

  const handlePriceChange = (min: number, max: number) => {
    setSelectedFilters(prev => ({
      ...prev,
      price: { min, max }
    }));
  };

  const handleColorChange = (colors: string[]) => {
    setSelectedFilters(prev => ({
      ...prev,
      colors
    }));
  };

  const handleSizeChange = (sizes: string[]) => {
    setSelectedFilters(prev => ({
      ...prev,
      size: sizes
    }));
  };

  const handleStyleChange = (styles: string[]) => {
    setSelectedFilters(prev => ({
      ...prev,
      style: styles
    }));
  };

  const handleApplyFilters = () => {
    // Create new URLSearchParams instance
    const params = new URLSearchParams(searchParams.toString());

    // Update or remove category
    if (selectedFilters.category) {
      params.set('category', selectedFilters.category);
    } else {
      params.delete('category');
    }

    // Update or remove colors
    if (selectedFilters.colors.length > 0) {
      params.set('colors', selectedFilters.colors.join(','));
    } else {
      params.delete('colors');
    }

    // Update or remove sizes
    if (selectedFilters.size.length > 0) {
      params.set('sizes', selectedFilters.size.join(','));
    } else {
      params.delete('sizes');
    }

    // Update or remove styles
    if (selectedFilters.style.length > 0) {
      params.set('styles', selectedFilters.style.join(','));
    } else {
      params.delete('styles');
    }

    // Always include price range
    params.set('minPrice', selectedFilters.price.min.toString());
    params.set('maxPrice', selectedFilters.price.max.toString());

    // Preserve the current page if it exists
    const page = searchParams.get('page');
    if (page) {
      params.set('page', page);
    }

    // Navigate with the new params
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col space-y-4">
      <hr className="border-t-black/10" />
      <CategoriesSection onCategorySelect={handleCategoryChange} />
      
      <hr className="border-t-black/10" />
      <PriceSection onChange={handlePriceChange} />
      
      <hr className="border-t-black/10" />
      <ColorsSection onChange={handleColorChange} />
      
      <hr className="border-t-black/10" />
      <SizeSection onChange={handleSizeChange} />
      
      <hr className="border-t-black/10" />
      <DressStyleSection onChange={handleStyleChange} />

      <Button
        type="button"
        className="bg-black w-full rounded-full text-sm font-medium py-4 h-12 text-white hover:bg-black/90"
        onClick={handleApplyFilters}
      >
        Apply Filter
      </Button>
    </div>
  );
};

export default Filters;