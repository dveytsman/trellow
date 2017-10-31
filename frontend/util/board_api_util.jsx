export const fetchBoards = () => {
  return $.ajax({
    method: 'get',
    url: '/api/boards',
  });
};

export const fetchBoard = (id) => {
  return $.ajax({
    method: 'get',
    url: '/api/boards/' + id
  });
};

export const createBoard = (board) => {
  return $.ajax({
    method: 'post',
    url: '/api/boards',
    data: {board}
  });
};
