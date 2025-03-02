"use client";

import "./globals.css";
import React from "react";
import {
	Certifications,
	Contact,
	EMSServices,
	GlobalLocations,
	IndustriesSection,
	OurTeam,
	WelcomeSection,
	WhoWeAreSection,
	WhyChooseUs,
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
		meetTheTeamData,
		contactUsData 
	} = 
		useGlobalContext();

	return (
		<>
			{welcomeData && <WelcomeSection data={welcomeData} language={language}/>}
			{whoWeAreData && <WhoWeAreSection data={whoWeAreData} language={language}/> }
			{ourCapabilitiesData && <EMSServices data={ourCapabilitiesData} language={language}/>}
			{certificationsData && <Certifications data={certificationsData} language={language}/>}
			{locationsData && <GlobalLocations data={locationsData} language={language}/>}
			{industriesData && <IndustriesSection data={industriesData} language={language}/>}
			{whyUsData && <WhyChooseUs data={whyUsData} language={language}/>}
			{meetTheTeamData && <OurTeam data={meetTheTeamData} language={language}/>}
			{contactUsData && <Contact data={contactUsData} language={language} /> }
		</>
	);
}

export default Home