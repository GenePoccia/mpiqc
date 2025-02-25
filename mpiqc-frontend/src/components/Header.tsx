"use client";

import React from "react";
import Link from "next/link";
import { useGlobalContext } from "../contexts/GlobalContext";
import { CategoryInterface } from "@/types/sanityTypes";

const renderCategory = (
	category: CategoryInterface,
	language: keyof CategoryInterface,
	index: number
) => (
	<div key={`category-${index}`}>
		<Link
			href={`#${category[language]}`}
			scroll={true}
		>
			{category[language]}
		</Link>
	</div>
);
const Header = () => {
	const { categories, language, setLanguage } = useGlobalContext();

	const changeLanguage = () => {
		setLanguage(language === "en" ? "fr" : "en");
	};

	return (
		<div className="w-full px-4 flex justify-between items-center py-4">
			<div>Logo here</div>
			<div className="flex space-x-4">
				{categories.map((category, index) =>
					renderCategory(category, language, index)
				)}
				<div onClick={changeLanguage}>{language === "en" ? "FR" : "EN"}</div>
			</div>
		</div>
	);
};

export default Header;
