import "../../app/globals.css";
import { LocationSectionData, Location } from "@/types/sanityTypes";



const renderLocations = (location: Location, language: 'en' | 'fr', index: number) => {

	return (
		<div key={`${location?._key}_` + index}>
			<div className="flex flex-col items-center">
				{/* <img
					src={location.image}
					alt={location.description}
					className="h-7 w-auto mb-4"
				/> */}image placeholer
				<span>{location.city?.[language]}</span>
				<div className="my-2 w-3xs">
					{/* TODO: replace with icon*/}
					<span className="mr-2">i</span>
					<span>{location?.address?.[language]}</span>
				</div>
				<div className="flex flex-row my-2">
					{/* TODO: replace with icon*/}
					<span className="mr-2">i</span>
					<div className="flex flex-col">
						{location?.phoneNumbers?.map((ele) =>  <span>{ele}</span>)}
					</div>
				</div>
				<div className="my-2">
					{/* TODO: replace with icon*/}
					<span className="mr-2">i</span>
					<span>{location.email}</span>
				</div>
			</div>
		</div>
	);
};

export default function GlobalLocations({
	data,
	language,
}: {
	data: LocationSectionData | null;
	language: "en" | "fr";
}) {

	const header = data?.header?.[language]
	const subHeader = data?.subHeader?.[language]
	const description = data?.description?.[language]
	const globalLocations = data?.globalLocations

	return (
		<>
			<section
				id="locations"
				className="text-left w-sm"
			>
				<span>{subHeader}</span>
				<h1>{header}</h1>
				<p className="text-left w-sm">{description}</p>
			</section>
			<section className="flex flex-wrap justify-center items-center gap-y-4 my-12">
				{globalLocations?.map((location, index) => renderLocations(location ,language, index))}
			</section>
		</>
	);
}
