import { getRequest, postRequest } from "./helpers/Fetch";

import { HOME_SLUG } from "./HomeSlug";
import { getSlugFromLocation } from "./helpers/Slug";

export const PAGE_SLUG_URL = "/wp-json/wp/v2/pages?slug=";
export const POST_SLUG_URL = "/wp-json/wp/v2/posts?slug=";
export const ALL_PAGES_URL = "/wp-json/wp/v2/pages/";
export const HOME_PAGE_URL = "/wp-json/wp/v2/frontpage";
export const SUBSCRIBE_URL = "/wp-json/wp/v2/newsletter";
export const MENU_URL = "/wp-json/wp-api-menus/v2/menus/3";
export const PAGES_EXTRA_FIELDS_URL = "/wp-json/acf/v3/pages/";

export const REQUEST_MENU = "REQUEST_MENU";
export const REQUEST_POST = "REQUEST_POST";
export const REQUEST_PAGE = "REQUEST_PAGE";
export const REQUEST_HOME_PAGE = "REQUEST_HOME_PAGE";
export const REQUEST_ALL_PAGES = "REQUEST_ALL_PAGES";
export const REQUEST_SUBSCRIBE_EMAIL = "REQUEST_SUBSCRIBE_EMAIL";
export const REQUEST_PAGE_EXTRA = "REQUEST_PAGE_EXTRA";

export const RECEIVED_MENU = "RECEIVED_MENU";
export const RECEIVED_POST = "RECEIVED_POST";
export const RECEIVED_PAGE = "RECEIVED_PAGE";
export const RECEIVED_HOME_PAGE = "RECEIVED_HOME_PAGE";
export const RECEIVED_SUBSCRIBE_EMAIL = "RECEIVED_SUBSCRIBE_EMAIL";
export const RECEIVED_PAGE_EXTRA = "RECEIVED_PAGE_EXTRA";

export const requestMenu = () => dispatch => {
  dispatch({
    type: REQUEST_MENU
  });
  return getRequest(MENU_URL)
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
  return getRequest(ALL_PAGES_URL)
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

  return getRequest(HOME_PAGE_URL)
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

  return getRequest(PAGE_SLUG_URL + slug)
    .then(([page]) => {
      dispatch(receivedPage(page));
      dispatch(requestPageExtra(page.id));
      return page.id;
    })
    .catch(error => {
      // dispatch(errpssoso)
    });
};

export const requestPageExtra = pageId => dispatch => {
  dispatch({
    type: REQUEST_PAGE_EXTRA
  });

  return getRequest(PAGES_EXTRA_FIELDS_URL + pageId)
    .then(fields => {
      dispatch(receivedPageExtra(pageId, fields.acf));
      return fields.acf;
    })
    .catch(error => {
      // dispatch(errpssoso)
    });
};

export const receivedPageExtra = (pageId, acf) => {
  return {
    type: RECEIVED_PAGE_EXTRA,
    pageId,
    acf
  };
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

  return getRequest(POST_SLUG_URL + slug)
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

export const subscribeToNewsLetter = (
  firstName,
  surname,
  email
) => dispatch => {
  dispatch({
    type: REQUEST_SUBSCRIBE_EMAIL
  });

  var data = new URLSearchParams();
  data.append("first_name", firstName);
  data.append("surname", surname);
  data.append("email", email);

  return postRequest(SUBSCRIBE_URL, data)
    .then(() => {
      dispatch(receivedSubscribeEmail(true));
    })
    .catch(error => {
      // Skicka error shake stuff
    });
};

export const receivedSubscribeEmail = bool => {
  return {
    type: RECEIVED_SUBSCRIBE_EMAIL
  };
};
