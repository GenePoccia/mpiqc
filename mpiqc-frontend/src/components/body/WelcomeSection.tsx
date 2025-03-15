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
			className="relative w-full min-h-screen bg-cover bg-top bg-no-repeat flex flex-col items-center"
			style={{
				backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
			}}
		>
			<Header />
			<div className="mt-auto text-[64px] ml-4 md:ml-18 mb-8 md:mb-24 max-w-[1440px] w-[90%] rounded-lg text-left">
				<h1 className="text-4xl leading-18 w-[90%] lg:w-[30%] font-bold sm:text-3xl !text-white mb-4">
					{headerText}
				</h1>
				<p className="border-l-2 w-[90%] lg:w-[65%] border-white pl-6 !text-white">
					{paragraphText}
				</p>
			</div>
		</section>
	);
}
