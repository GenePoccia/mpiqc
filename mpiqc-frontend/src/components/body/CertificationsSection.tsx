import { CertificationSectionData, SanityImage } from "@/types/sanityTypes";
import "../../app/globals.css";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
	return builder.image(source);
}

const renderCertification = (certification: SanityImage, index: number) => {
	const imageUrl = certification ? urlFor(certification).url() : "";

	return (
		<div
			className="flex items-center justify-center"
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
	const header = data?.header?.[language];
	const description = data?.description?.[language];
	const certifications = data?.certifications;

	if (!certifications) return null;

	// Check if the last row would have a single item (3x + 1 items)
	const hasLoneItemLg = certifications.length % 3 === 1;
	const hasLoneItemMd = certifications.length % 2 === 1;

	return (
		<section
			id="certifications"
			className="flex flex-col items-center my-24 text-center mx-auto"
		>
			<div className="w-[70%] md:w-[95%] lg:w-[95%]">
				<h2 className="mb-4 font-semibold">{header}</h2>
				<p className="mx-auto w-s lg:w-xl">{description}</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-8 md:gap-16 lg:gap-24 mt-12">
				{certifications.map((certification, index) => {
					const isLastItem = index === certifications.length - 1;
					const centerLastItem = isLastItem && (hasLoneItemLg || hasLoneItemMd);

					return (
						<div
							key={index}
							className={`
								${centerLastItem ? "md:col-span-2 lg:col-start-2 lg:col-span-1" : ""}
							`}
						>
							{renderCertification(certification, index)}
						</div>
					);
				})}
			</div>
		</section>
	);
}
