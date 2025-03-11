import {
	BlogSectionData,
	PartialBlogPostData,
	SanityImage,
} from "@/types/sanityTypes";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import Link from "next/link";

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

const renderPartialPost = (
	postData: PartialBlogPostData,
	index: number,
	language: "en" | "fr"
) => {
	const imageUrl = postData?.coverImage
		? urlFor(postData?.coverImage).url()
		: "";

	return (
		<div
			key={`blog_post_` + index}
			className="flex flex-col"
		>
			<img
				src={imageUrl}
				alt={postData?.coverImage?.alt}
				className="max-w-[288px] max-h-[96px]"
			/>
			<span>{formatDate(postData?.date)}</span>
			<span>{postData?.postTitle?.[language]}</span>
			<span>{postData?.excerpt?.[language]}</span>
			<Link
				href={`/blog/${postData?.slug?.current}?language=${language}`}
				key={`blog_post_` + index}
				passHref
			>
				<span>{postData?.readMore?.[language]}</span>
			</Link>
		</div>
	);
};

export default function BlogSection({
	data,
	partialBlogPostData,
	language,
}: {
	data: BlogSectionData | null;
	partialBlogPostData: PartialBlogPostData[] | null;
	language: "en" | "fr";
}) {
	const header = data?.header;

	return (
		<section
			id="blog"
			className="flex flex-col items-center my-24 text-center mx-auto"
		>
			<h2 className="mb-12">{header?.[language]}</h2>
			<div className="flex flex-row text-left w-md gap-8">
				{partialBlogPostData?.map((post, index) => {
					return renderPartialPost(post, index, language);
				})}
			</div>
		</section>
	);
}
