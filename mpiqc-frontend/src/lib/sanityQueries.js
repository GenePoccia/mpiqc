export const INDUSTRIES_QUERY = `*[_type == "industryPages"] {
  title,
  slug,
  text
}`;

export const NAVIGATION_QUERY = `*[_type == "navigation"] {
    title,
    navigationCategories
}`;
