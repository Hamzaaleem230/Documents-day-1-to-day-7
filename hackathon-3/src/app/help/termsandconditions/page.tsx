import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h1 className="text-5xl font-bold leading-tight">Terms and Conditions</h1>
        <p className="mt-4 text-lg font-medium">Please read these Terms and Conditions carefully before using our website.</p>
      </section>

      {/* Terms Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Terms and Conditions</h2>
          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">1. Introduction</h4>
              <p className="mt-2 text-gray-600">
                Welcome to our website! These terms and conditions govern your access to and use of our website. By browsing or using our services, you agree to be bound by these terms.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">2. Acceptance of Terms</h4>
              <p className="mt-2 text-gray-600">
                By using our website, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part of the terms, you must not use our website.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">3. Product Information</h4>
              <p className="mt-2 text-gray-600">
                We strive to provide accurate product descriptions, pricing, and availability. However, we do not guarantee that the content on our website is complete or free of errors.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">4. Ordering and Payment</h4>
              <p className="mt-2 text-gray-600">
                When you place an order, you confirm that the information provided is accurate and that you have the necessary funds for the transaction. Payments are processed through secure methods, and you will receive an order confirmation after your payment is successfully processed.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">5. Shipping and Delivery</h4>
              <p className="mt-2 text-gray-600">
                Please refer to our Delivery Details page for full shipping and delivery information. We are not responsible for delays caused by third-party shipping carriers.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">6. Returns and Exchanges</h4>
              <p className="mt-2 text-gray-600">
                Our returns and exchanges policy allows you to return unused items in their original condition within 30 days. For full details, please see our Returns Policy page.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">7. Intellectual Property</h4>
              <p className="mt-2 text-gray-600">
                All content on this website, including text, images, and logos, are the property of [Your Company Name] and are protected by intellectual property laws. You may not use any content without prior written consent from us.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">8. Limitation of Liability</h4>
              <p className="mt-2 text-gray-600">
                To the fullest extent permitted by law, we are not liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our website.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">9. Governing Law</h4>
              <p className="mt-2 text-gray-600">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes will be resolved in the courts located within [Your Jurisdiction].
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">10. Changes to Terms</h4>
              <p className="mt-2 text-gray-600">
                We reserve the right to update or modify these Terms and Conditions at any time. Any changes will be posted on this page, and it is your responsibility to review them periodically.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">11. Contact Information</h4>
              <p className="mt-2 text-gray-600">
                If you have any questions or concerns regarding these Terms and Conditions, please contact us at <a href="mailto:support@yourcompany.com" className="text-indigo-600">support@yourcompany.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
