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
			className="flex flex-col gap-4"
		>
			<img
				src={imageUrl}
				alt={postData?.coverImage?.alt}
				className="max-w-[244px] max-h-[160px] rounded-xl"
			/>
			<span className="">{formatDate(postData?.date)}</span>
			<h3 className="">{postData?.postTitle?.[language]}</h3>
			<p className="w-[85%]">{postData?.excerpt?.[language]}</p>
			<Link
				href={`/blog/${postData?.slug?.current}?language=${language}`}
				key={`blog_post_` + index}
				passHref
			>
				<span className="!text-[rgba(128,19,35,1)] !font-semibold underline">
					{postData?.readMore?.[language]}
				</span>
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
			id="news"
			className="flex flex-col items-center my-24 text-center mx-auto"
		>
			<h2 className="mb-12">{header?.[language]}</h2>
			<div className="md:flex md:flex-row text-left w-lg gap-8">
				{partialBlogPostData?.map((post, index) => {
					return renderPartialPost(post, index, language);
				})}
			</div>
		</section>
	);
}
