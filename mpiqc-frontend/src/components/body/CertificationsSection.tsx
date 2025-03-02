import { CertificationSectionData, Certification, SanityImage } from "@/types/sanityTypes";
import "../../app/globals.css";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
	return builder.image(source);
}

const renderCertification = (certification: SanityImage, index: number, total: number) => {
	const imageUrl = certification ? urlFor(certification).url() : "";
	const isLastItemCentered = total % 2 === 1 && index === total - 1;

	return (
		<div
			className={`flex items-center justify-center ${
				isLastItemCentered ? "col-span-2" : ""
			}`}
			key={index}
		>
			<img
				src={imageUrl}
				alt={certification?.alt}
				className="max-w-[288px] max-h-[96px]"
			/>
		</div>
	);
};

export default function Certifications({
	data,
	language,
}: {
	data: CertificationSectionData | null;
	language: "en" | "fr";
}) {

	const header = data?.header?.[language]
	const description = data?.description?.[language]

	const certifications = data?.certifications

	return (
		<section
			id="certifications"
			className="flex flex-col items-center my-24 text-center mx-auto"
		>
			<h2 className="mb-4 font-semibold">{header}</h2>
			<p className="mx-auto w-xs lg:w-2xl">
				{description}
			</p>
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 mt-12">
	{certifications?.map((certification, index) =>
		renderCertification(certification, index, certifications.length)
	)}
</div>

		</section>
	);
}
