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
		<section
			id="why-us"
			className="min-h-[50vh] flex items-center lg:nt-0 justify-center  mx-12 md:mx-0 lg:mx-0"
		>
			{data && textFirstMagazine(data?.magazineContent, language)}
		</section>
	);
}
