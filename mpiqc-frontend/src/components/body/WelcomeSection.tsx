import Header from "../Header";
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
			className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
			style={{
				backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
			}}
		>
			<Header />
			<div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[1440px] w-[90%] sm:w-[70%] p-4  rounded-lg text-left">
				<h1 className="text-4xl font-bold sm:text-3xl text-white mb-4">
					{headerText}
				</h1>
				<p className="border-l-2 border-white pl-6 text-white">
					{paragraphText}
				</p>
			</div>
		</section>
	);
}
