import { combineReducers } from 'redux';
import errors from './errors_reducer.js';
import session from './session_reducer.js';

export default combineReducers({
  session,
  errors
});
