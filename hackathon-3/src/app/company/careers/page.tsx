import React from 'react';

const careers = [
  {
    id: 1,
    title: 'Fashion Designer',
    location: 'Remote',
    description: 'Bring your creativity to life by designing the next best-selling clothing line.',
    responsibilities: [
      'Create innovative and fashion-forward designs',
      'Collaborate with the design team to bring ideas to life',
      'Ensure designs align with our brand identity',
    ],
    requirements: [
      'Proven experience as a Fashion Designer',
      'Strong portfolio showcasing design skills',
      'Ability to work collaboratively in a fast-paced environment',
    ],
  },
  {
    id: 2,
    title: 'Marketing Specialist',
    location: 'New York, NY',
    description: 'Lead the marketing strategy and boost our brand visibility.',
    responsibilities: [
      'Develop marketing campaigns to promote our products',
      'Manage social media platforms and influencer partnerships',
      'Analyze and report on marketing campaign performance',
    ],
    requirements: [
      'Experience in marketing, preferably in e-commerce or fashion',
      'Creative thinking and ability to execute campaigns',
      'Strong analytical skills and proficiency with marketing tools',
    ],
  },
  {
    id: 3,
    title: 'Customer Support Representative',
    location: 'Remote',
    description: 'Provide exceptional support to our customers and ensure their satisfaction.',
    responsibilities: [
      'Respond to customer inquiries via email, chat, and phone',
      'Assist with product inquiries, returns, and exchanges',
      'Maintain customer records and feedback reports',
    ],
    requirements: [
      'Excellent communication skills',
      'Problem-solving attitude',
      'Experience in customer support is a plus',
    ],
  },
];

const CareersPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h1 className="text-5xl font-bold leading-tight">Join Our Team</h1>
        <p className="mt-4 text-lg font-medium">At SHOP.CO, we believe in the power of creativity, innovation, and passion.</p>
        <p className="mt-2 text-base">Explore our open positions and be part of a dynamic, fast-growing company.</p>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Current Openings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careers.map((job) => (
              <div key={job.id} className="bg-white shadow-xl rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold text-indigo-600">{job.title}</h3>
                <p className="text-gray-600 mt-2">{job.location}</p>
                <p className="text-gray-500 mt-4">{job.description}</p>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-700">Responsibilities</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 text-indigo-600 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-700">Requirements</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 text-indigo-600 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="/apply" className="mt-6 inline-block py-2 px-4 bg-indigo-600 text-white text-center rounded-lg hover:bg-indigo-700">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-indigo-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Join Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600">Creative Freedom</h3>
              <p className="mt-2 text-gray-600">We believe in empowering our team to bring their ideas to life.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600">Inclusive Culture</h3>
              <p className="mt-2 text-gray-600">Work in a supportive environment where every voice is heard.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-indigo-600">Competitive Benefits</h3>
              <p className="mt-2 text-gray-600">We offer attractive salaries, health benefits, and more.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
