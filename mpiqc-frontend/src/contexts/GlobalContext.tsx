"use client";

import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";

import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

import { options } from "../lib/sanityOptions";
import {
	NAVIGATION_QUERY,
	WELCOME_QUERY,
	WHO_WE_ARE_QUERY,
	OUR_CAPABILITIES_QUERY,
	CERTIFICATIONS_QUERY,
	LOCATIONS_QUERY,
	WHY_US_QUERY,
	MEET_THE_TEAM_QUERY,
	CONTACT_US_QUERY,
} from "../lib/sanityQueries";
import { GlobalContextType } from "../types/contextTypes";
import {
	CategoryInterface,
	WelcomeSectionData,
	WhoWeAreSectionData,
	ourCapabilitiesSectionData,
	CertificationSectionData,
	LocationSectionData,
	WhyUsSectionData,
	MeetTheTeamSectionData,
	ContactUsSectionData,
} from "../types/sanityTypes";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface ProviderProps {
	children: ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
	const [categories, setCategories] = useState<CategoryInterface[]>([]);
	const [language, setLanguage] = useState<"en" | "fr">("en");
	const [welcomeData, setWelcomeData] = useState({});
	const [whoWeAreData, setWhoWeAreData] = useState({});
	const [ourCapabilitiesData, setOurCapabilitiesData] = useState({});
	const [certificationsData, setCertificationsData] = useState({});
	const [locationsData, setLocationsData] = useState({});
	const [whyUsData, setWhyUsData] = useState({});
	const [meetTheTeamData, setMeetTheTeamData] = useState({});
	const [contactUsData, setContactUsData] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [
					categoriesResult,
					welcomePage,
					whoWeAre,
					ourCapabilities,
					certifications,
					locations,
					whyUs,
					meetTheTeam,
					contactUs,
				] = await Promise.all([
					client.fetch<SanityDocument[]>(NAVIGATION_QUERY, {}, options),
					client.fetch<WelcomeSectionData[]>(WELCOME_QUERY, {}, options),
					client.fetch<WhoWeAreSectionData[]>(WHO_WE_ARE_QUERY, {}, options),
					client.fetch<ourCapabilitiesSectionData[]>(
						OUR_CAPABILITIES_QUERY,
						{},
						options
					),
					client.fetch<CertificationSectionData[]>(
						CERTIFICATIONS_QUERY,
						{},
						options
					),
					client.fetch<LocationSectionData[]>(LOCATIONS_QUERY, {}, options),
					client.fetch<WhyUsSectionData[]>(WHY_US_QUERY, {}, options),
					client.fetch<MeetTheTeamSectionData[]>(
						MEET_THE_TEAM_QUERY,
						{},
						options
					),
					client.fetch<ContactUsSectionData[]>(CONTACT_US_QUERY, {}, options),
				]);

				setCategories(categoriesResult[0]?.navigationCategories || []);
				setWelcomeData(welcomePage[0]);
				setWhoWeAreData(whoWeAre[0]);
				setOurCapabilitiesData(ourCapabilities[0]);
				setCertificationsData(certifications[0]);
				setLocationsData(locations[0]);
				setWhyUsData(whyUs[0]);
				setMeetTheTeamData(meetTheTeam[0]);
				setContactUsData(contactUs[0]);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const value = {
		categories,
		language,
		setLanguage,
		welcomeData,
		whoWeAreData,
		ourCapabilitiesData,
		certificationsData,
		locationsData,
		whyUsData,
		meetTheTeamData,
		contactUsData,
	};

	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
};

export const useGlobalContext = (): GlobalContextType => {
	const context = useContext(GlobalContext);
	if (!context) {
		throw new Error("useGlobalContext must be used within a Provider");
	}
	return context;
};
