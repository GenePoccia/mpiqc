import "../../app/globals.css";

const logos = [
	{
		id: "logo-1",
		description: "Logo 1",
		image: "https://shadcnblocks.com/images/block/logos/astro.svg",
		className: "h-7 w-auto",
	},
	{
		id: "logo-2",
		description: "Logo 2",
		image: "https://shadcnblocks.com/images/block/logos/figma.svg",
		className: "h-7 w-auto",
	},
	{
		id: "logo-3",
		description: "Logo 3",
		image: "https://shadcnblocks.com/images/block/logos/nextjs.svg",
		className: "h-7 w-auto",
	},
];

export default async function Certifications() {
	return (
		<section
			id="certifications"
			className="my-24"
		>
			<h3>Certifications</h3>
			<div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mt-12">
				{logos.map((logo) => (
					<div key={logo.id}>
						<div>
							<div>
								<img
									src={logo.image}
									alt={logo.description}
									className={logo.className}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
