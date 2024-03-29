/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: "build",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "localhost",
				port: "3000",
				pathname: "//**",
			},
		],
	},
};

export default nextConfig;
