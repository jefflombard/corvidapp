import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers';

const createStoreWithMiddleWares = (middlewares) => {
  return createStore(reducers, {}, applyMiddleware(...middlewares));
};

const middlewares = [ReduxThunk];

export const initStoreForCorvid = () => {

  if (__DEV__) {
    middlewares.push(logger);
  }

  return createStoreWithMiddleWares(middlewares);
}
