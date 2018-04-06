import { RECEIVE_BOARD } from '../actions/board_actions';
import { RECEIVE_LIST } from '../actions/list_actions';
import { REMOVE_LIST } from '../actions/list_actions';
import merge from 'lodash/merge';
import { RECEIVE_LIST_ITEM, REMOVE_LIST_ITEM } from '../actions/list_item_actions';

const ListReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOARD:
      return merge({}, oldState, action.payload.lists);
    case RECEIVE_LIST:
      return merge({}, oldState,  {[action.payload.id]:  action.payload});
    case REMOVE_LIST:
      let newState = merge({}, oldState);
      delete newState[action.listId.id];
      return newState;
    default:
      return oldState;
  }
};

export default ListReducer;
