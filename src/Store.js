import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "./Saga";

import MenuReducer from "./reducers/Menu";
import PostReducer from "./reducers/Post";
import PageReducer from "./reducers/Page";
import thunk from "redux-thunk";

export const sagaMiddleware = createSagaMiddleware();

const mainReducer = combineReducers({
  menu: MenuReducer,
  posts: PostReducer,
  pages: PageReducer
});

const enhancers = compose(
  applyMiddleware(sagaMiddleware, thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

export const store = createStore(mainReducer, enhancers);

sagaMiddleware.run(mySaga);

export default store;

// then run the saga
