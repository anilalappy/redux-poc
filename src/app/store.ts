import { configureStore } from "@reduxjs/toolkit";
import { continent } from "./redux-store/continents/slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: { continent },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(middlewares)
});

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
