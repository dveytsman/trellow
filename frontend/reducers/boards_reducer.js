import { RECEIVE_BOARD, RECEIVE_ALL_BOARDS, REMOVE_BOARD } from '../actions/board_actions';
import { RECEIVE_LIST } from '../actions/list_actions';
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
    case RECEIVE_LIST:
      let newState2 = merge({}, oldState);
      newState2[action.payload.board_id].listIds.push(action.payload.id);
      return newState2;
    default:
      return oldState;
  }
};

export default BoardReducer;
