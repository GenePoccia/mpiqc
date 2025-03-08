import { OurCapabilitiesSectionData, Service } from "@/types/sanityTypes";
import { textFirstMagazine } from "../reusable/magazines";

import "../../app/globals.css";

const renderService = (
	service: Service,
	language: "en" | "fr",
	index: number
) => {
	return (
		<div
			key={index}
			className="text-left"
		>
			<h3 className="mb-6 font-bold">{service?.service?.[language]}</h3>
			<p>{service?.description[language]}</p>
		</div>
	);
};

export default function EMSServices({
	data,
	language,
}: {
	data: OurCapabilitiesSectionData | null;
	language: "en" | "fr";
}) {
	const magazineContent = data?.magazineContent;
	const services = data?.services;

	return (
		<>
			<section
				id="capabilities"
				className="min-h-[50vh] flex items-center lg:nt-0 justify-center mx-12 md:mx-0 lg:mx-0"
			>
				{magazineContent && textFirstMagazine(magazineContent, language)}
			</section>
			<section
				id="warranty"
				className="min-h-[50vh] flex items-center justify-center"
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-[1048px] gap-12 mt-24 mx-12">
					{services?.map((ele, index) => renderService(ele, language, index))}
				</div>
			</section>
		</>
	);
}
