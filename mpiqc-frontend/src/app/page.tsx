import "./globals.css";
import {
	Certifications,
	Contact,
	EMSServices,
	GlobalLocations,
	Industries,
	OurTeam,
	WelcomeSection,
	WhoWeAreSection,
	WhyChooseUs,
} from "../components/body";

export default async function Home() {
	return (
		<main className="text-3xl font-bold underline">
			<Certifications />
			<Contact />
			<EMSServices />
			<GlobalLocations />
			<Industries />
			<OurTeam />
			<WelcomeSection />
			<WhoWeAreSection />
			<WhyChooseUs />
		</main>
	);
}
