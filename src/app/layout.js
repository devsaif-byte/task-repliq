"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./contexts/StoreProvider";
import Header from "../app/(ui)/common/Header";
import Head from "next/head";

import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
// 	title: "task e-commerce",
// 	description: "created using next js",
// };

export default function RootLayout({ children }) {
	const pathname = usePathname();

	return (
		<html lang="en">
			<Head>
				<title>task e-commerce</title>
				<meta name="description" content="created using next js" />
			</Head>
			<StoreProvider>
				<body>
					<main className="flex-grow flex flex-col justify-between">
						{pathname !== "/dashboard" && <Header />}
						{children}
					</main>
				</body>
			</StoreProvider>
		</html>
	);
}
