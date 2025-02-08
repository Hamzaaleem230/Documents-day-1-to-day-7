import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h1 className="text-5xl font-bold leading-tight">Privacy Policy</h1>
        <p className="mt-4 text-lg font-medium">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Privacy Policy</h2>
          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">1. Introduction</h4>
              <p className="mt-2 text-gray-600">
                At [Your Company Name], we value your privacy. This privacy policy explains how we collect, use, disclose, and protect your personal data when you visit our website or use our services.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">2. Information We Collect</h4>
              <p className="mt-2 text-gray-600">
                We collect information you provide directly to us when you make a purchase, create an account, subscribe to our newsletter, or contact us. This may include:
                <ul className="list-inside list-disc ml-5 mt-2 text-gray-600">
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Shipping and Billing Address</li>
                  <li>Payment Information (Processed securely through third parties)</li>
                </ul>
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">3. How We Use Your Information</h4>
              <p className="mt-2 text-gray-600">
                We use the information we collect to:
                <ul className="list-inside list-disc ml-5 mt-2 text-gray-600">
                  <li>Process and fulfill orders</li>
                  <li>Provide customer support</li>
                  <li>Communicate promotions, offers, and updates</li>
                  <li>Improve our website and services</li>
                  <li>Ensure security and fraud prevention</li>
                </ul>
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">4. Cookies and Tracking Technologies</h4>
              <p className="mt-2 text-gray-600">
                We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
                <ul className="list-inside list-disc ml-5 mt-2 text-gray-600">
                  <li>Recognize you and your preferences</li>
                  <li>Analyze website usage and improve functionality</li>
                  <li>Personalize content and advertisements</li>
                </ul>
                You can manage your cookie preferences through your browser settings.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">5. Data Security</h4>
              <p className="mt-2 text-gray-600">
                We take reasonable measures to protect your personal information from unauthorized access, disclosure, or destruction. However, no security system is completely foolproof, and we cannot guarantee absolute security.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">6. Third-Party Services</h4>
              <p className="mt-2 text-gray-600">
                We may share your information with third-party service providers who assist us in running our business, such as payment processors and shipping partners. These parties are obligated to handle your information with the utmost care and confidentiality.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">7. Your Rights</h4>
              <p className="mt-2 text-gray-600">
                You have the right to:
                <ul className="list-inside list-disc ml-5 mt-2 text-gray-600">
                  <li>Access your personal information</li>
                  <li>Request corrections to your information</li>
                  <li>Request the deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                </ul>
                To exercise these rights, please contact us at <a href="mailto:support@yourcompany.com" className="text-indigo-600">support@yourcompany.com</a>.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">8. Changes to This Privacy Policy</h4>
              <p className="mt-2 text-gray-600">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date. Please review this policy periodically to stay informed about how we protect your privacy.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">9. Contact Us</h4>
              <p className="mt-2 text-gray-600">
                If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at <a href="mailto:support@yourcompany.com" className="text-indigo-600">support@yourcompany.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
