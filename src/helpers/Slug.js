import { HOME_SLUG } from "./../HomeSlug";

export const getSlugFromLocation = location => {
  if (location.pathname === "/") {
    return HOME_SLUG;
  }
  return location.pathname.slice(1, -1);
};
