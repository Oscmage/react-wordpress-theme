import { put, select, take } from "redux-saga/effects";

import {
  RECEIVED_MENU,
  RECEIVED_PAGE,
  RECEIVED_HOME_PAGE,
  RECEIVED_POST,
  requestAllPages
} from "./Actions";

export default function* mySaga() {
  const result = yield take([
    RECEIVED_MENU,
    RECEIVED_HOME_PAGE,
    RECEIVED_PAGE,
    RECEIVED_POST
  ]);
  console.log("result first", result.type);
  if (result.type === RECEIVED_MENU) {
    const res = yield take([RECEIVED_HOME_PAGE, RECEIVED_PAGE, RECEIVED_POST]);
    console.log("result second", res.type);
  } else {
    const res = yield take(RECEIVED_MENU);
    console.log("result second", res.type);
  }
  console.log("Now we should get all pages....");
}
