import { RECEIVE_BOARD } from '../actions/board_actions';
import merge from 'lodash/merge';

const ListReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOARD:
      return merge({}, oldState, action.payload.lists);
    default:
      return oldState;
  }
};

export default ListReducer;
