import { compose, createStore, combineReducers, applyMiddleware } from "redux";

import MenuReducer from "./reducers/Menu";
import PostReducer from "./reducers/Post";
import PageReducer from "./reducers/Page";
import thunk from "redux-thunk";

const mainReducer = combineReducers({
  menu: MenuReducer,
  posts: PostReducer,
  pages: PageReducer
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

let store = createStore(mainReducer, enhancers);

export default store;
