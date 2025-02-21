import { type SanityDocument } from "next-sanity";

export interface Navigation extends SanityDocument {
	title: string;
	text: string;
}

export interface CategoryInterface {
	en: string;
	fr: string;
	enRoute: string;
	frRoute: string;
	isDropdown: boolean;
	dropdownItems?: DropdownItems[];
}

export interface DropdownItems {
	en: string;
	fr: string;
	enRoute: string;
	frRoute: string;
}

export interface GlobalContextType {
	categories: CategoryInterface[];
	language: string;
	setLanguage: (language: string) => void;
}
