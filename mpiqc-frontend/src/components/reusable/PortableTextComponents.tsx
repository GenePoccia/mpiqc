import React from "react";
import {
	PortableTextReactComponents,
	PortableTextComponentProps,
	PortableTextBlock,
} from "@portabletext/react";

// Define the components
export const PortableTextComponents: Partial<PortableTextReactComponents> = {
	block: {
		normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
			<p className="text-base leading-relaxed">{children}</p>
		),
	},
	list: {
		bullet: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
			<ul className="list-disc pl-5">{children}</ul>
		), // ✅ Bulleted list
		number: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
			<ol className="list-decimal pl-5">{children}</ol>
		), // ✅ Numbered list
	},
	listItem: {
		bullet: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
			<li className="mb-1">{children}</li>
		), // ✅ Each bullet item
		number: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
			<li className="mb-1">{children}</li>
		),
	},
	marks: {
		strong: ({ children }) => (
			<strong className="font-normal text-black">{children}</strong> // Apply styling for strong text
		),
	},
};

// Header component for Portable Text rendering
export const HeaderPortableText = {
	block: {
		normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
			<h1 className="text-[64px] w-[90%] font-bold sm:text-3xl !text-white mb-4 !leading-[120%]">
				{children}
			</h1>
		),
	},
};
