"use client";

import { Product } from "@/interface";
import { addToCart } from "@/lib/features/carts/cartsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";

import React from "react";

const AddToCartBtn = ({ ProductDetail , Quantity }: { ProductDetail:Product , Quantity:number }) => {
  const dispatch = useAppDispatch();
  const { sizeSelection, colorSelection } = useAppSelector(
    (state: RootState) => state.products
  );

  return (
    <button
      type="button"
      className="bg-black w-full ml-3 sm:ml-5 rounded-full h-11 md:h-[52px] text-sm sm:text-base text-white hover:bg-black/80 transition-all"
      onClick={() =>
        dispatch(
          addToCart({
            id:ProductDetail.id,
            name: ProductDetail.name,
            srcUrl:ProductDetail.image,
            price:ProductDetail.price,
            attributes: [sizeSelection, colorSelection.name],
            discount: ProductDetail.discountPercent || 0,
            quantity:Quantity,
          })
        )
      }
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
