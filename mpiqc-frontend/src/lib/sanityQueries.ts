const createQuery = (type: string) => `*[_type == "${type}"] { ... }`;

export const NAVIGATION_QUERY = createQuery("navigation");
export const WELCOME_QUERY = createQuery("welcomeSection");
export const WHO_WE_ARE_QUERY = createQuery("whoWeAre");
export const OUR_CAPABILITIES_QUERY = createQuery("ourCapabilities");
export const CERTIFICATIONS_QUERY = createQuery("certifications");
export const LOCATIONS_QUERY = createQuery("locations");
export const INDUSTRIES_QUERY = createQuery("industries");
export const WHY_US_QUERY = createQuery("whyUs");
export const MEET_THE_TEAM_QUERY = createQuery("meetTheTeam");
export const CONTACT_US_QUERY = createQuery("contactUs");
