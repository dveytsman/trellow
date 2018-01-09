

export const createList = (list) => {
  return $.ajax({
    method: 'post',
    url: '/api/boards/' + list.board_id + '/lists',
    data: {list}
  });
};
export const deleteList = (listId) => {
  return $.ajax({
    method: 'delete',
    url: '/api/boards/' + listId
  });
};

export const updateList = (list) => {
  return $.ajax({
    method: 'patch',
    url: '/api/boards/' + list.id,
    data: {list}
  });
};
