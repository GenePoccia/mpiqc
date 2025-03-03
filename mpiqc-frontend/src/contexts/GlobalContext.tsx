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
	INDUSTRIES_QUERY,
	WHY_US_QUERY,
	MEET_THE_TEAM_QUERY,
	CONTACT_US_QUERY,
} from "../lib/sanityQueries";
import { GlobalContextType } from "../types/contextTypes";
import {
	CategoryInterface,
	WelcomeSectionData,
	WhoWeAreSectionData,
	OurCapabilitiesSectionData,
	CertificationSectionData,
	LocationSectionData,
	IndustriesSectionData,
	WhyUsSectionData,
	MeetTheTeamSectionData,
	ContactUsSectionData,
	SanityImage,
} from "../types/sanityTypes";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface ProviderProps {
	children: ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
	const [categories, setCategories] = useState<CategoryInterface[]>([]);
	const [headerLogo, setHeaderLogo] = useState<SanityImage | null>(null);
	const [language, setLanguage] = useState<"en" | "fr">("en");
	const [welcomeData, setWelcomeData] = useState<WelcomeSectionData | null>(
		null
	);
	const [whoWeAreData, setWhoWeAreData] = useState<WhoWeAreSectionData | null>(
		null
	);
	const [ourCapabilitiesData, setOurCapabilitiesData] =
		useState<OurCapabilitiesSectionData | null>(null);
	const [certificationsData, setCertificationsData] =
		useState<CertificationSectionData | null>(null);
	const [locationsData, setLocationsData] =
		useState<LocationSectionData | null>(null);
	const [industriesData, setIndustriesData] =
		useState<IndustriesSectionData | null>(null);
	const [whyUsData, setWhyUsData] = useState<WhyUsSectionData | null>(null);
	const [meetTheTeamData, setMeetTheTeamData] =
		useState<MeetTheTeamSectionData | null>(null);
	const [contactUsData, setContactUsData] =
		useState<ContactUsSectionData | null>(null);

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
					industries,
					whyUs,
					meetTheTeam,
					contactUs,
				] = await Promise.all([
					client.fetch<SanityDocument[]>(NAVIGATION_QUERY, {}, options),
					client.fetch<WelcomeSectionData[]>(WELCOME_QUERY, {}, options),
					client.fetch<WhoWeAreSectionData[]>(WHO_WE_ARE_QUERY, {}, options),
					client.fetch<OurCapabilitiesSectionData[]>(
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
					client.fetch<IndustriesSectionData[]>(INDUSTRIES_QUERY, {}, options),
					client.fetch<WhyUsSectionData[]>(WHY_US_QUERY, {}, options),
					client.fetch<MeetTheTeamSectionData[]>(
						MEET_THE_TEAM_QUERY,
						{},
						options
					),
					client.fetch<ContactUsSectionData[]>(CONTACT_US_QUERY, {}, options),
				]);

				setCategories(categoriesResult[0]?.navigationCategories || []);
				setHeaderLogo(categoriesResult[0]?.logo || []);
				setWelcomeData(welcomePage[0]);
				setWhoWeAreData(whoWeAre[0]);
				setOurCapabilitiesData(ourCapabilities[0]);
				setCertificationsData(certifications[0]);
				setLocationsData(locations[0]);
				setIndustriesData(industries[0]);
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
		headerLogo,
		language,
		setLanguage,
		welcomeData,
		whoWeAreData,
		ourCapabilitiesData,
		certificationsData,
		locationsData,
		industriesData,
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
