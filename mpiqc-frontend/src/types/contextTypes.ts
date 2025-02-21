import { CategoryInterface } from "./sanityTypes";

export interface GlobalContextType {
	categories: CategoryInterface[];
	language: string;
	setLanguage: (language: string) => void;
}
