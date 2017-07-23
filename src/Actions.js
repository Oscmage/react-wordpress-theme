import jsonRequest from "./helpers/Fetch";

export const PAGE_SLUG_URL = "/wp-json/wp/v2/pages?slug=";
export const POST_SLUG_URL = "/wp-json/wp/v2/posts?slug=";
export const ALL_PAGES_URL = "/wp-json/wp/v2/pages/";
export const MENU_URL = "/wp-json/wp-api-menus/v2/menus/2";

export const RECEIVED_MENU = "RECEIVED_MENU";
export const REQUEST_POST = "REQUEST_POST";
export const RECEIVED_POST = "RECEIVED_POST";
export const REQUEST_PAGE = "REQUEST_PAGE";
export const RECEIVED_PAGE = "RECEIVED_PAGE";
export const REQUEST_ALL_PAGES = "REQUEST_ALL_PAGES";

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
        dispatch(receivedPage(page));
      });
    })
    .catch(error => {
      // dispatch(errpssoso)
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
