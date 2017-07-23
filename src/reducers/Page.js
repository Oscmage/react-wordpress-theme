import { REQUEST_PAGE, RECEIVED_PAGE } from "../Actions.js";

const initialState = {
  pages: {},
  slugsToId: {}
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
        }
      };

    default:
      return state;
  }
}
