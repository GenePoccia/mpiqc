"use client";
import { Provider } from "../contexts/GlobalContext";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Provider>
			<div>{children}</div>
		</Provider>
	);
}
