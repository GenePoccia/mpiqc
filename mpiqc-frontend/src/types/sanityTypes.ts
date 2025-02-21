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
