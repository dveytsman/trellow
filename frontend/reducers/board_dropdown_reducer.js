import { HIDE_DROPDOWN, SHOW_BOARD_DROPDOWN } from '../actions/dropdown_actions';

const BoardDropdownReducer = (oldState=false, action) => {
  switch (action.type) {
    case SHOW_BOARD_DROPDOWN:
      return true;
    case HIDE_DROPDOWN:
      return false;
    default:
      return false;
  }
};

export default BoardDropdownReducer;
