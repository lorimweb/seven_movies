import { all, takeLatest } from 'redux-saga/effects';

import movieWatcherSaga from './movies';

export default function* rootSaga() {
  yield all([takeLatest('REQUEST_MOVIES', movieWatcherSaga)]);
}
