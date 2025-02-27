import "../../app/globals.css";
import { WhyUsSectionData } from "@/types/sanityTypes";
import { textFirstMagazine } from "../reusable/magazines";

export default function WhyChooseUs({
	data,
	language,
}: {
	data: WhyUsSectionData | null;
	language: "en" | "fr";
}) {
	return (
		<section id="choose-us">
			{data && textFirstMagazine(data?.magazineContent, language)}
		</section>
	);
}
