import { compose, createStore, combineReducers } from "redux";

import MenuReducer from "./reducers/Menu";
import PostReducer from "./reducers/Post";
import PageReducer from "./reducers/Page";

const mainReducer = combineReducers({
  menu: MenuReducer,
  posts: PostReducer,
  pages: PageReducer
});

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

let store = createStore(mainReducer, enhancers);

export default store;
