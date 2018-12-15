export const REQUEST_MOVIES = 'REQUEST_MOVIES';

export const GET_MOVIES_POPULAR = 'GET_MOVIES_POPULAR';
export const GET_MOVIES_NOW_PLAYING = 'GET_MOVIES_NOW_PLAYING';

export const getSuccessMovies = () => ({
  type: REQUEST_MOVIES,
});

export const getMoviespPopular = data => ({
  type: GET_MOVIES_POPULAR,
  payload: data,
});

export const getMoviesNowPlaying = data => ({
  type: GET_MOVIES_NOW_PLAYING,
  payload: data,
});
