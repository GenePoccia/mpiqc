"use client";

import React from "react";
import Link from "next/link";
import { useGlobalContext } from "../contexts/GlobalContext";

const renderCategory = (category: any, index: number) => (
	<div key={`category-${index}`}>
		<Link
			href={`#${category.enRoute}`}
			scroll={true}
		>
			{category.en}
		</Link>
	</div>
);

const changeLanguage = () => {};

const Header = () => {
	const { categories, language, setLanguage } = useGlobalContext();

	const changeLanguage = () => {
		setLanguage(language === "en" ? "fr" : "en");
	};
	return (
		<div className="w-full px-4 flex justify-between items-center py-4">
			<div>Logo here</div>
			<div className="flex space-x-4">
				{categories.map((category, index) => renderCategory(category, index))}
				<div
					onClick={changeLanguage}
					className="cursor-pointer"
				>
					{language.toUpperCase()}
				</div>
			</div>
		</div>
	);
};

export default Header;
