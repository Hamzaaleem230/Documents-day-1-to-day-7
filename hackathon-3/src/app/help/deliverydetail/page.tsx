import React from 'react';

const DeliveryDetailsPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h1 className="text-5xl font-bold leading-tight">Delivery Details</h1>
        <p className="mt-4 text-lg font-medium">Get all the details about shipping, delivery times, and tracking your orders.</p>
      </section>

      {/* Delivery Times Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Delivery Times</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Domestic Delivery */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600">Domestic Delivery</h3>
              <p className="mt-4 text-gray-600">Orders within the country will be delivered within 3-5 business days after processing.</p>
            </div>
            {/* International Delivery */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600">International Delivery</h3>
              <p className="mt-4 text-gray-600">For international shipping, delivery times range from 7-14 business days depending on location.</p>
            </div>
            {/* Expedited Shipping */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600">Expedited Shipping</h3>
              <p className="mt-4 text-gray-600">Get your orders faster with expedited shipping, delivered within 2-3 business days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Policies Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Shipping Policies</h2>
          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">Free Shipping</h4>
              <p className="mt-2 text-gray-600">We offer free domestic shipping on orders over $50. No promo code is needed&mdash;simply checkout and enjoy free delivery!</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">Shipping Fees</h4>
              <p className="mt-2 text-gray-600">For orders below $50, a shipping fee of $5 will be applied at checkout. International shipping fees vary depending on location.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">Order Processing</h4>
              <p className="mt-2 text-gray-600">Orders are processed within 1-2 business days. You will receive an email with tracking details once your order ships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Orders Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Track Your Order</h2>
          <p className="text-center text-lg text-gray-600 mb-8">Once your order has shipped, you will receive a tracking number via email. Use the button below to track your order status.</p>
          <div className="text-center">
            <a
              href="#"
              className="py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Track Your Order
            </a>
          </div>
        </div>
      </section>

      {/* Delivery FAQs Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Delivery FAQs</h2>
          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">How do I track my order?</h4>
              <p className="mt-2 text-gray-600">Once your order has shipped, you will receive a tracking number via email. You can track your order on our website or via the carrier&apos;s site.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">Can I change my delivery address?</h4>
              <p className="mt-2 text-gray-600">If you need to change the delivery address, please contact our customer support team as soon as possible before your order is shipped.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">What happens if my delivery is delayed?</h4>
              <p className="mt-2 text-gray-600">We strive to deliver orders on time, but occasional delays may happen due to unforeseen circumstances. You&apos;ll be notified via email if there are any delays with your delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Need Help?</h2>
          <p className="text-center text-lg text-gray-600 mb-8">If you have any questions about your delivery, feel free to reach out to our support team. We&apos;re here to assist you!</p>
          <div className="text-center">
            <a
              href="mailto:support@yourcompany.com"
              className="py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryDetailsPage;
