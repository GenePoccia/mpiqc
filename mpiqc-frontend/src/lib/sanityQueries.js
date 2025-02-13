export const INDUSTRIES_QUERY = `*[_type == "industryPages" && slug.current == $slug][0] {
  title,
  slug,
  text
}`;

export const NAVIGATION_QUERY = `*[_type == "navigation"] {
    title,
    navigationCategories
}`;
