import { MagazineContent, SanityImage } from "@/types/sanityTypes";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
	return builder.image(source);
}
export const imageFirstMagazine = (
	magazine: MagazineContent,
	language: "en" | "fr"
) => {
	const list = magazine?.bulletedList;
	const imageUrl = magazine?.image ? urlFor(magazine?.image).url() : "";

	return (
		<div className="grid lg:grid-cols-2 items-stretch h-full gap-16 mb-12 lg:mt-0 lg:mb-0">
			<div className="h-full">
				{magazine?.image && (
					<img
						src={imageUrl}
						alt={magazine?.image?.alt}
						className="w-full h-full max-w-[500px] h-auto max-h-[350px] rounded-3xl object-cover"
					/>
				)}
			</div>

			<div className="flex flex-col text-left lg:items-start lg:text-left h-full">
				<h2>{magazine?.subHeader?.[language]}</h2>
				<h1 className="my-4 max-w-sm font-medium">
					{magazine?.header?.[language]}
				</h1>
				<p className="mb-8 max-w-md text-muted-foreground">
					{magazine?.paragraph?.[language]}
				</p>
				{list && (
					<ul className="list-disc">
						{list.map((ele) => (
							<li key={ele._key}>{ele[language]}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export const textFirstMagazine = (
	magazine: MagazineContent,
	language: "en" | "fr"
) => {
	const list = magazine?.bulletedList;
	const imageUrl = magazine?.image ? urlFor(magazine?.image).url() : "";
	return (
		<div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-stretch h-full gap-12 mb-12 lg:mb-0">
			<div className="flex flex-col text-left lg:items-start lg:text-left h-full">
				<h2>{magazine?.subHeader?.[language]}</h2>
				<h1 className="my-4 max-w-sm font-medium">
					{magazine?.header?.[language]}
				</h1>
				<p className="mb-8 max-w-md text-muted-foreground">
					{magazine?.paragraph?.[language]}
				</p>
				{list && (
					<ul className="list-disc">
						{list.map((ele) => (
							<li key={ele._key}>{ele[language]}</li>
						))}
					</ul>
				)}
			</div>
			<div className="h-full">
				{magazine?.image && (
					<img
						src={imageUrl}
						alt={magazine?.image?.alt}
						className="w-full h-full max-w-[500px] h-auto max-h-[350px] rounded-3xl object-cover"
					/>
				)}
			</div>
		</div>
	);
};

export const meetTheTeamMagazine = (
	magazine: MagazineContent,
	language: "en" | "fr"
) => {
	const imageUrl = magazine?.image ? urlFor(magazine?.image).url() : "";

	return (
		<div className="flex flex-col lg:flex-row gap-2 lg:gap-24 items-center justify-center h-full w-full max-w-screen-lg mx-auto">
			<div className="flex items-center justify-center">
				{magazine?.image && (
					<img
						src={imageUrl}
						alt={magazine?.image?.alt}
						className="max-w-[130px] sm:max-w-[200px] max-h-[130px] sm:max-h-[200px] rounded-3xl object-contain"
					/>
				)}
			</div>

			<div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full">
				<h2 className="mb-4">{magazine?.header?.[language]}</h2>
				<h3 className="mb-4">{magazine?.subHeader?.[language]}</h3>
				<p className="max-w-md text-muted-foreground text-rgba(179, 179, 179, 1)">
					{magazine?.paragraph?.[language]}
				</p>
			</div>
		</div>
	);
};
