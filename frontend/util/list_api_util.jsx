

export const createList = (list) => {
  return $.ajax({
    method: 'post',
    url: '/api/boards/' + list.board_id + '/lists',
    data: {list}
  });
};
export const deleteList = (list) => {
  return $.ajax({
    method: 'delete',
    url: '/api/boards/' + list.board_id + '/lists/' + list.id
  });
};

export const updateList = (list) => {
  return $.ajax({
    method: 'patch',
    url: '/api/boards/' + list.board_id + '/lists/' + list.id,
    data: {list}
  });
};
