/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  domains: [
		'cdn.sanity.io',
		'images.unsplash.com',
		'fakestoreapi.com', // Add fakestoreapi.com here
	  ],
	},
	staticPageGenerationTimeout: 120,
  };
  
  module.exports = nextConfig;
  