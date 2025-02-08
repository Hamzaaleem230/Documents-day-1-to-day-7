import React from 'react';

const CustomerCarePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h1 className="text-5xl font-bold leading-tight">Customer Care Support</h1>
        <p className="mt-4 text-lg font-medium">We are here to assist you with any questions or issues you may have. Get in touch with us below!</p>
      </section>

      {/* Contact Options Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">How Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600">Email Support</h3>
              <p className="mt-4 text-gray-600">For inquiries or concerns, reach us via email at:</p>
              <a href="mailto:support@yourcompany.com" className="mt-4 inline-block text-indigo-600 underline">
                support@shop.co
              </a>
            </div>
            {/* Phone */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600">Phone Support</h3>
              <p className="mt-4 text-gray-600">Call us at our customer care line:</p>
              <p className="mt-4 text-indigo-600 text-xl">+1 (800) 123-4567</p>
            </div>
            {/* Live Chat */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600">Live Chat</h3>
              <p className="mt-4 text-gray-600">Need immediate assistance? Chat with us live:</p>
              <a
                href="#"
                className="mt-4 inline-block text-indigo-600 underline"
              >
                Start Live Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">How do I track my order?</h4>
              <p className="mt-2 text-gray-600">You can track your order by visiting our tracking page and entering your order number and email address.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">How can I return or exchange an item?</h4>
              <p className="mt-2 text-gray-600">If you are not satisfied with your purchase, you can return or exchange items within 30 days of receipt. Please visit our Returns page for more details.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">What should I do if my item is damaged or defective?</h4>
              <p className="mt-2 text-gray-600">If you receive a damaged or defective item, please contact our customer support team immediately, and we’ll assist you with a return or replacement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Contact Us</h2>
          <form className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-900 font-semibold">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-900 font-semibold">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-gray-900 font-semibold">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md"
                required
              ></textarea>

            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="py-3 px-6 bg-black text-white rounded-lg hover:bg-indigo-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CustomerCarePage;
