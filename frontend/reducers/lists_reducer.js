import { RECEIVE_BOARD } from '../actions/board_actions';
import { RECEIVE_LIST } from '../actions/list_actions';
import { REMOVE_LIST } from '../actions/list_actions';
import { RECEIVE_LIST_ITEM, REMOVE_LIST_ITEM } from '../actions/list_item_actions';
import merge from 'lodash/merge';

const ListReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_BOARD:
      return merge({}, oldState, action.payload.lists);
    case RECEIVE_LIST:
      return merge({}, oldState,  {[action.payload.id]:  action.payload});
    case REMOVE_LIST:
      newState = merge({}, oldState);
      delete newState[action.listId.id];
      return newState;
    case REMOVE_LIST_ITEM:
      newState = merge({}, oldState);
      delete newState[action.listId].cards[action.itemId];
      return newState;
    case RECEIVE_LIST_ITEM:
      newState = merge({}, oldState, {[[action.payload.list_id]]:{cards: {[action.payload.id]: action.payload}}});
      return newState;
    default:
      return oldState;
  }
};

export default ListReducer;
