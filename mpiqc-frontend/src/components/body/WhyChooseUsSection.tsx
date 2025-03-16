import "../../app/globals.css";
import { WhyUsSectionData } from "@/types/sanityTypes";
import { PortableTextFirstMagazine } from "../reusable/magazines";

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
			className="flex items-center mt-8 lg:mt-24 lg:nt-0 justify-center  mx-12 md:mx-0 lg:mx-0"
		>
			{data && PortableTextFirstMagazine(data?.magazineContent, language)}
		</section>
	);
}
