import {
  REQUEST_PAGE,
  REQUEST_HOME_PAGE,
  RECEIVED_PAGE,
  RECEIVED_HOME_PAGE,
  REQUEST_PAGE_EXTRA,
  RECEIVED_PAGE_EXTRA
} from "../Actions.js";
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

    case REQUEST_HOME_PAGE:
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

    case REQUEST_PAGE_EXTRA:
      return {
        ...state
      };
    case RECEIVED_PAGE_EXTRA:
      return {
        ...state,
        pages: {
          ...state.pages,
          [action.pageId]: {
            ...state.pages[action.pageId],
            acf: action.acf
          }
        }
      };

    default:
      return state;
  }
}
