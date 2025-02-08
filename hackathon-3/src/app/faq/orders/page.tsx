import React from 'react';

const OrdersFAQ = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h1 className="text-5xl font-bold leading-tight">Orders FAQ</h1>
        <p className="mt-4 text-lg font-medium">Everything you need to know about placing and managing your orders.</p>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {/* FAQ Item 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">1. How can I place an order?</h4>
              <p className="mt-2 text-gray-600">
                To place an order, browse our website, select the items you&#39;d like to purchase, add them to your cart, and proceed to checkout. Once you&#39;ve entered your payment details and shipping address, confirm the order to complete the process.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">2. Can I modify my order after placing it?</h4>
              <p className="mt-2 text-gray-600">
                Unfortunately, once an order is placed, we are unable to modify it. However, you can cancel the order and place a new one. If you need assistance, contact our customer support team.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">3. How do I track my order?</h4>
              <p className="mt-2 text-gray-600">
                Once your order is shipped, you will receive an email with a tracking number. You can use this tracking number to monitor your order&#39;s progress on the carrier&#39;s website.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">4. Can I cancel my order?</h4>
              <p className="mt-2 text-gray-600">
                Orders can only be canceled if they have not yet been processed for shipment. Please contact customer support as soon as possible to request a cancellation. If your order has already shipped, you may return it once received.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">5. How do I return an item?</h4>
              <p className="mt-2 text-gray-600">
                If you&#39;re not completely satisfied with your purchase, you can return it within 30 days of receipt. Please visit our Returns & Exchanges page for detailed instructions and eligibility criteria.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">6. Do you offer exchanges?</h4>
              <p className="mt-2 text-gray-600">
                Yes, we do offer exchanges for items of equal value or different sizes. If you&#39;d like to exchange an item, please contact our support team, and they will guide you through the process.
              </p>
            </div>

            {/* FAQ Item 7 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">7. What should I do if I receive a damaged or incorrect item?</h4>
              <p className="mt-2 text-gray-600">
                If you receive a damaged or incorrect item, please contact customer support immediately. We will assist you with a return or exchange process to ensure you are fully satisfied with your order.
              </p>
            </div>

            {/* FAQ Item 8 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">8. Can I purchase items as a gift?</h4>
              <p className="mt-2 text-gray-600">
                Yes, you can purchase items as a gift. At checkout, you can choose to have the order delivered to a different address, and you may also include a gift message if desired.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrdersFAQ;
