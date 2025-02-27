import { MagazineContent } from "@/types/sanityTypes";

export const imageFirstMagazine = (
	magazine: MagazineContent,
	language: "en" | "fr"
) => {
	const list = magazine?.bulletedList;

	return (
		<div className="grid lg:grid-cols-2 items-stretch h-full gap-24">
			<div className="h-full">
				{/* 
 				TODO: Put Image
 				<img
 					src={magazine.image.src}
 					alt={magazine.image.alt}
 					className="w-full h-full rounded-md object-cover"
 				/> */}{" "}
				image placeholder
			</div>

			<div className="flex flex-col items-center text-center lg:items-start lg:text-left h-full">
				<h3>{magazine?.subHeader?.[language]}</h3>
				<h2 className="my-6">{magazine?.header?.[language]}</h2>
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

export const textFirstMagazine = (
	magazine: MagazineContent,
	language: "en" | "fr"
) => {
	const list = magazine?.bulletedList;

	return (
		<div className="grid lg:grid-cols-2 items-stretch h-full gap-24">
			<div className="flex flex-col items-center text-center lg:items-start lg:text-left h-full">
				<h3>{magazine?.subHeader?.[language]}</h3>
				<h2 className="my-6">{magazine?.header?.[language]}</h2>
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
			<div className="h-full">
				{/* 
 				TODO: Put Image
 				<img
 					src={magazine.image.src}
 					alt={magazine.image.alt}
 					className="w-full h-full rounded-md object-cover"
 				/> */}
				image placeholder
			</div>
		</div>
	);
};

export const meetTheTeamMagazine = (
	magazine: MagazineContent,
	language: "en" | "fr"
) => {
	const list = magazine?.bulletedList;

	console.log(magazine);
	return (
		<div className="grid lg:grid-cols-2 items-stretch h-full gap-24">
			<div className="h-full">
				{/* 
 				TODO: Put Image
 				<img
 					src={magazine.image.src}
 					alt={magazine.image.alt}
 					className="w-full h-full rounded-md object-cover"
 				/> */}{" "}
				image placeholder
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
