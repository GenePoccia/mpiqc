"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "../contexts/GlobalContext";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Provider>
			<div className="container">
				<Header />
				{children}
				<Footer />
			</div>
		</Provider>
	);
}
