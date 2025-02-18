import { client } from "@/sanity/client";
import { INDUSTRIES_QUERY } from "../../lib/sanityQueries";
import { options } from "../../lib/sanityOptions";

const SlugPage = async ({ params }) => {
	// TODO: Fetch industry data using the dynamic slug
	const industriesResult = await client.fetch(
		INDUSTRIES_QUERY,
		{ slug: "medical" }, // Use the dynamic slug from the params
		options
	);

	const category = industriesResult; // Assuming `industriesResult` is an array

	return (
		<div>
			<p>Slug Page</p>
			<h1>Displaying content for: {category.title}</h1>
			<h2>Content: {category.text}</h2>
		</div>
	);
};

export default SlugPage;
