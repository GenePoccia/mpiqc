interface MenuItem {
	title: string;
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
	bottomLinks?: {
		text: string;
		url: string;
	}[];
}

const Footer = ({
	menuItems = [
		{
			title: "Location",
			links: [
				{ text: "1851 Seymour Street, North Bay,ON, Canada P1A 0C7", url: "" },
			],
		},
		{
			title: "Contact",
			links: [
				{ text: "info@pilotnco.com", url: "#" },
				{ text: "1-705-497-3715", url: "#" },
			],
		},
	],
	copyright = "© 2025 Copyright. All rights reserved.",
	bottomLinks = [
		{ text: "Terms and Conditions", url: "#" },
		{ text: "Privacy Policy", url: "#" },
	],
}: FooterProps) => {
	return (
		<section className="py-32">
			<div className="container mx-auto px-4">
				<footer>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center text-center md:text-left">
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
								<h3 className="mb-4 font-bold">{section.title}</h3>
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
					<div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-8 text-sm font-medium text-muted-foreground">
						<p>{copyright}</p>
						<ul className="flex gap-4">
							{bottomLinks.map((link, linkIdx) => (
								<li
									key={linkIdx}
									className="underline hover:text-primary"
								>
									<a href={link.url}>{link.text}</a>
								</li>
							))}
						</ul>
					</div>
				</footer>
			</div>
		</section>
	);
};

export default Footer;
