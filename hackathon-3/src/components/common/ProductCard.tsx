"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/interface";
import { urlFor } from "@/sanity/lib/image";

type ProductCardProps = {
  data: Product;
  id: string;
};

const ProductCard = ({ data }: ProductCardProps) => {
  const imageUrl = data.image ? urlFor(data.image).url() : "/default-image.jpg";
  const discountedPrice = data.discountPercent
    ? data.price - (data.price * data.discountPercent) / 100
    : data.price;

  return (
    <Link
      href={`/shop/product/${data._id}`}
      className="flex flex-col items-start group transition-transform transform hover:scale-102 duration-300"
      aria-label={`View details for ${data.name}`}
    >
      <div className="relative bg-gray-100 rounded-lg w-full max-w-[295px] aspect-square mb-4 overflow-hidden">
        <Image
          src={imageUrl}
          width={295}
          height={295}
          className="rounded-md w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          alt={data.name || "Product image"}
          priority
        />
        {data.isNew && (
          <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
            New
          </span>
        )}
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-black group-hover:text-red-500 transition-colors duration-300">
            {data.name}
          </h3>
          <span className="text-sm text-gray-500 capitalize">{data.category}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {Array.isArray(data.colors) && data.colors.length > 0 ? (
            data.colors.map((color, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-200 text-xs rounded"
              >
                {color}
              </span>
            ))
          ) : (
            <span className="text-gray-400 text-sm">No colors available</span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-black">
            ${discountedPrice.toFixed(2)}
          </span>
          {data.discountPercent > 0 && (
            <>
              <span className="text-gray-500 line-through">
                ${data.price.toFixed(2)}
              </span>
              <span className="text-xs font-medium bg-red-100 text-red-600 px-2 py-1 rounded">
                -{data.discountPercent}%
              </span>
            </>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {Array.isArray(data.sizes) && data.sizes.length > 0 ? (
            data.sizes.map((size, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-200 text-xs rounded"
              >
                {size}
              </span>
            ))
          ) : (
            <span className="text-gray-400 text-sm">No sizes available</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
