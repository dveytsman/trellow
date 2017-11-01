export const fetchBoards = () => {
  return $.ajax({
    method: 'get',
    url: '/api/boards',
  });
};

export const fetchBoard = (boardId) => {
  return $.ajax({
    method: 'get',
    url: '/api/boards/' + boardId
  });
};

export const createBoard = (board) => {
  return $.ajax({
    method: 'post',
    url: '/api/boards',
    data: {board}
  });
};
