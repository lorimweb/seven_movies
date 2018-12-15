import { call, put } from 'redux-saga/effects';

import api from '../../services/axios';
import { getMoviespPopular, getMoviesNowPlaying } from '../actions/movies';
import apiKey from '../../config/apiKey';

const apiFetchPopular = () => api.get(
  `movie/popular?api_key=${apiKey.key}&language=${apiKey.language}`,
);

const apiFetchNowPlaying = () => api.get(
  `movie/now_playing?api_key=${apiKey.key}&language=${apiKey.language}`,
);

export default function* movieWatcherSaga() {
  try {
    const popular = yield call(apiFetchPopular);
    const nowplaying = yield call(apiFetchNowPlaying);

    yield put(getMoviespPopular(popular));
    yield put(getMoviesNowPlaying(nowplaying));
  } catch (e) {
    console.log(e);
  }
}
