import React from "react";

export const PortableTextComponents = {
	block: {
		normal: ({ children }: any) => (
			<p className="text-base leading-relaxed">{children}</p>
		),
	},
	list: {
		bullet: ({ children }: any) => (
			<ul className="list-disc pl-5">{children}</ul>
		), // ✅ Bulleted list
		number: ({ children }: any) => (
			<ol className="list-decimal pl-5">{children}</ol>
		), // ✅ Numbered list
	},
	listItem: {
		bullet: ({ children }: any) => <li className="mb-1">{children}</li>, // ✅ Each bullet item
		number: ({ children }: any) => <li className="mb-1">{children}</li>,
	},
	marks: {
		strong: ({ children }: any) => (
			<strong className="font-normal text-black">{children}</strong> // Change the font-weight here
		),
	},
};

export const HeaderPortableText = {
	block: {
		normal: ({ children }: any) => (
			<h1 className="text-[64px] w-[90%] font-bold sm:text-3xl !text-white mb-4 !leading-[120%]">
				{children}
			</h1>
		),
	},
};
