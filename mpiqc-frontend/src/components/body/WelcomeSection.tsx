import { WelcomeSectionData, SanityImage } from "@/types/sanityTypes";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
	return builder.image(source);
}

export default function WelcomeSection({
	data,
	language,
}: {
	data: WelcomeSectionData | null;
	language: "en" | "fr";
}) {
	const headerText = data?.header[language];
	const paragraphText = data?.paragraph[language];

	const imageUrl = data?.backgroundImage
		? urlFor(data.backgroundImage).url()
		: "";

	return (
		<section
			id="home"
			className="relative min-h-screen bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
			}}
		>
			<div className="absolute text-left bottom-32 left-6 space-y-4 max-w-[90%] sm:max-w-[70%]  p-4 rounded-lg">
				<h1 className="text-4xl font-bold sm:text-3xl text-white">
					{headerText}
				</h1>
				<p className="border-l-2 border-white pl-6 text-white">
					{paragraphText}
				</p>
			</div>
		</section>
	);
}
