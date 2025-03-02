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
	console.log(magazine);
	const list = magazine?.bulletedList;
	const imageUrl = magazine?.image ? urlFor(magazine?.image).url() : "";

	return (
		<div className="grid lg:grid-cols-2 items-stretch h-full gap-16">
			<div className="h-full">
				{magazine?.image && (
					<img
						src={imageUrl}
						alt={magazine?.image?.alt}
						className="w-full h-full max-w-[500px] h-auto max-h-[350px] rounded-3xl object-cover"
					/>
				)}
			</div>

			<div className="flex flex-col items-center text-center lg:items-start lg:text-left h-full">
				<h3>{magazine?.subHeader?.[language]}</h3>
				<h2 className="my-6">{magazine?.header?.[language]}</h2>
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
		<div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-stretch h-full gap-12">
			<div className="flex flex-col items-center text-center lg:items-start lg:text-left h-full">
				<h3>{magazine?.subHeader?.[language]}</h3>
				<h2 className="my-6">{magazine?.header?.[language]}</h2>
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
	const list = magazine?.bulletedList;
	const imageUrl = magazine?.image ? urlFor(magazine?.image).url() : "";

	return (
		<div className="grid lg:grid-cols-2 items-stretch h-full ">
			<div className="h-full">
				{magazine?.image && (
					<img
						src={imageUrl}
						alt={magazine?.image?.alt}
						className="w-full h-full max-w-[500px] h-auto max-h-[350px] rounded-3xl object-cover"
					/>
				)}
			</div>

			<div className="flex flex-col items-center text-center lg:items-start lg:text-left h-full">
				<h2 className="my-6">{magazine?.header?.[language]}</h2>
				<h3>{magazine?.subHeader?.[language]}</h3>
				<p className="mb-8 max-w-xl text-muted-foreground">
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
