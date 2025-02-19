import "../../app/globals.css";

const locations = [
	{
		id: "logo-1",
		description: "Logo 1",
		image: "https://shadcnblocks.com/images/block/logos/astro.svg",
		locationName: "location 1",
		addressIcon: "placeholder",
		address: "550 Campbell Street, Cornwall, On. Canada K6H 6T7",
		phoneIcon: "placeholder phone",
		phoneOne: "+1-613-936-2000",
		phoneTwo: "+1-855-466-7472",
		emailIcon: "placeholder email",
		email: "email@address.com",
		className: "h-7 w-auto mb-4",
	},
	{
		id: "logo-2",
		description: "Logo 2",
		image: "https://shadcnblocks.com/images/block/logos/figma.svg",
		locationName: "location 2",
		addressIcon: "placeholder",
		address: "550 Campbell Street, Cornwall, On. Canada K6H 6T7",
		phoneIcon: "placeholder phone",
		phoneOne: "+1-613-936-2000",
		phoneTwo: "+1-855-466-7472",
		emailIcon: "placeholder email",
		email: "email@address.com",
		className: "h-7 w-auto mb-4",
	},
	{
		id: "logo-3",
		description: "Logo 3",
		image: "https://shadcnblocks.com/images/block/logos/nextjs.svg",
		locationName: "location 3",
		addressIcon: "placeholder",
		address: "550 Campbell Street, Cornwall, On. Canada K6H 6T7",
		phoneIcon: "placeholder phone",
		phoneOne: "+1-613-936-2000",
		phoneTwo: "+1-855-466-7472",
		emailIcon: "placeholder email",
		email: "email@address.com",
		className: "h-7 w-auto mb-4",
	},
	{
		id: "logo-4",
		description: "Logo 4",
		image: "https://shadcnblocks.com/images/block/logos/nextjs.svg",
		locationName: "location 4",
		addressIcon: "placeholder",
		address: "550 Campbell Street, Cornwall, On. Canada K6H 6T7",
		phoneIcon: "placeholder phone",
		phoneOne: "+1-613-936-2000",
		phoneTwo: "+1-855-466-7472",
		emailIcon: "placeholder email",
		email: "email@address.com",
		className: "h-7 w-auto mb-4",
	},
];
interface Location {
	id: string;
	description: string;
	image: string;
	className: string;
	locationName: string;
	addressIcon: string;
	address: string;
	phoneIcon: string;
	phoneOne: string;
	phoneTwo: string;
	emailIcon: string;
	email: string;
}

const renderLocations = (location: Location, index: number) => {
	return (
		<div key={`${location?.id}_` + index}>
			<div className="flex flex-col items-center">
				<img
					src={location.image}
					alt={location.description}
					className={location.className}
				/>
				<span>{location.locationName}</span>
				<div className="my-2 w-3xs">
					<span className="mr-2">i</span>
					<span>{location.address}</span>
				</div>
				<div className="flex flex-row my-2">
					<span className="mr-2">i</span>
					<div className="flex flex-col">
						<span>{location.phoneOne}</span>
						<span>{location.phoneTwo}</span>
					</div>
				</div>
				<div className="my-2">
					<span className="mr-2">i</span>
					<span>{location.email}</span>
				</div>
			</div>
		</div>
	);
};

export default async function GlobalLocations() {
	return (
		<>
			<section
				id="locations"
				className="text-left w-sm"
			>
				<span>Want to Find Us?</span>
				<h1>Our Global Locations</h1>
			</section>
			<section className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 my-12">
				{locations.map((location, index) => renderLocations(location, index))}
			</section>
		</>
	);
}
