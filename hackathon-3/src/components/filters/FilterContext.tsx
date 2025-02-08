'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface FilterContextType {
  selectedCategories: string[];
  selectedColors: string[];
  selectedSizes: string[];
  selectedStyles: string[];
  priceRange: {
    min: number;
    max: number;
  };
  searchQuery: string;
  setSelectedCategories: (categories: string[]) => void;
  setSelectedColors: (colors: string[]) => void;
  setSelectedSizes: (sizes: string[]) => void;
  setSelectedStyles: (styles: string[]) => void;
  setPriceRange: (range: { min: number; max: number }) => void;
  setSearchQuery: (query: string) => void;
  clearAllFilters: () => void;
}

export const FilterContext = createContext<FilterContextType>({
  selectedCategories: [],
  selectedColors: [],
  selectedSizes: [],
  selectedStyles: [],
  priceRange: { min: 0, max: 1000 },
  searchQuery: '',
  setSelectedCategories: () => {},
  setSelectedColors: () => {},
  setSelectedSizes: () => {},
  setSelectedStyles: () => {},
  setPriceRange: () => {},
  setSearchQuery: () => {},
  clearAllFilters: () => {},
});

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [searchQuery, setSearchQuery] = useState('');
  
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedStyles([]);
    setPriceRange({ min: 0, max: 1000 });
  };

  return (
    <FilterContext.Provider 
      value={{
        selectedCategories,
        selectedColors,
        selectedSizes,
        selectedStyles,
        priceRange,
        searchQuery,
        setSelectedCategories,
        setSelectedColors,
        setSelectedSizes,
        setSelectedStyles,
        setPriceRange,
        setSearchQuery,
        clearAllFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext); 