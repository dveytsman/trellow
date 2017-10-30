import { SHOW_DROPDOWN, HIDE_DROPDOWN } from '../actions/dropdown_actions';

const DropdownReducers = ( oldState = false, action ) => {
  switch (action.type) {
    case SHOW_DROPDOWN:
      return true;
    case HIDE_DROPDOWN:
      return false;
    default:
      return oldState;
  }
};

export default DropdownReducers;
