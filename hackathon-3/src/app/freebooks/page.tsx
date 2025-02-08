import React from 'react';

const FreeEbooks = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center rounded-b-lg">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight">Free Fashion E-books</h1>
        <p className="mt-4 text-lg font-medium max-w-2xl mx-auto">
          Explore our curated collection of free e-books and stay ahead in the world of fashion, styling, and trends.
        </p>
      </section>

      {/* E-books Collection */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Fashion E-books Collection</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* E-book 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden group transform transition duration-300 hover:scale-105">
              <div className="h-64 bg-gray-300 rounded-t-lg flex items-center justify-center">
                <span className="text-white text-4xl font-semibold">Fashion 101</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Fashion 101: A Beginner&#39;s Guide</h3>
                <p className="mt-2 text-gray-600">
                  Learn the basics of fashion, essential styles, and how to create your first stylish outfit.
                </p>
                <a
                  href="/ebooks/fashion-101.pdf"
                  download
                  className="mt-4 inline-block bg-black text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-700 transition duration-300"
                >
                  Download Now
                </a>
              </div>
            </div>

            {/* E-book 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden group transform transition duration-300 hover:scale-105">
              <div className="h-64 bg-gray-300 rounded-t-lg flex items-center justify-center">
                <span className="text-white text-4xl font-semibold">Layering</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">The Art of Layering</h3>
                <p className="mt-2 text-gray-600">
                  Discover the secrets behind layering outfits for different seasons and occasions.
                </p>
                <a
                  href="/ebooks/the-art-of-layering.pdf"
                  download
                  className="mt-4 inline-block bg-black text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-700 transition duration-300"
                >
                  Download Now
                </a>
              </div>
            </div>

            {/* E-book 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden group transform transition duration-300 hover:scale-105">
              <div className="h-64 bg-gray-300 rounded-t-lg flex items-center justify-center">
                <span className="text-white text-4xl font-semibold">Trends 2025</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Fashion Trends of 2025</h3>
                <p className="mt-2 text-gray-600">
                  Stay up-to-date with the latest fashion trends and what to expect in the upcoming year.
                </p>
                <a
                  href="/ebooks/fashion-trends-2025.pdf"
                  download
                  className="mt-4 inline-block bg-black text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-700 transition duration-300"
                >
                  Download Now
                </a>
              </div>
            </div>

            {/* E-book 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden group transform transition duration-300 hover:scale-105">
              <div className="h-64 bg-gray-300 rounded-t-lg flex items-center justify-center">
                <span className="text-white text-4xl font-semibold">Sustainability</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Sustainable Fashion: A Guide to Eco-Friendly Choices</h3>
                <p className="mt-2 text-gray-600">
                  Learn how to make more eco-conscious choices in fashion, from sustainable fabrics to mindful consumption.
                </p>
                <a
                  href="/ebooks/sustainable-fashion.pdf"
                  download
                  className="mt-4 inline-block bg-black text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-700 transition duration-300"
                >
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeEbooks;
