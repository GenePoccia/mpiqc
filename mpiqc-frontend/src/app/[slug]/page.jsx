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
			<h1>Slug Page</h1>
			<p>Displaying content for: {category.title}</p>
			<p>Content: {category.text}</p>
		</div>
	);
};

export default SlugPage;
