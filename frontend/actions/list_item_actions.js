import * as ListItemApiUtil from '../util/list_item_api_util';

export const RECEIVE_LIST_ITEM = "RECEIVE_LIST_ITEM";
export const REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM";

export const receiveListItem = (payload, boardId) => {
  return {
    type: RECEIVE_LIST_ITEM,
    payload,
    boardId
  };
};

export const removeListItem = (itemId, listId) => {
  return {
    type: REMOVE_LIST_ITEM,
    itemId,
    listId
  };
};

export const createListItem = (listItem, boardId) => (dispatch) => {
  return(
    ListItemApiUtil.createListItem(listItem, boardId).then(listItem => dispatch(receiveListItem(listItem, boardId)))
  );
};

export const deleteListItem = (itemId, listId) => (dispatch) => {
  return(
    ListItemApiUtil.deleteListItem(itemId, listId).then(() => dispatch(removeListItem(itemId, listId)))
  );
};

export const updateListItem = (listItem) => (dispatch) => {
  return(
    ListItemApiUtil.updateListItem(listItem).then(listItem => dispatch(receiveListItem(listItem)))
  );
};
