import "../../app/globals.css";
import { WhoWeAreSectionData } from "@/types/sanityTypes";


export default function WhoAreWe({
	data,
	language,
}: {
	data: WhoWeAreSectionData | null;
	language: "en" | "fr";
}) {
	const magazineContent = data?.magazineContent;

	const header = magazineContent?.header?.[language]
	const paragraph = magazineContent?.paragraph?.[language]
	const subHeader = magazineContent?.subHeader?.[language]

	return (
		<section
			id="story"
			className="min-h-[70vh] flex items-center"
		>
			<div className="container mx-24">
				<div className="grid gap-36 lg:grid-cols-2 h-full items-stretch">
					<div className="h-full">
						{/* <img
							src={image.src}
							alt={image.alt}
							className="w-full h-full rounded-md object-cover"
						/> */}
						image placeholder
					</div>
					<div className="flex flex-col items-center text-center lg:items-start lg:text-left h-full">
						<h3>{subHeader}</h3>
						<h2 className="my-6">{header}</h2>
						<p className="mb-8 max-w-xl text-muted-foreground">{paragraph}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
