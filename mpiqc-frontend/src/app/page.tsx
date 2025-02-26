"use client";

import "./globals.css";
import React from "react";
import {
	Certifications,
	// Contact,
	EMSServices,
	GlobalLocations,
	Industries,
	// OurTeam,
	WelcomeSection,
	WhoWeAreSection,
	// WhyChooseUs,
} from "../components/body";
import { useGlobalContext } from "../contexts/GlobalContext";

const Home = () => {
	const { 		
		welcomeData,
		language,
		whoWeAreData,
		ourCapabilitiesData,
		certificationsData,
		locationsData,
		industriesData,
		whyUsData,
		//meetTheTeamData,
		//contactUsData 
	} = 
		useGlobalContext();

	return (
		<main>
			{welcomeData && <WelcomeSection data={welcomeData} language={language}/>}
			{whoWeAreData && <WhoWeAreSection data={whoWeAreData} language={language}/> }
			{ourCapabilitiesData && <EMSServices data={ourCapabilitiesData} language={language}/>}
			{certificationsData && <Certifications data={certificationsData} language={language}/>}
			{locationsData && <GlobalLocations data={locationsData} language={language}/>}
			{whyUsData && industriesData && <Industries data={whyUsData} industriesData={industriesData} language={language}/>}
			{/*<WhyChooseUs data={meetTheTeamData} language={language}/>
			<OurTeam data={welcomeData} language={language}/>
			<Contact data={contactUsData} language={language} /> */}
		</main>
	);
}

export default Home