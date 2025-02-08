import React from "react";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { options } from "../lib/sanityOptions";
import { NAVIGATION_QUERY } from "../lib/sanityQueries";

interface Industry extends SanityDocument {
	title: string;
	slug: { current: string };
	text: string;
}

interface CategoryInterface {
	en: string;
	fr: string;
	isDropdown: boolean;
	dropdownItems?: Array<DropdownItems>;
}

interface DropdownItems {
	en: string;
	fr: string;
}

const renderDropdownCategory = (category: CategoryInterface) => {
	return (
		<div>
			{category?.["en"]}
			<span>v</span>
		</div>
	);
};

const renderCategory = (category: CategoryInterface) => {
	return <div>{category?.["en"]}</div>;
};

const renderCategoryRouter = (category: CategoryInterface) => {
	return category?.isDropdown
		? renderDropdownCategory(category)
		: renderCategory(category);
};

const Header = async (): Promise<any> => {
	const categoriesResult = await client.fetch<Industry[]>(
		NAVIGATION_QUERY,
		{},
		options
	);

	const categories = categoriesResult[0]?.navigationCategories;

	return (
		categories && (
			<div className="container mx-auto px-4">
				<div>This is the header</div>
				<div>
					{categories.map((category: CategoryInterface) => {
						return renderCategoryRouter(category);
					})}
				</div>
			</div>
		)
	);
};

export default Header;
