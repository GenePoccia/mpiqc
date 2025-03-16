import React from "react";
import {
	PortableTextReactComponents,
	PortableTextComponentProps,
	PortableTextMarkComponentProps,
} from "@portabletext/react";

export const PortableTextComponents: Partial<PortableTextReactComponents> = {
	block: {
		normal: ({ children }: PortableTextComponentProps<any>) => (
			<p className="text-base leading-relaxed">{children}</p>
		),
	},
	list: {
		bullet: ({ children }: PortableTextComponentProps<any>) => (
			<ul className="list-disc pl-5">{children}</ul>
		), // ✅ Bulleted list
		number: ({ children }: PortableTextComponentProps<any>) => (
			<ol className="list-decimal pl-5">{children}</ol>
		), // ✅ Numbered list
	},
	listItem: {
		bullet: ({ children }: PortableTextComponentProps<any>) => (
			<li className="mb-1">{children}</li>
		), // ✅ Each bullet item
		number: ({ children }: PortableTextComponentProps<any>) => (
			<li className="mb-1">{children}</li>
		),
	},
	marks: {
		strong: ({ children }: PortableTextMarkComponentProps<any>) => (
			<strong className="font-normal text-black">{children}</strong> // Apply styling for strong text
		),
	},
};

export const HeaderPortableText = {
	block: {
		normal: ({ children }: PortableTextComponentProps<any>) => (
			<h1 className="text-[64px] w-[90%] font-bold sm:text-3xl !text-white mb-4 !leading-[120%]">
				{children}
			</h1>
		),
	},
};
