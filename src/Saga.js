import { put, take } from "redux-saga/effects";

import {
  RECEIVED_MENU,
  RECEIVED_PAGE,
  RECEIVED_HOME_PAGE,
  RECEIVED_POST,
  RECEIVED_PAGE_EXTRA,
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
    const nextRes = yield take([
      RECEIVED_HOME_PAGE,
      RECEIVED_PAGE,
      RECEIVED_POST
    ]);
    if (nextRes.type === RECEIVED_HOME_PAGE || nextRes.type === RECEIVED_PAGE) {
      yield take(RECEIVED_PAGE_EXTRA);
    }
  } else if (
    result.type === RECEIVED_HOME_PAGE ||
    result.type === RECEIVED_PAGE
  ) {
    // Wait for menu and page extra
    yield take([RECEIVED_MENU, RECEIVED_PAGE_EXTRA]);
    yield take([RECEIVED_MENU, RECEIVED_PAGE_EXTRA]);
  } else {
    yield take(RECEIVED_MENU);
  }

  yield put(requestAllPages());
}
