import { type SanityDocument } from "next-sanity";
import { PortableTextBlock } from "sanity";

interface LocalizedText {
	en: string;
	fr: string;
	_key: string;
	_type: string;
}

export interface Slug {
	_type: "slug";
	current: string;
}

export interface SanityImage {
	_type: "image";
	asset: {
		_type: "reference";
		_ref: string;
	};
	alt?: string;
}
export interface IndustrySpecificData {
	image: SanityImage;
	header: LocalizedText;
	description: LocalizedText;
	_key: string;
}

export interface SocialMedia {
	image: SanityImage;
	link: string;
	alt: string;
	_id: string;
	_key: string;
}

export interface BlogPostData extends PartialBlogPostData {
	content: PortableTextBlock[];
}

export interface LocalizedPortableText {
	en: PortableTextBlock[]; // Array of Portable Text blocks
	fr: PortableTextBlock[];
}

// content structure
export interface MagazineContent {
	header: LocalizedText;
	paragraph: LocalizedText;
	subHeader: LocalizedText;
	bulletedList?: LocalizedText[];
	image?: SanityImage;
	paragraphTwo?: LocalizedPortableText;
	_id: string;
}
export interface Service {
	description: LocalizedText;
	service: LocalizedText;
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
	route: string;
	isSpecialColor: boolean;
}

export interface WarrantyCalloutInterface {
	en: PortableTextBlock[];
	fr: PortableTextBlock[];
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

export interface PartialBlogPostData {
	coverImage: SanityImage;
	excerpt: LocalizedText;
	author: string;
	date: string;
	readMore: LocalizedText;
	slug: Slug;
	postTitle: LocalizedText;
}

export interface BlogSectionData {
	header: LocalizedText;
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
	industriesList: IndustrySpecificData[];
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
	backgroundImage: SanityImage;
	subHeader: LocalizedText;
}

export interface FooterData {
	_id: string;
	title: string;
	logo: SanityImage;
	email: string;
	phone: string;
	socialMedia: SocialMedia[];
	copyright: LocalizedText;
}
