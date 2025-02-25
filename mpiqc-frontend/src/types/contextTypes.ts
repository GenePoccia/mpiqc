import { CategoryInterface } from "./sanityTypes";

export interface GlobalContextType {
	categories: CategoryInterface[];
	language: "en" | "fr";
	setLanguage: (language: string) => void;
}
