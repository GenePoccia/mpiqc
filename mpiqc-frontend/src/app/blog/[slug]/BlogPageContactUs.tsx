"use client";

import React from "react";
import { Contact } from "@/components/body";
import { useGlobalContext } from "@/contexts/GlobalContext";

const BlogPageContactUs = () => {
	const { language, contactUsData } = useGlobalContext();

	return (
		<>
			{contactUsData && (
				<Contact
					data={contactUsData}
					language={language}
				/>
			)}
		</>
	);
};

export default BlogPageContactUs;
