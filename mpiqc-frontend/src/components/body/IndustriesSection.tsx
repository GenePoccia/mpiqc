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
			className="min-h-[50vh] flex items-center mt-24 lg:nt-0 justify-center"
		>
			{industry && imageFirstMagazine(industry, language)}
		</section>
	);
}
