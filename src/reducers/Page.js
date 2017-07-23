import { REQUEST_PAGE, RECEIVED_PAGE, RECEIVED_HOME_PAGE } from "../Actions.js";
import { HOME_SLUG } from "./../HomeSlug";

const initialState = {
  pages: {},
  slugsToId: {},
  pageLoaded: false
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PAGE:
      return {
        ...state
      };

    case RECEIVED_PAGE:
      return {
        ...state,
        pages: {
          ...state.pages,
          [action.page.id]: action.page
        },
        slugsToId: {
          ...state.slugsToId,
          [action.page.slug]: action.page.id
        },
        pageLoaded: true
      };
    case RECEIVED_HOME_PAGE:
      return {
        ...state,
        pages: {
          ...state.pages,
          [action.page.id]: action.page
        },
        slugsToId: {
          ...state.slugsToId,
          [HOME_SLUG]: action.page.id
        },
        pageLoaded: true
      };

    default:
      return state;
  }
}
