import jsonRequest from "./helpers/Fetch";

import { HOME_SLUG } from "./HomeSlug";
import { getSlugFromLocation } from "./helpers/Slug";

export const PAGE_SLUG_URL = "/wp-json/wp/v2/pages?slug=";
export const POST_SLUG_URL = "/wp-json/wp/v2/posts?slug=";
export const ALL_PAGES_URL = "/wp-json/wp/v2/pages/";
export const HOME_PAGE_URL = "/wp-json/wp/v2/frontpage";
export const MENU_URL = "/wp-json/wp-api-menus/v2/menus/2";

export const REQUEST_MENU = "REQUEST_MENU";
export const REQUEST_POST = "REQUEST_POST";
export const REQUEST_PAGE = "REQUEST_PAGE";
export const REQUEST_HOME_PAGE = "REQUEST_HOME_PAGE";
export const REQUEST_ALL_PAGES = "REQUEST_ALL_PAGES";
export const REQUEST_SUBSCRIBE_EMAIL = "REQUEST_SUBSCRIBE_EMAIL";

export const RECEIVED_MENU = "RECEIVED_MENU";
export const RECEIVED_POST = "RECEIVED_POST";
export const RECEIVED_PAGE = "RECEIVED_PAGE";
export const RECEIVED_HOME_PAGE = "RECEIVED_HOME_PAGE";

export const requestMenu = () => dispatch => {
  dispatch({
    type: REQUEST_MENU
  });
  return jsonRequest(MENU_URL)
    .then(data => {
      dispatch(receivedMenu(data.items));
    })
    .catch(function(err) {
      //console.log("Fetch Error menu", err);
    });
};

export const receivedMenu = menuList => {
  return {
    type: RECEIVED_MENU,
    menuList
  };
};

export const requestAllPages = () => dispatch => {
  dispatch({
    type: REQUEST_ALL_PAGES
  });
  return jsonRequest(ALL_PAGES_URL)
    .then(pages => {
      pages.forEach(page => {
        if (new URL(page.link).pathname === "/") {
          dispatch(receivedHomePage(page));
        } else {
          dispatch(receivedPage(page));
        }
      });
    })
    .catch(error => {
      // dispatch(errpssoso)
    });
};

export const requestGenericPage = location => dispatch => {
  const slug = getSlugFromLocation(location);

  if (slug === HOME_SLUG) {
    dispatch(requestHomePage());
  } else {
    dispatch(requestPage(slug));
  }
};

export const requestHomePage = () => dispatch => {
  dispatch({
    type: REQUEST_HOME_PAGE
  });

  return jsonRequest(HOME_PAGE_URL)
    .then(page => {
      dispatch(receivedHomePage(page));
    })
    .catch(error => {
      console.log("Could not load homepage");
    });
};

export const requestPage = slug => dispatch => {
  dispatch({
    type: REQUEST_PAGE,
    slug
  });

  return jsonRequest(PAGE_SLUG_URL + slug)
    .then(([page]) => {
      dispatch(receivedPage(page));
      return page.id;
    })
    .catch(error => {
      // dispatch(errpssoso)
    });
};

export const receivedPage = page => {
  return {
    type: RECEIVED_PAGE,
    page
  };
};

export const receivedHomePage = page => {
  return {
    type: RECEIVED_HOME_PAGE,
    page
  };
};

export const requestPost = slug => dispatch => {
  dispatch({
    type: REQUEST_POST,
    slug
  });

  return jsonRequest(POST_SLUG_URL + slug)
    .then(([post]) => {
      dispatch(receivedPost(post));
      return post.id;
    })
    .catch(error => {
      // dispatch(errpssoso)
    });
};

export const receivedPost = post => {
  return {
    type: RECEIVED_POST,
    post
  };
};

export const subscribeToNewsLetter = () => {
  return {
    type: REQUEST_SUBSCRIBE_EMAIL
  };
};
