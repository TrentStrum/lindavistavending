/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		domains: ['images.unsplash.com'],
	},
	experimental: {
		serverActions: true,
	},
};

module.exports = nextConfig;
