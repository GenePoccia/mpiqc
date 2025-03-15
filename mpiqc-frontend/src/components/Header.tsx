"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { useGlobalContext } from "../contexts/GlobalContext";
import { CategoryInterface } from "@/types/sanityTypes";

import { Menu, X } from "lucide-react"; // Import icons for the mobile menu

import Image from "next/image";

const renderCategory = (
	category: CategoryInterface,
	language: keyof CategoryInterface,
	index: number,
	setMobileMenuOpen?: Dispatch<SetStateAction<boolean>>
) => {
	return (
		<div
			className="text-left"
			key={`category-${index}`}
		>
			<Link
				href={`#${category?.route}`}
				scroll={true}
				className={`${category.isSpecialColor ? "text-[rgba(212,141,50,1)]" : ""}`}
				onClick={() => setMobileMenuOpen?.(false)}
			>
				{category[language]}
			</Link>
		</div>
	);
};

const Header = () => {
	const {
		categories,
		language,
		// setLanguage
	} = useGlobalContext();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// const changeLanguage = () => {
	// 	setLanguage(language === "en" ? "fr" : "en");
	// };

	return (
		<>
			<div className="bg-white w-full text-black">
				<div className="max-w-[1440px] mx-auto w-full p-2 flex justify-between items-center ">
					<div className="flex flex-row ml-8 items-center gap-x-4">
						<Image
							src="/images/mpiqc.svg"
							alt="MPIQC Logo"
							width={150}
							height={60}
						/>
						<Image
							src="/images/warranty.svg"
							alt="Warranty Logo"
							width={80}
							height={80}
						/>
					</div>
					{/* Desktop Nav (Hidden on small screens) */}
					<div className="hidden lg:flex space-x-4">
						{categories.map((category, index) =>
							renderCategory(category, language, index)
						)}

						{/* HIDDEN FOR LAUNCH */}
						{/* <div
							onClick={changeLanguage}
							className="cursor-pointer"
						>
							{language === "en" ? "FR" : "EN"}
						</div> */}
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="lg:hidden block p-2"
					>
						{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>

					<div
						className={`fixed top-0 right-0 h-screen w-64 bg-white text-black shadow-lg items-start space-y-6 py-6 transform transition-all duration-300 ease-in-out md:hidden z-50
						${mobileMenuOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"}`}
					>
						{/* Close Button (Top Right) */}
						<button
							onClick={() => setMobileMenuOpen(false)}
							className="absolute top-4 right-4 p-2"
						>
							<X size={24} />
						</button>

						{/* Categories - Left Aligned */}
						<div className="ml-8 w-full space-y-4 mt-10">
							{categories.map((category, index) => (
								<div key={`category-${index}`}>
									{renderCategory(category, language, index, setMobileMenuOpen)}
								</div>
							))}
							{/* Language Toggle - Left Aligned */}
							{/* HIDDEN FOR LAUNCH */}
							{/* <div
								onClick={changeLanguage}
								className="cursor-pointer text-left"
							>
								{language === "en" ? "FR" : "EN"}
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
