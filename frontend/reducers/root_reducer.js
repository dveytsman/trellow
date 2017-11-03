import { combineReducers } from 'redux';
import errors from './errors_reducer.js';
import session from './session_reducer.js';
import dropdown from './dropdown_reducer';
import boards from './boards_reducer';
import lists from './lists_reducer';

export default combineReducers({
  session,
  errors,
  dropdown,
  boards,
  lists
});
