import React from "react";
import { FooterData, SanityImage, SocialMedia } from "@/types/sanityTypes";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
	return builder.image(source);
}

const renderSocialMedia = (social: SocialMedia) => {
	const imageUrl = social?.image ? urlFor(social?.image).url() : "";

	return (
		<div key={social?._key}>
			<a
				href={social?.link}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={imageUrl}
					alt={social?.alt}
					className="max-w-[288px] max-h-[96px]"
				/>
			</a>
		</div>
	);
};

const Footer = ({
	data,
	language,
}: {
	data: FooterData | null;
	language: "en" | "fr";
}) => {
	const imageUrl = data?.logo ? urlFor(data?.logo).url() : "";

	return (
		<section className="w-full bg-white py-8 px-4 md:px-8">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
				<div className="mb-6 md:mb-0">
					<img
						src={imageUrl}
						alt={data?.logo?.alt}
						className="max-w-[288px] max-h-[96px]"
					/>
				</div>

				{/* Right side - Contact info and circles */}
				<div className="flex flex-col items-center md:items-end space-y-3">
					{/* Email */}
					<a
						href="mailto:info@mpiqc.com"
						className="text-gray-800 hover:text-blue-600 transition-colors"
					>
						{data?.email}
					</a>

					{/* Phone */}
					<a
						href="tel:+18554667472"
						className="text-gray-800 hover:text-blue-600 transition-colors"
					>
						{data?.phone}
					</a>

					{/* Three small circles in a row */}
					<div className="flex space-x-2">
						{data?.socialMedia?.map((social) => renderSocialMedia(social))}
					</div>
				</div>
			</div>
			<div>{data?.copyright[language]}</div>
		</section>
	);
};

export default Footer;
