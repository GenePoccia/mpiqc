"use client";

import Footer from "../components/Footer";
import { Provider } from "../contexts/GlobalContext";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Provider>
			<div>
				{children}
				<Footer />
			</div>
		</Provider>
	);
}
