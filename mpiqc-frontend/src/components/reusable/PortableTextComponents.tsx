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
