import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const hostname = window && window.location && window.location.hostname;
  let middleware = [];
  switch(hostname) {
    case "localhost":
        middleware = [thunk, logger];
        break;
    default:
        middleware = [thunk];
        break;
  }
  return createStore(RootReducer, preloadedState, applyMiddleware(...middleware));
};

export default configureStore;
