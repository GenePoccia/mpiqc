import "./globals.css";
import React from "react";
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

const Home = () => {

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

export default Home