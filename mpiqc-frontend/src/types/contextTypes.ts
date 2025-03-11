import {
	CategoryInterface,
	WelcomeSectionData,
	WhoWeAreSectionData,
	OurCapabilitiesSectionData,
	BlogSectionData,
	CertificationSectionData,
	LocationSectionData,
	WhyUsSectionData,
	MeetTheTeamSectionData,
	ContactUsSectionData,
	IndustriesSectionData,
	FooterData,
	SanityImage,
	WarrantyCalloutInterface,
	PartialBlogPostData,
} from "./sanityTypes";
import { Dispatch, SetStateAction } from "react";

export interface GlobalContextType {
	categories: CategoryInterface[];
	warrantyCallout: WarrantyCalloutInterface | null;
	headerLogo: SanityImage | null;
	language: "en" | "fr";
	setLanguage: Dispatch<SetStateAction<"en" | "fr">>;
	welcomeData: WelcomeSectionData | null;
	whoWeAreData: WhoWeAreSectionData | null;
	ourCapabilitiesData: OurCapabilitiesSectionData | null;
	blogSectionData: BlogSectionData | null;
	partialBlogPostData: PartialBlogPostData[] | null;
	certificationsData: CertificationSectionData | null;
	locationsData: LocationSectionData | null;
	industriesData: IndustriesSectionData | null;
	whyUsData: WhyUsSectionData | null;
	meetTheTeamData: MeetTheTeamSectionData | null;
	contactUsData: ContactUsSectionData | null;
	footerData: FooterData | null;
}
