import { RECEIVE_BOARD } from '../actions/board_actions';
import { RECEIVE_LIST } from '../actions/list_actions';
import merge from 'lodash/merge';

const ListReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOARD:
      return merge({}, oldState, action.payload.lists);
    case RECEIVE_LIST:
      return merge({}, oldState,  {[action.payload.id]:  action.payload});
    default:
      return oldState;
  }
};

export default ListReducer;
