import { type SanityDocument } from "next-sanity";

interface LocalizedText {
	en: string;
	fr: string;
	_key: string;
	_type: string;
}

export interface SanityImage {
	_type: "image";
	asset: {
		_type: "reference";
		_ref: string;
	};
	alt?: string;
}

// content structure
export interface MagazineContent {
	header: LocalizedText;
	paragraph: LocalizedText;
	subHeader: LocalizedText;
	bulletedList?: LocalizedText[];
	image?: SanityImage;
	_id: string;
}
export interface Service {
	description: LocalizedText;
	service: LocalizedText;
}

export interface Certification {
	image: SanityImage;
	alt: string;
	_key: string;
}

export interface Location {
	address: LocalizedText;
	city: LocalizedText;
	email: string;
	phoneNumbers: Array<string>;
	_key: string;
}

export interface Navigation extends SanityDocument {
	title: string;
	logo: {
		alt: string;
		asset: {
			_ref: string;
			_type: string;
		};
	};
	navigationCategories: LocalizedText[];
}

export interface CategoryInterface {
	en: string;
	fr: string;
}

export interface DropdownItems {
	en: string;
	fr: string;
	enRoute: string;
	frRoute: string;
}

// Section Interfaces
export interface WelcomeSectionData {
	header: LocalizedText;
	paragraph: LocalizedText;
	title: string;
	backgroundImage: SanityImage;
}

export interface WhoWeAreSectionData {
	magazineContent: MagazineContent;
}

export interface OurCapabilitiesSectionData {
	magazineContent: MagazineContent;
	services: Service[];
}

export interface CertificationSectionData {
	header: LocalizedText;
	description: LocalizedText;
	title: LocalizedText;
	certifications: SanityImage[];
}

export interface LocationSectionData {
	description: LocalizedText;
	globalLocations: Location[];
	header: LocalizedText;
	subHeader: LocalizedText;
	backgroundImage: SanityImage;
}

export interface IndustriesSectionData {
	magazineContent: MagazineContent;
}

export interface WhyUsSectionData {
	magazineContent: MagazineContent;
}

export interface MeetTheTeamSectionData {
	header: LocalizedText;
	backgroundImage: SanityImage;
	teamMembers: MagazineContent[];
}

export interface ContactUsSectionData {
	paragraph: LocalizedText;
	header: LocalizedText;
	subHeader: LocalizedText;
}
