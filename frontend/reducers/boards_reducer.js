import { RECEIVE_BOARD, RECEIVE_ALL_BOARDS } from '../actions/board_actions';
import merge from 'lodash/merge';

const BoardReducer = (oldState={}, action) => {
  
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOARD:
      return merge({}, oldState, {[action.board.id]: action.board});
    case RECEIVE_ALL_BOARDS:
      return action.boards;
    default:
      return oldState;
  }
};

export default BoardReducer;
