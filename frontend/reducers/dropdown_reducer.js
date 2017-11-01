import { SHOW_DROPDOWN, HIDE_DROPDOWN } from '../actions/dropdown_actions';

const dropdownReducer = ( oldState = '', action ) => {
  switch (action.type) {
    case SHOW_DROPDOWN:
      if(oldState === action.dropdown){
        return null;
      }
      return action.dropdown;

    case HIDE_DROPDOWN:
      return '';
    default:
      return oldState;
  }
};

export default dropdownReducer;
