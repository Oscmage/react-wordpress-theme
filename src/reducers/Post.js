import { REQUEST_POST, RECEIVED_POST } from "../Actions.js";

const initialState = {
  posts: {}
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POST:
      return {
        ...state
      };

    case RECEIVED_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.post.id]: action.post
        }
      };

    default:
      return state;
  }
}
