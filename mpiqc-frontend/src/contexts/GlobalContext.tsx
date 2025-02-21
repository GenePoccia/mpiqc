"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { options } from "../lib/sanityOptions";
import { NAVIGATION_QUERY } from "../lib/sanityQueries";
import {
	CategoryInterface,
	Navigation,
	GlobalContextType,
} from "../types/contextTypes"; // Import the interfaces here

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface ProviderProps {
	children: ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
	const [categories, setCategories] = useState<CategoryInterface[]>([]);
	const [language, setLanguage] = useState<string>("en");

	useEffect(() => {
		const fetchNavigation = async () => {
			try {
				const categoriesResult = await client.fetch<Navigation[]>(
					NAVIGATION_QUERY,
					{},
					options
				);
				setCategories(categoriesResult[0]?.navigationCategories || []);
			} catch (error) {
				console.error("Error fetching header categories:", error);
			}
		};

		fetchNavigation();
	}, []);

	const value = { categories, language, setLanguage };

	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
};

export const useGlobalContext = (): GlobalContextType => {
	const context = useContext(GlobalContext);
	if (!context) {
		throw new Error("useGlobalContext must be used within a Provider");
	}
	return context;
};
