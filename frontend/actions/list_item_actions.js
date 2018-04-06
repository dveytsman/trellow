import * as ListItemApiUtil from '../util/list_item_api_util';

export const RECEIVE_LIST_ITEM = "RECEIVE_LIST_ITEM";
export const REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM";

export const receiveListItem = (payload) => {
  return {
    type: RECEIVE_LIST_ITEM,
    payload
  };
};

export const removeListItem = (itemId) => {
  return {
    type: REMOVE_LIST_ITEM,
    itemId
  };
};

export const createListItem = (listItem) => (dispatch) => {
  return(
    ListItemApiUtil.createListItem(listItem).then(listItem => dispatch(receiveListItem(listItem)))
  );
};

export const deleteListItem = (itemId) => (dispatch) => {
  return(
    ListItemApiUtil.deleteListItem(itemId).then((itemId) => dispatch(removeListItem(itemId)))
  );
};

export const updateListItem = (listItem) => (dispatch) => {
  return(
    ListItemApiUtil.updateListItem(listItem).then(listItem => dispatch(receiveListItem(listItem)))
  );
};
