/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placeimg.com",
				port: "3000",
				pathname: "//**",
			},
		],
	},
};

export default nextConfig;
