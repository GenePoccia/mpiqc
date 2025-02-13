// app/[slug]/page.tsx

import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

import { INDUSTRIES_QUERY } from "../../lib/sanityQueries";
import { options } from "../../lib/sanityOptions";

interface Industry extends SanityDocument {
	title: string;
	slug: { current: string };
	text: string;
}

const SlugPage = async ({}: { params: { slug: string } }) => {
	const industriesResult = await client.fetch<Industry>(
		INDUSTRIES_QUERY,
		{ slug: "medical" }, //replace with page slug dynamically
		options
	);

	const categories = industriesResult;
	console.log(categories);

	return (
		<div>
			<h1>Slug Page</h1>
			<p>Displaying content for: {categories?.title}</p>
			<p>Content: {categories?.text}</p>
		</div>
	);
};

export default SlugPage;
