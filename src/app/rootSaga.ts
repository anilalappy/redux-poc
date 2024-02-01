// rootSaga.js
import { all } from 'redux-saga/effects';
import { continentSaga } from './redux-store/continents/saga';

function* rootSaga() {
  yield all([
    continentSaga()
    // Add more sagas as needed
  ]);
}

export default rootSaga;
