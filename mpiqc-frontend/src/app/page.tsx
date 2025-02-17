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
		<main>
			<WelcomeSection />
			<WhoWeAreSection />
			<EMSServices />
			<Certifications />
			<GlobalLocations />
			<Industries />
			<WhyChooseUs />
			<OurTeam />
			<Contact />
		</main>
	);
}
