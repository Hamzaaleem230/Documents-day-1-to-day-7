import { Button } from "@/components/ui/button";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReviewCard from "@/components/common/ReviewCard";
import { reviewsData } from "@/data/reviews";
import Link from "next/link";
import Image from "next/image";

const ReviewsContent = () => {
  return (
    <section>
      <div className="flex items-center justify-between flex-col sm:flex-row mb-5 sm:mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <h3 className="text-xl sm:text-2xl font-bold text-black mr-2">
            All Reviews
          </h3>
          <span className="text-sm sm:text-base text-black/60">(451)</span>
        </div>
        <div className="flex items-center space-x-2.5">
          <Select defaultValue="latest">
            <SelectTrigger className="min-w-[120px] font-medium text-xs sm:text-base px-4 py-3 sm:px-5 sm:py-4 text-black bg-[#F0F0F0] border-none rounded-full h-12 flex items-center space-x-4 transition-all duration-300 ease-in-out">
              {/* Circle with Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F0F0F0]">
                <Image
                  src="/icons/sortitem.svg" // Ensure the path is correct
                  alt="Sort Icon"
                  width={24}
                  height={24}
                />
              </div>
              {/* Select Value */}
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="transition-all duration-300 ease-in-out">
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="most-relevant">Most Relevant</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>

          <Button
            type="button"
            className="sm:min-w-[166px] px-4 py-3 sm:px-5 sm:py-4 rounded-full bg-black font-medium text-xs sm:text-base h-12 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-black/80 hover:text-white"
          >
            Write a Review
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 sm:mb-9">
        {reviewsData.map((review, index) => (
          <ReviewCard
            key={review.id}
            data={review}
            isAction
            isDate
            className={`animate__animated animate__fadeIn animate__delay-${index * 100}ms`}
          />
        ))}
      </div>
      <div className="w-full px-4 sm:px-0 text-center">
        <Link
          href="#"
          className="inline-block w-[230px] px-11 py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10 hover:scale-105"
        >
          Load More Reviews
        </Link>
      </div>
    </section>
  );
};

export default ReviewsContent;
