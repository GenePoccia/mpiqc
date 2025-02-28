import { OurCapabilitiesSectionData, Service } from "@/types/sanityTypes";
import { textFirstMagazine } from "../reusable/magazines";

import "../../app/globals.css";


const renderService = (service: Service, language: 'en' | 'fr', index: number) => {
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

	console.log(data)
	const magazineContent = data?.magazineContent;
	const services = data?.services

	return (
		<>
		<section
			id="story"
			className="min-h-[30vh] flex flex-col items-center justify-center max-w-[1440px] text-pretty"
		>
			{magazineContent && textFirstMagazine(magazineContent, language)}
			<div className="flex flex-row max-w-[1048px] gap-12 mt-24 mx-12">
			{services?.map((ele, index) => renderService(ele, language, index))}
			</div>

		</section>

		</>
	);
}
