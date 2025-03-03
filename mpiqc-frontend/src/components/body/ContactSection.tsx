import "../../app/globals.css";
import { ContactUsSectionData, SanityImage } from "@/types/sanityTypes";

import ContactForm from "../reusable/contactForm";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
	return builder.image(source);
}

export default function Contact({
	data,
	language,
}: {
	data: ContactUsSectionData | null;
	language: "en" | "fr";
}) {
	const imageUrl = data?.backgroundImage
		? urlFor(data.backgroundImage).url()
		: "";

	return (
		<section className="flex justify-center py-24 w-full min-h-screen bg-cover bg-center bg-no-repeat">
			<div
				className="flex items-center justify-center w-[90%] max-w-[1440px] min-h-screen rounded-2xl p-8"
				style={{
					backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<ContactForm
					data={data}
					language={language}
				/>
			</div>
		</section>
	);
}
