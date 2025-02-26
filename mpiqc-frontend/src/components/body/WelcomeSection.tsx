import { WelcomeSectionData } from "@/types/sanityTypes";

export default function WelcomeSection({
	data,
	language,
}: {
	data: WelcomeSectionData | null;
	language: "en" | "fr";
}) {
	const headerText = data?.header[language];
	const paragraphText = data?.paragraph[language];

	return (
		<section
			id="home"
			className="relative min-h-screen p-6"
		>
			<div className="absolute text-left bottom-32 left-6 space-y-4 max-w-[90%] sm:max-w-[70%]">
				<h1 className="text-4xl font-bold sm:text-3xl">{headerText}</h1>
				<p className="border-l-2 border-white pl-6">{paragraphText}</p>
			</div>
		</section>
	);
}
