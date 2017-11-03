import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';
export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';

export const receiveBoard = (payload) => {
  return {
    type: RECEIVE_BOARD,
    payload 
  };
};

export const removeBoard = (boardId) => {
  return {
    type: REMOVE_BOARD,
    boardId
  };
};
export const receiveAllBoards = (boards) => {
  return{
    type: RECEIVE_ALL_BOARDS,
    boards
  };
};

export const fetchBoards = () => (dispatch) => {
  return(
    BoardApiUtil.fetchBoards().then((boards) => dispatch(receiveAllBoards(boards)))
  );
};
export const fetchBoard = (id) => (dispatch) => {
  return(
    BoardApiUtil.fetchBoard(id).then(board => dispatch(receiveBoard(board)))
  );
};
export const createBoard = (board) => (dispatch) => {
  return(
    BoardApiUtil.createBoard(board).then(board => dispatch(receiveBoard(board)))
  );
};

export const deleteBoard = (boardId) => (dispatch) => {
  return(
    BoardApiUtil.deleteBoard(boardId).then((board) => dispatch(removeBoard(boardId)))
  );
};

export const updateBoard = (board) => (dispatch) => {
  return(
    BoardApiUtil.updateBoard(board).then(board => dispatch(receiveBoard(board)))
  );
};
