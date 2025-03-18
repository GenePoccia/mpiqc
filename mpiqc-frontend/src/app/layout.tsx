import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RootLayout from "./RootLayout";

import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	title: "MPIQC Inc. | High Quality, High Value, Flexible CM Solutions",
	description: "High Quality, High Value, Flexible CM Solutions",
	icons: {
		icon: "/favicon.ico", // Default favicon
		shortcut: "/favicon.png", // Alternative favicon
		apple: "/favicon.png", // Apple Touch Icon
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} font-sans`}>
				<RootLayout>{children}</RootLayout>
			</body>
		</html>
	);
}
