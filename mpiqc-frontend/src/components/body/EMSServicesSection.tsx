import { OurCapabilitiesSectionData, Service } from "@/types/sanityTypes";
import "../../app/globals.css";


const renderService = (service: Service, language: 'en' | 'fr', index: number) => {
	return (
		<div
			key={index}
			className="mx-12"
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

	const header = data?.header?.[language]
	const subHeader = data?.subHeader?.[language]

	const services = data?.services

	return (
		<>
			<section
				id="ems-services"
				className="text-left w-lg"
			>
				<span>{subHeader}</span>
				<h1>{header}</h1>
			</section>
			<section className="flex flex-row my-24">
				{services?.map((ele, index) => renderService(ele, language, index))}
			</section>
		</>
	);
}
