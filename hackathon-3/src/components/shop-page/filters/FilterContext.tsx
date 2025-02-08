'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
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
  clearAllFilters: () => void;
  setSearchQuery: (query: string) => void;
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
  clearAllFilters: () => {},
  setSearchQuery: () => {},
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

  const value = {
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
    clearAllFilters,
    setSearchQuery,
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
} 