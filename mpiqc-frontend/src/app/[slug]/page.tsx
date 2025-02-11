"use client";
// app/[slug]/page.tsx

import { useParams } from "next/navigation";

const SlugPage = () => {
	const { slug } = useParams();
	return (
		<div>
			<h1>Slug Page</h1>
			<p>Displaying content for: {slug}</p>
		</div>
	);
};

export default SlugPage;
