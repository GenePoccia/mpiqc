import { imageFirstMagazine } from "../reusable/magazines";
import {
	IndustriesSectionData,
	IndustrySpecificData,
	SanityImage,
} from "@/types/sanityTypes";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
	return builder.image(source);
}

const renderIndustryContent = (
	industry: IndustrySpecificData,
	language: "en" | "fr"
) => {
	const header = industry?.header[language];
	const smallHeaderIndustries = ["Medical & Healthcare", "Energy & Renewables"];
	return (
		<div
			key={industry._key}
			className="flex flex-row text-left gap-4"
		>
			<div className="flex flex-col gap-4 max-w-3xs md:max-w-2xs">
				{smallHeaderIndustries.includes(header) ? (
					<div className="text-xl max-w-[200px] md:text-2xl font-semibold">
						{header}
					</div>
				) : (
					<div className="text-xl max-w-sm md:text-2xl font-semibold">
						{header}
					</div>
				)}

				<span>{industry?.description[language]}</span>
			</div>
		</div>
	);
};

export default function IndustriesSection({
	data,
	language,
}: {
	data: IndustriesSectionData | null;
	language: "en" | "fr";
}) {
	const industry = data?.magazineContent;
	const industriesArray = data?.industriesList;
	return (
		<>
			<section
				id="industries"
				className=" flex items-center mt-24 justify-center  mx-12 md:mx-0 lg:mx-0"
			>
				{industry && imageFirstMagazine(industry, language)}
			</section>
			<div className="w-[95%] max-w-[1440px] mt-24 mx-auto flex justify-center items-center ">
				<div className="grid mb-24 md:grid-cols-2 lg:mb-0 lg:grid-cols-3 gap-16">
					{industriesArray?.map((industry: IndustrySpecificData) =>
						renderIndustryContent(industry, language)
					)}
				</div>
			</div>
		</>
	);
}
