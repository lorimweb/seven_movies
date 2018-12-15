const INITIAL_STATE = {
  popular: [],
  nowplaying: [],
  latest: '',
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_MOVIES_POPULAR':
      return {
        ...state,
        popular: action.payload.data,
        latest: action.payload.data.results[0],
        loading: false,
      };
    case 'GET_MOVIES_NOW_PLAYING':
      return { ...state, nowplaying: action.payload.data };
    default:
      return state;
  }
};
