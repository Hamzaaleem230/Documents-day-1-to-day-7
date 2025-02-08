'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6">
          Discover the Heart of Our Shop
        </h1>
        <p className="text-lg text-gray-700">
          Where innovation meets timeless fashion. Crafted with love, care, and a sense of purpose.
        </p>
      </motion.div>

      {/* Our Story & Mission Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
          <p className="text-lg text-gray-600">
            Born out of a desire to make fashion both stylish and sustainable, our brand was founded in 2023. We are a passionate collective dedicated to pushing boundaries and redefining trends.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            Our mission is to offer unique, handpicked collections that balance modern flair with classic sophistication. We are committed to excellence, quality, and a customer-first approach in everything we do.
          </p>
        </motion.div>

        {/* "What Makes Us Different?" Section */}
        <motion.div
          className="bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-center">What Makes Us Different?</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span>
              <span>Handcrafted Collections with a Unique Story</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span>
              <span>Premium Quality Materials & Craftsmanship</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span>
              <span>Personalized Shopping Experience</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span>
              <span>Eco-Friendly Packaging & Shipping</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Visit Our Store Section */}
      <motion.div
        className="mt-12 text-center bg-gray-50 p-8 rounded-xl shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary">Come Visit Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Experience our collection in person at our store, where fashion and passion meet.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          123 Fashion Street<br />
          New York, NY 10001<br />
          Monday - Saturday: 10AM - 8PM<br />
          Sunday: 11AM - 6PM
        </p>
        <a
          href="/"
          className="inline-block px-6 py-2 mt-4 text-white bg-primary rounded-full shadow-md hover:bg-primary-dark transition-all duration-200"
        >
          Explore Our Store
        </a>
      </motion.div>
    </div>
  );
};

export default AboutPage;
