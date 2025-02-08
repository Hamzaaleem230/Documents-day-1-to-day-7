import React from 'react'

const features = [
  {
    id: 1,
    title: "Fast Shipping",
    description: "Get your items delivered quickly with our expedited shipping options",
    icon: "🚚",
    className: "md:col-span-2 lg:col-span-2"
  },
  {
    id: 2,
    title: "Secure Payments",
    description: "Shop with confidence using our encrypted payment system",
    icon: "🔒",
    className: "lg:row-span-2"
  },
  {
    id: 3,
    title: "Wide Selection",
    description: "Browse through our extensive collection of products",
    icon: "🛍️",
    className: "md:col-span-2"
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Our customer service team is always here to help",
    icon: "💬",
    className: "lg:col-span-2"
  },
  {
    id: 5,
    title: "Eco-Friendly",
    description: "We prioritize sustainability with eco-friendly packaging and green initiatives",
    icon: "🌱",
    className: "md:col-span-2 lg:col-span-2"
  },
  {
    id: 6,
    title: "Loyalty Program",
    description: "Earn rewards and exclusive discounts with our loyalty program",
    icon: "🎁",
    className: "md:col-span-2 lg:col-span-2"
  }
]

export default function FeaturesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold text-center mb-12 font-display tracking-tight">
        Our Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className={`${feature.className} p-8 rounded-3xl border bg-white/50 backdrop-blur-sm 
            hover:shadow-xl transition-all duration-300 group hover:scale-[1.02]`}
          >
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-3 font-display">
              {feature.title}
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
