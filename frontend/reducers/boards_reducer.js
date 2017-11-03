import { RECEIVE_BOARD, RECEIVE_ALL_BOARDS, REMOVE_BOARD } from '../actions/board_actions';
import merge from 'lodash/merge';

const BoardReducer = (oldState={}, action) => {

  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOARD:
      return merge({}, oldState, {[action.payload.board.id]: action.payload.board});
    case RECEIVE_ALL_BOARDS:
      return action.boards;
    case REMOVE_BOARD:
      let newState = merge({}, oldState);
      delete newState[action.boardId];
      return newState;
    default:
      return oldState;
  }
};

export default BoardReducer;
