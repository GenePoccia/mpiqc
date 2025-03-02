import "../../app/globals.css";
import { LocationSectionData, Location, SanityImage } from "@/types/sanityTypes";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
	return builder.image(source);
}

const renderLocations = (location: Location, language: 'en' | 'fr', index: number) => {

	return (
		<div key={`${location?._key}_` + index}>
			<div className="flex flex-col items-center">
				<img src="/images/globe.svg" alt="globe" />
				<span className="mt-4" >{location.city?.[language]}</span>

				<div className="text-left mt-4">
					<div className="flex flex-row my-2 w-3xs items-start gap-6">
						<img src="/images/map-pin.svg" alt="map pin" />
						<span>{location?.address?.[language]}</span>
					</div>

					<div className="flex flex-row my-2 items-start gap-6">
						<img src="/images/phone.svg" alt="phone" />
						<div className="flex flex-col">
							{location?.phoneNumbers?.map((ele, index) => <span key={`phone_number_` + index}>{ele}</span>)}
						</div>
					</div>

					<div className="flex flex-row my-2 items-start gap-6">
						<img src="/images/mail.svg" alt="mail" />
						<span>{location.email}</span>
					</div>
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

	const imageUrl = data?.backgroundImage
		? urlFor(data.backgroundImage).url()
		: "";

	return (
		<>
			<section
				id="home"
				className="relative flex flex-col w-full min-h-screen bg-cover bg-center bg-no-repeat text-white gap-18"
				style={{
					backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
				}}
			>
				<div className="text-left w-sm pt-24 ml-16">
					<h2 className="mb-2">{subHeader}</h2>
					<h1 className="mb-4">{header}</h1>
					<p>{description}</p>
				</div>

				<div className="flex flex-wrap justify-center items-center gap-32 gap-y-12 my-12">
					{globalLocations?.map((location, index) => renderLocations(location, language, index))}
				</div>
			</section>
		</>
	);
}
