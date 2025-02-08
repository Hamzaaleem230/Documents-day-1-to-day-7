import React from 'react';

const DeliveryFAQ = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h1 className="text-5xl font-bold leading-tight">Delivery FAQ</h1>
        <p className="mt-4 text-lg font-medium">All your shippings and delivery questions answered here!</p>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {/* FAQ Item 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">1. What are your shipping options?</h4>
              <p className="mt-2 text-gray-600">
                We offer standard, expedited, and express shipping options. Standard shipping takes 5-7 business days, expedited shipping arrives in 2-3 business days, and express shipping arrives within 1 business day.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">2. How much does shipping costs?</h4>
              <p className="mt-2 text-gray-600">
                Shipping costs depend on the selected shipping method, destination, and the weight of the items. You can view the exact shipping cost during checkout.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">3. Do you offer international shipping?</h4>
              <p className="mt-2 text-gray-600">
                Yes, we offer international shipping to most countries. Please enter your delivery address during checkout to see if we can ship to your location.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">4. Can I change my shipping address after placing an order?</h4>
              <p className="mt-2 text-gray-600">
                We process orders quickly, but if you need to change your shipping address, please contact customer support immediately. If your order hasn&#39;t shipped yet, we will update the address for you.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">5. How can I track my order?</h4>
              <p className="mt-2 text-gray-600">
                After your order is shipped, you will receive an email with tracking details. You can use the tracking number to follow your package&#39;s journey on the carrier&#39;s website.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">6. What should I do if my package is delayed or lost?</h4>
              <p className="mt-2 text-gray-600">
                If your package is delayed or lost, please reach out to our customer support team. We will assist in locating your package or offer a solution based on the circumstances.
              </p>
            </div>

            {/* FAQ Item 7 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">7. Do you offer free shipping?</h4>
              <p className="mt-2 text-gray-600">
                We offer free shipping on orders over $100. Be sure to check our current promotions and discounts for any additional shipping offers.
              </p>
            </div>

            {/* FAQ Item 8 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">8. Can I ship to multiple addresses?</h4>
              <p className="mt-2 text-gray-600">
                Currently, we only offer shipping to a single address per order. If you wish to send items to different addresses, you will need to place separate orders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryFAQ;
