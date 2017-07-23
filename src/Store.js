import { compose, createStore, combineReducers } from "redux";

import MenuReducer from "./reducers/Menu";
import PostReducer from "./reducers/Post";

const mainReducer = combineReducers({
  menu: MenuReducer,
  posts: PostReducer
});

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

let store = createStore(mainReducer, enhancers);

export default store;
