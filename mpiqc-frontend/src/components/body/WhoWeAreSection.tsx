import "../../app/globals.css";

interface Hero1Props {
	badge?: string;
	heading: string;
	description: string;
	buttons?: {
		primary?: {
			text: string;
			url: string;
		};
		secondary?: {
			text: string;
			url: string;
		};
	};
	image: {
		src: string;
		alt: string;
	};
}

export default async function WhoAreWe({
	heading = "Something clever here about the company",
	description = "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.",

	image = {
		src: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
		alt: "Hero section demo image showing interface components",
	},
}) {
	return (
		<section
			id="story"
			className="min-h-[70vh] p-6 flex items-center"
		>
			<div className="container flex mx-24">
				<div className="grid items-stretch gap-36 lg:grid-cols-2 h-full">
					<img
						src={image.src}
						alt={image.alt}
						className="max-h-96 w-full h-full rounded-md object-cover"
					/>
					<div className="flex flex-col items-center text-center lg:items-start lg:text-left h-full">
						<h3>Who We Are</h3>
						<h2 className="my-6">{heading}</h2>
						<p className="mb-8 max-w-xl text-muted-foreground">{description}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
