import { put, take } from "redux-saga/effects";

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
  if (result.type === RECEIVED_MENU) {
    yield take([RECEIVED_HOME_PAGE, RECEIVED_PAGE, RECEIVED_POST]);
  } else {
    yield take(RECEIVED_MENU);
  }

  yield put(requestAllPages());
}
