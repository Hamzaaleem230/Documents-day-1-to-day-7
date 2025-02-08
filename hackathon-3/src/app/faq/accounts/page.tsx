import React from 'react';

const AccountsFAQ = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h1 className="text-5xl font-bold leading-tight">Accounts FAQ</h1>
        <p className="mt-4 text-lg font-medium">Answers to your most common account-related questions.</p>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {/* FAQ Item 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">1. How do I create an account?</h4>
              <p className="mt-2 text-gray-600">
                To create an account, click on the &quot;Sign Up&quot; button at the top of the page. You will need to provide your name, email address, and a secure password. Once completed, you will receive a confirmation email.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">2. What should I do if I forgot my password?</h4>
              <p className="mt-2 text-gray-600">
                If you&apos;ve forgotten your password, click on the &quot;Forgot Password&quot; link on the login page. Enter your registered email address, and we&apos;ll send you a link to reset your password.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">3. How do I update my account information?</h4>
              <p className="mt-2 text-gray-600">
                To update your account information, log in to your account and go to &quot;My Account&quot; section. You can update your personal details, shipping address, and email preferences from there.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">4. Can I delete my account?</h4>
              <p className="mt-2 text-gray-600">
                Yes, you can delete your account by contacting our customer support team. Please note that deleting your account is permanent, and all your order history will be lost.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">5. How can I change my email preferences?</h4>
              <p className="mt-2 text-gray-600">
                To change your email preferences, log into your account and visit the &quot;Email Preferences&quot; section. From there, you can choose to receive updates on promotions, new arrivals, or other marketing materials.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">6. How do I log out?</h4>
              <p className="mt-2 text-gray-600">
                To log out of your account, click on the &quot;Logout&quot; button located in the account menu. This will securely log you out from all sessions.
              </p>
            </div>

            {/* FAQ Item 7 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">7. How can I contact customer support?</h4>
              <p className="mt-2 text-gray-600">
                If you need assistance with your account or have any questions, you can contact our customer support team via email at <a href="mailto:support@yourcompany.com" className="text-indigo-600">support@yourcompany.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountsFAQ;
