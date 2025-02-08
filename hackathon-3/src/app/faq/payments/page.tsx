import React from 'react';

const PaymentsFAQ = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-center">
        <h1 className="text-5xl font-bold leading-tight">Payments FAQ</h1>
        <p className="mt-4 text-lg font-medium">Everything you need to know about making payments on our website securely and easily.</p>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {/* FAQ Item 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">1. What payment methods do you accept?</h4>
              <p className="mt-2 text-gray-600">
                We accept all major credit and debit cards (Visa, MasterCard, American Express, Discover), as well as PayPal, Google Pay, and Apple Pay.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">2. Is it safe to make payments on your website?</h4>
              <p className="mt-2 text-gray-600">
                Yes, all transactions are encrypted using SSL technology to ensure your payment information is secure. We also comply with PCI-DSS standards to protect your data.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">3. Can I pay using my gift card or store credit?</h4>
              <p className="mt-2 text-gray-600">
                Yes, we accept gift cards and store credits during checkout. Just select the &#34;Gift Card&#34; option during payment, and apply the code to redeem it.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">4. Why was my payment declined?</h4>
              <p className="mt-2 text-gray-600">
                Payments can be declined for various reasons, such as insufficient funds, expired card, or incorrect details. Please check your payment information or contact your bank for further assistance.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">5. Can I use multiple payment methods?</h4>
              <p className="mt-2 text-gray-600">
                Currently, we only accept one payment method per order. However, you can use a combination of a gift card and a credit card during checkout.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">6. How can I apply a discount code to my payment?</h4>
              <p className="mt-2 text-gray-600">
                During checkout, you&#39;ll find a field to enter your discount code. Enter the code and click &#34;Apply&#34; to get the discount. Please note that discount codes cannot be combined with other offers.
              </p>
            </div>

            {/* FAQ Item 7 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">7. When will my payment be processed?</h4>
              <p className="mt-2 text-gray-600">
                Payments are processed immediately upon completion of the checkout process. If you&#39;re paying with a credit or debit card, your funds will be held until the order is shipped.
              </p>
            </div>

            {/* FAQ Item 8 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">8. Will I be charged sales tax?</h4>
              <p className="mt-2 text-gray-600">
                Sales tax is applicable depending on your location. The tax amount will be calculated at checkout and displayed before you confirm the payment.
              </p>
            </div>

            {/* FAQ Item 9 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">9. Can I get a refund for my order?</h4>
              <p className="mt-2 text-gray-600">
                Yes, if your order is eligible for a return, we will refund your payment once we receive the returned items. Refunds will be processed through the same payment method used for the purchase.
              </p>
            </div>

            {/* FAQ Item 10 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">10. How long does it take to receive my refund?</h4>
              <p className="mt-2 text-gray-600">
                Refunds typically take 5-7 business days to process, depending on your bank or payment provider. Please allow extra time for processing during holidays or peak seasons.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentsFAQ;
