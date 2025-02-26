import "../../app/globals.css";
import { IndustriesSectionData, WhyUsSectionData, MagazineContent } from "@/types/sanityTypes";


interface ImageInterface {
	src: string;
	alt: string;
}

interface Industry {
	heading: string;
	description: string;
	image: ImageInterface;
}

// const imageFirstMagazine = (magazine: MagazineContent, language: 'en' | 'fr') => {
// 	return (
// 		<div className="grid lg:grid-cols-2 items-stretch h-full gap-24">
// 			<div className="h-full">
// 				{/* 
// 				TODO: Put Image
// 				<img
// 					src={magazine.image.src}
// 					alt={magazine.image.alt}
// 					className="w-full h-full rounded-md object-cover"
// 				/> */} image placeholder
// 			</div>

// 			<div className="flex flex-col items-center text-center lg:items-start lg:text-left h-full">
// 				<h3>{magazine?.subHeader?.[language]}</h3>
// 				<h2 className="my-6">{magazine?.header?.[language]}</h2>
// 				<p className="mb-8 max-w-xl text-muted-foreground">
// 					{magazine?.paragraph?.[language]}
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// const textFirstMagazine = (magazine: MagazineContent, language: 'en' | 'fr') => {
// 	return (
// 		<div className="grid lg:grid-cols-2 items-stretch h-full gap-24">
// 			<div className="flex flex-col items-center text-center lg:items-start lg:text-left h-full">
// 			<h3>{magazine?.subHeader?.[language]}</h3>
// 				<h2 className="my-6">{magazine?.header?.[language]}</h2>
// 				<p className="mb-8 max-w-xl text-muted-foreground">
// 					{magazine?.paragraph?.[language]}
// 				</p>
// 			</div>
// 			<div className="h-full">
// 				{/* 
// 				TODO: Put Image
// 				<img
// 					src={magazine.image.src}
// 					alt={magazine.image.alt}
// 					className="w-full h-full rounded-md object-cover"
// 				/> */} image placeholder
// 			</div>
// 		</div>
// 	);
// };

// const renderIndustry = (magazine: MagazineContent, language: 'en' | 'fr', index: number) => {
// 	const isOdd = index % 2 !== 0;
// 	return (
// 		<div
// 			key={`${magazine?._id}_` + index}
// 			className="flex items-stretch mx-12 my-12 lg:grid-cols-2 h-full"
// 		>
// 			{isOdd ? textFirstMagazine(magazine, language) : imageFirstMagazine(magazine, language)}
// 		</div>
// 	);
// };

export default function Industries({
	// data,
	industriesData,
	// language,
}: {
	data: WhyUsSectionData | null;
	industriesData: IndustriesSectionData | null;
	language: "en" | "fr";
}) {


	const industry = industriesData?.industriesContent
	//const whyUs = data?.magazineContent
	
	console.log(industry)
	return (
		<section
			id="industries"
			className=" p-6 flex items-center"
		>
			<div className="flex flex-col">
				{/* {[industry, whyUs]?.map((magazine, index) => renderIndustry(magazine, language, index))} */}
			</div>
		</section>
	);
}
