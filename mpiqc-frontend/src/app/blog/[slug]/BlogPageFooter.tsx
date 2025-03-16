"use client";
import React from "react";
import { Footer } from "@/components/body";
import { useGlobalContext } from "@/contexts/GlobalContext";

const BlogPageFooter = () => {
	const {
		language,

		footerData,
	} = useGlobalContext();

	return (
		<>
			{footerData && (
				<Footer
					data={footerData}
					language={language}
				/>
			)}
		</>
	);
};

export default BlogPageFooter;
