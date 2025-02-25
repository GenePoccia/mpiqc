import { CategoryInterface } from "./sanityTypes";
import { Dispatch, SetStateAction } from "react";

export interface GlobalContextType {
	categories: CategoryInterface[];
	language: "en" | "fr";
	setLanguage: Dispatch<SetStateAction<"en" | "fr">>;
}
