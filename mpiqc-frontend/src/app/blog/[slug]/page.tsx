import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { FULL_BLOG_POST_QUERY } from "@/lib/sanityQueries";
import { BlogPostData, SanityImage } from "@/types/sanityTypes";
import { options } from "@/lib/sanityOptions";

// Image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source: SanityImage) {
	return builder.image(source);
}

export default async function PostPage({
	params,
	searchParams,
}: {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ language: "en" | "fr" }>;
}) {
	const { slug } = await params;
	const { language } = await searchParams;

	const blogPost = await client.fetch<BlogPostData>(
		FULL_BLOG_POST_QUERY,
		{ slug },
		options
	);

	if (!blogPost) {
		return <div>Post not found</div>;
	}

	const content = blogPost?.excerpt?.[language];

	return (
		<div className="container mx-auto px-5">
			{blogPost.coverImage && (
				<img
					src={urlFor(blogPost.coverImage).url()}
					alt={blogPost.coverImage.alt || "Blog image"}
					className="w-full h-auto rounded-lg mt-4"
				/>
			)}
			{content}
		</div>
	);
}
