import * as ListApiUtil from '../util/list_api_util';

export const RECEIVE_LIST = "RECEIVE_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

export const receiveList = (payload) => {
  return {
    type: RECEIVE_LIST,
    payload
  };
};

export const removeList = (listId) => {
  return {
    type: REMOVE_LIST,
    listId
  };
};

export const createList = (list) => (dispatch) => {
  return(
    ListApiUtil.createList(list).then(list => dispatch(receiveList(list)))
  );
};

export const deleteList = (listId) => (dispatch) => {
  return(
    ListApiUtil.deleteList(listId).then((list) => dispatch(removeList(listId)))
  );
};

export const updateList = (list) => (dispatch) => {
  return(
    ListApiUtil.updateList(list).then(list => dispatch(receiveList(list)))
  );
};
