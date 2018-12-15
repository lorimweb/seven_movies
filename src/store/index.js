import { createStore, applyMiddleware, compose } from 'redux';
import createSegaMiddleware from 'redux-saga';

import reducers from './reducers';

import sagas from './sagas';

let customCompose = compose;
if (__DEV__) {
  customCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const sagaMiddleware = createSegaMiddleware();

const store = createStore(
  reducers,
  customCompose(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

export default store;
