import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import StoreProvider from "./contexts/storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "task e-commerce",
	description: "created using next js",
};

export default function RootLayout({ children }) {
	return (
		<StoreProvider>
			<html lang="en">
				<body
					className={`${inter.className} flex flex-col items-center justify-between min-h-screen`}
				>
					<Header />

					<main className="flex-grow flex flex-col justify-between">
						{children}
					</main>
				</body>
			</html>
		</StoreProvider>
	);
}
