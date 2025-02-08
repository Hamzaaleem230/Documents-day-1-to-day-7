// components/HowItWorks.js
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-24 relative bg-gray-50">
      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-16 gap-10 flex">
          {/* Title and Description */}
          <div className="w-full text-center">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              How It Works
            </h2>
            <p className="text-base font-normal text-gray-600 max-w-xl mx-auto">
              A simple step-by-step guide to shopping for your perfect outfit at our store, from browsing to checkout.
            </p>
          </div>

          {/* Steps Container */}
          <div className="w-full flex justify-center items-center gap-10 flex-wrap lg:flex-nowrap">
            {/* Step 1: Browse Our Collection */}
            <div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
              <h3 className="text-indigo-600 text-4xl font-extrabold">1</h3>
              <h4 className="text-xl font-semibold text-gray-800">Browse Our Collection</h4>
              <p className="text-center text-gray-500 text-base">
                Explore our wide range of clothing items, from trendy fashion to classic staples. Find the perfect outfit for every occasion.
              </p>
            </div>

            {/* Arrow between Step 1 and Step 2 */}
            <svg className="hidden lg:flex" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                stroke="#4F46E5"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Step 2: Add to Cart */}
            <div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
              <h3 className="text-indigo-600 text-4xl font-extrabold">2</h3>
              <h4 className="text-xl font-semibold text-gray-800">Add to Cart</h4>
              <p className="text-center text-gray-500 text-base">
                Once you&#39;ve found your perfect style, add your items to the cart. Choose the size, color, and quantity before proceeding to checkout.
              </p>
            </div>

            {/* Arrow between Step 2 and Step 3 */}
            <svg className="hidden lg:flex" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M5.50159 6L11.5018 12.0002L5.49805 18.004M12.5016 6L18.5018 12.0002L12.498 18.004"
                stroke="#4F46E5"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Step 3: Secure Checkout */}
            <div className="flex flex-col items-center gap-4 bg-white shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105">
              <h3 className="text-indigo-600 text-4xl font-extrabold">3</h3>
              <h4 className="text-xl font-semibold text-gray-800">Secure Checkout</h4>
              <p className="text-center text-gray-500 text-base">
                Proceed to our secure checkout process, where you can add payment details and confirm your order. Enjoy fast and safe delivery to your doorstep!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
