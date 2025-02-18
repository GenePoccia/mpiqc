import React from "react";
import { type SanityDocument } from "next-sanity";
import Link from "next/link";

import { client } from "@/sanity/client";
import { options } from "../lib/sanityOptions";
import { NAVIGATION_QUERY } from "../lib/sanityQueries";

interface Navigation extends SanityDocument {
	title: string;
	text: string;
}

interface CategoryInterface {
	en: string;
	fr: string;
	enRoute: string;
	frRoute: string;
	isDropdown: boolean;
	dropdownItems?: Array<DropdownItems>;
}

interface DropdownItems {
	en: string;
	fr: string;
	enRoute: string;
	frRoute: string;
}

const renderCategory = (category: CategoryInterface, index: number) => {
	return (
		<div key={`category-${index}`}>
			<Link
				href={`#${category?.enRoute}`}
				scroll={true}
			>
				{category?.["en"]}
			</Link>
		</div>
	);
};

const Header = async (): Promise<React.ReactElement | null> => {
	const categoriesResult = await client.fetch<Navigation[]>(
		NAVIGATION_QUERY,
		{},
		options
	);

	const categories = categoriesResult[0]?.navigationCategories;

	return (
		categories && (
			<div className="w-full px-4 flex justify-between items-center  py-4">
				<div>Logo here</div>
				<div className="flex space-x-4">
					{categories.map((category: CategoryInterface, index: number) => {
						return renderCategory(category, index);
					})}
				</div>
			</div>
		)
	);
};

export default Header;
