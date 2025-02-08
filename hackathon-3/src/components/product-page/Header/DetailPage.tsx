import React from "react";
import PhotoSection from "./PhotoSection";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Rating from "@/components/ui/Rating";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import AddToCardSection from "./AddToCardSection";
import { Product } from "@/interface";

const DetailPage = ({ ProductDetail }:{ ProductDetail: Product }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <PhotoSection ProductDetail={ProductDetail} />
        </div>
        <div>
          <h1
            className={cn([
              integralCF.className,
              "text-2xl md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 capitalize",
            ])}
          >
            {ProductDetail.name}
          </h1>
          <div className="flex items-center mb-3 sm:mb-3.5">
            <Rating
              initialValue={3.5}
              allowFraction
              SVGclassName="inline-block"
              emptyClassName="fill-gray-50"
              size={25}
              readonly
            />
            <span className="text-black text-xs sm:text-sm ml-[11px] sm:ml-[13px] pb-0.5 sm:pb-0">
              {3.5.toFixed(1)}
              <span className="text-black/60">/5</span>
            </span>
          </div>
          <div className="flex items-center space-x-2.5 sm:space-x-3 mb-5">
            {ProductDetail.discountPercent > 0 ? (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                {`$${Math.round(
                  ProductDetail.price - ( ProductDetail.price *  ProductDetail.discountPercent) / 100
                )}`}
              </span>
            ) : ProductDetail.discountPercent > 0 ? (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                {`$${ProductDetail.price - ProductDetail.discountPercent}`}
              </span>
            ) : (
              <span className="font-bold text-black text-2xl sm:text-[32px]">
                ${ProductDetail.price}
              </span>
            )}
            {ProductDetail.discountPercent > 0 && (
              <span className="font-bold text-black/40 line-through text-2xl sm:text-[32px]">
                ${ProductDetail.price}
              </span>
            )}
            {ProductDetail.discountPercent> 0 && (
              <span className="font-bold text-black/40 line-through text-2xl sm:text-[32px]">
                ${ProductDetail.price}
              </span>
            )}
            {ProductDetail.discountPercent > 0 ? (
              <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                {`-${ProductDetail.price}%`}
              </span>
            ) : (
              ProductDetail.discountPercent > 0 && (
                <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
                  {`-$${ProductDetail.price}`}
                </span>
              )
            )}
          </div>
          <p className="text-sm sm:text-base text-black/60 mb-5">
            {ProductDetail.description}
          </p>

          {/* Stock Information */}
          <div className="mb-5">
            <p className="text-sm sm:text-base text-black/60">
              <strong>Stock: </strong>
              {10 > 0 ? (
                <span className="text-green-500">In Stock ({10} available)</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </p>
          </div>

          <hr className="h-[1px] border-t-black/10 mb-5" />
          <ColorSelection />
          <hr className="h-[1px] border-t-black/10 my-5" />
          <SizeSelection />
          <hr className="hidden md:block h-[1px] border-t-black/10 my-5" />
          <AddToCardSection ProductDetail={ProductDetail} />
        </div>
      </div>
    </>
  );
};

export default DetailPage;
