import "../../app/globals.css";
import { WhoWeAreSectionData } from "@/types/sanityTypes";
import { imageFirstMagazine } from "../reusable/magazines";


export default function WhoAreWe({
	data,
	language,
}: {
	data: WhoWeAreSectionData | null;
	language: "en" | "fr";
}) {
	const magazineContent = data?.magazineContent;

	return (
		<section
			id="story"
			className="min-h-[85vh] flex items-center justify-center"
		>
			{magazineContent && imageFirstMagazine(magazineContent, language)}
		</section>
	);
}
