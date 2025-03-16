import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { FULL_BLOG_POST_QUERY } from "@/lib/sanityQueries";
import { BlogPostData, SanityImage } from "@/types/sanityTypes";
import { options } from "@/lib/sanityOptions";
import Header from "@/components/Header";
import BlogPageFooter from "./BlogPageFooter";
import BlogPageContactUs from "./BlogPageContactUs";

import { PortableText } from "@portabletext/react";

import { PortableTextComponents } from "@/components/reusable/PortableTextComponents"; // ✅ Import component
// Image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source: SanityImage) {
	return builder.image(source);
}

const formatDate = (unformattedDate: string) => {
	const date = new Date(unformattedDate);
	const formattedDate = date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return formattedDate;
};

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

	const content = blogPost?.content[language];
	const author = blogPost?.author;
	const date = blogPost?.date;
	const title = blogPost?.postTitle;
	return (
		<>
			<Header />
			<section className="max-w-[1440px] mx-24 flex flex-col items-center text-center">
				{blogPost.coverImage && (
					<img
						src={urlFor(blogPost.coverImage).url()}
						alt={blogPost.coverImage.alt || "Blog image"}
						className="w-full h-[350px] object-cover rounded-lg mt-4"
					/>
				)}

				<div className="flex flex-col text-left mt-12">
					<div className="flex flex-col gap-2">
						<span> {formatDate(date)}</span>
						<h1>{title[language]}</h1>
						<span> {author}</span>
					</div>

					<div className="mt-12">
						<PortableText
							value={content}
							components={PortableTextComponents}
						/>
					</div>
				</div>

				<BlogPageContactUs />
			</section>
			<BlogPageFooter />
		</>
	);
}
