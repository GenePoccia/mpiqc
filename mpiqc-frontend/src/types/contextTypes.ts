import {
	CategoryInterface,
	WelcomeSectionData,
	WhoWeAreSectionData,
	OurCapabilitiesSectionData,
	CertificationSectionData,
	LocationSectionData,
	WhyUsSectionData,
	MeetTheTeamSectionData,
	ContactUsSectionData,
	IndustriesSectionData,
	FooterData,
	SanityImage,
} from "./sanityTypes";
import { Dispatch, SetStateAction } from "react";

export interface GlobalContextType {
	categories: CategoryInterface[];
	headerLogo: SanityImage | null;
	language: "en" | "fr";
	setLanguage: Dispatch<SetStateAction<"en" | "fr">>;
	welcomeData: WelcomeSectionData | null;
	whoWeAreData: WhoWeAreSectionData | null;
	ourCapabilitiesData: OurCapabilitiesSectionData | null;
	certificationsData: CertificationSectionData | null;
	locationsData: LocationSectionData | null;
	industriesData: IndustriesSectionData | null;
	whyUsData: WhyUsSectionData | null;
	meetTheTeamData: MeetTheTeamSectionData | null;
	contactUsData: ContactUsSectionData | null;
	footerData: FooterData | null;
}
