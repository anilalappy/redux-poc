import { call, put, takeLatest } from "redux-saga/effects";
import { continentActions } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { getToDoDetailsService } from "../../service-calls/todo";

export function* getToDoDetails(action: PayloadAction<{ id: number }>):any {
  try {
    const response = yield call(getToDoDetailsService, action.payload.id);
    yield put(continentActions.setToDoDetails(response));
  } catch (error) {}
  // yield put()
}

export function* continentSaga() {
  yield takeLatest(continentActions.getToDoDetails, getToDoDetails);
}
