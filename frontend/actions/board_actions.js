import * as BoardApiUtil from '../util/board_api_util';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_ALL_BOARDS = 'RECEIVE_ALL_BOARDS';

export const receiveBoard = (board) => {
  return {
    type: RECEIVE_BOARD,
    board
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
