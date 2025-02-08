"use client";

import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  // Split heading text into individual letters
  const headingText = "FIND CLOTHES  THAT MATCHES YOUR STYLE".split("");

  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {/* Text Section */}
        <section className="max-w-frame px-4">
          {/* Animated Heading */}
          <motion.h2
            className={cn([
              integralCF.className,
              "text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8 flex flex-wrap",
            ])}
          >
            {headingText.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50, rotate: 15, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: index * 0.05, // Stagger letters
                }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
              </motion.span>
            ))}
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]"
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </motion.p>

          {/* Shop Now Button */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <Link
              href="/shop"
              className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full hover:animate-pulse"
            >
              Shop Now
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex md:h-full md:max-h-11 lg:hidden items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-8 md:mb-[116px]"
          >
            <div className="flex flex-col">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                200+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                International Brands
              </span>
            </div>
            <div className="flex flex-col ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                2000+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                High-Quality Products
              </span>
            </div>
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
                3000+
              </span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap">
                Happy Customers
              </span>
            </div>
          </motion.div>
        </section>

        {/* Background Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8, type: "spring" }}
          className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]"
        >
          {/* Big Star - Scale & Rotate Animation */}
          <motion.img
            src="/icons/big-star.svg"
            alt="Big Star"
            className="absolute right-7 xl:right-0 top-12 w-20 h-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
          />

          {/* Small Star - Circular Path Animation */}
          <motion.img
            src="/icons/small-star.svg"
            alt="Small Star"
            className="absolute left-7 md:left-0 top-36 w-10 h-10"
            animate={{
              x: [0, 20, 0, -20, 0],
              y: [0, -20, 0, 20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />

          {/* Model Animation - Subtle Floating */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: [0, -20, 0], opacity: 1 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: 0, // Runs once
            }}
          >
            <Image
              src="/images/model.png"
              alt="Model"
              className="w-full max-w-[300px] mx-auto"
              width={300}
              height={300}
            />
          </motion.div>
        </motion.section>
      </div>
    </header>
  );
};

export default Header;
