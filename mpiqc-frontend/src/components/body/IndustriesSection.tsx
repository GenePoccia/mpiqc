import { imageFirstMagazine } from "../reusable/magazines";
import { IndustriesSectionData } from "@/types/sanityTypes";

export default function IndustriesSection({
	data,
	language,
}: {
	data: IndustriesSectionData | null;
	language: "en" | "fr";
}) {
	const industry = data?.magazineContent;

	return (
		<section
			id="industries"
			className=" p-6 flex items-center"
		>
			<div className="flex flex-col">
				{industry && imageFirstMagazine(industry, language)}
			</div>
		</section>
	);
}
