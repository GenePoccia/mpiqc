interface MenuItem {
	links: {
		text: string;
		url: string;
	}[];
}

interface FooterProps {
	logo?: {
		url: string;
		src: string;
		alt: string;
		title: string;
	};
	tagline?: string;
	menuItems?: MenuItem[];
	copyright?: string;
}

const Footer = ({
	menuItems = [
		{
			links: [
				{ text: "info@MPIQC.com", url: "" },
				{ text: "+1-855-466-7472", url: "" },
				{ text: "social media links", url: "" },
			],
		},
	],
	copyright = "© 2025 Copyright. All rights reserved.",
}: FooterProps) => {
	return (
		<section className="py-32">
			<div className="container mx-auto px-4">
				<footer>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center text-center md:text-left">
						<div className="flex flex-col items-center md:items-start mb-8 lg:mb-0">
							<div className="flex items-center gap-2">logo here</div>
						</div>
						{menuItems.map((section, sectionIdx) => (
							<div
								key={sectionIdx}
								className={`flex flex-col ${
									sectionIdx === menuItems.length - 1
										? "md:items-end md:text-right items-center text-center"
										: "items-center md:items-start"
								}`}
							>
								<ul className="space-y-4 text-muted-foreground">
									{section.links.map((link, linkIdx) => (
										<li
											key={linkIdx}
											className="font-medium hover:text-primary"
										>
											<a href={link.url}>{link.text}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="mt-24 flex flex-col md:flex-row justify-center items-center text-center gap-4 border-t pt-8 text-sm font-medium text-muted-foreground">
						<p className="w-full text-center">{copyright}</p>
					</div>
				</footer>
			</div>
		</section>
	);
};

export default Footer;
