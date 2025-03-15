import "../../app/globals.css";
import {
	LocationSectionData,
	Location,
	SanityImage,
} from "@/types/sanityTypes";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
	return builder.image(source);
}

const renderLocations = (
	location: Location,
	language: "en" | "fr",
	index: number
) => {
	return (
		<div key={`${location?._key}_` + index}>
			<div className="flex flex-col items-center justify-center h-full">
				<img
					src="/images/globe.svg"
					alt="globe"
					className="max-w-[150px] lg:max-w-[200px] w-full"
				/>
				<div className="text-left mt-4">
					<h3 className="my-6 font-bold">{location.city?.[language]}</h3>
					<div className="flex flex-row my-2 max-w-[210px] lg:w-[90%] items-start gap-6">
						<img
							src="/images/map-pin.svg"
							alt="map pin"
						/>
						<span>{location?.address?.[language]}</span>
					</div>

					<div className="flex flex-row my-2 items-start gap-6">
						<img
							src="/images/phone.svg"
							alt="phone"
						/>
						<div className="flex flex-col">
							{location?.phoneNumbers?.map((ele, index) => (
								<span key={`phone_number_` + index}>{ele}</span>
							))}
						</div>
					</div>

					<div className="flex flex-row my-2 items-start gap-6">
						<img
							src="/images/mail.svg"
							alt="mail"
						/>
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
	const header = data?.header?.[language];
	const subHeader = data?.subHeader?.[language];
	const description = data?.description?.[language];
	const globalLocations = data?.globalLocations;

	const imageUrl = data?.backgroundImage
		? urlFor(data.backgroundImage).url()
		: "";

	return (
		<>
			<section
				id="locations"
				className="relative flex flex-col items-center justify-center w-full min-h-screen bg-cover bg-center bg-no-repeat text-black gap-18"
				style={{
					backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
				}}
			>
				<div className="max-w-[1440px] ml-8 lg:mx-8">
					<div className="text-left w-[70%] sm:w-md pt-24 ">
						<h2 className="mb-2">{subHeader}</h2>
						<h1 className="mb-4">{header}</h1>
						<p>{description}</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-12 gap-y-12 my-18 mx-auto">
						{globalLocations?.map((location, index) =>
							renderLocations(location, language, index)
						)}
					</div>
				</div>
			</section>
		</>
	);
}
