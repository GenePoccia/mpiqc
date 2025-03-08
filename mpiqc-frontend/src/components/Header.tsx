"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useGlobalContext } from "../contexts/GlobalContext";
import { CategoryInterface, SanityImage } from "@/types/sanityTypes";

import { PortableText } from "@portabletext/react";

import { Menu, X } from "lucide-react"; // Import icons for the mobile menu

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
	return builder.image(source);
}

const renderCategory = (
	category: CategoryInterface,
	language: keyof CategoryInterface,
	index: number
) => (
	<div key={`category-${index}`}>
		<Link
			href={`#${category?.route}`}
			scroll={true}
		>
			{category[language]}
		</Link>
	</div>
);

const Header = () => {
	const { categories, warrantyCallout, headerLogo, language, setLanguage } =
		useGlobalContext();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const changeLanguage = () => {
		setLanguage(language === "en" ? "fr" : "en");
	};

	const logoURL = headerLogo ? urlFor(headerLogo).url() : "";

	console.log(warrantyCallout);

	return (
		<>
			<div className="bg-transparent text-white">
				<div className="max-w-[1440px] mx-auto w-full px-4 flex justify-between items-center py-4">
					<img
						src={logoURL}
						alt={headerLogo?.alt}
					/>

					{/* Desktop Nav (Hidden on small screens) */}
					<div className="hidden md:flex space-x-4">
						{categories.map((category, index) =>
							renderCategory(category, language, index)
						)}
						<div
							onClick={changeLanguage}
							className="cursor-pointer"
						>
							{language === "en" ? "FR" : "EN"}
						</div>
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="md:hidden block p-2"
					>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>

					{/* Mobile Nav (Hidden by default, appears when toggled) */}
					{mobileMenuOpen && (
						<div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 md:hidden">
							{categories.map((category, index) =>
								renderCategory(category, language, index)
							)}
							<div
								onClick={changeLanguage}
								className="cursor-pointer"
							>
								{language === "en" ? "FR" : "EN"}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Header;
