export const createListItem = (list_item, boardId) => {
  return $.ajax({
    method: 'post',
    url: '/api/boards/' + boardId + '/lists/' + list_item.list_id + '/list_items',
    data: {list_item}
  });
};

export const deleteListItem = (listItemId, listId) => {
  return $.ajax({
    method: 'delete',
    url: '/api/list_items/' + listItemId
  });
};

export const updateListItem = (list_item) => {
  return $.ajax({
    method: 'patch',
    url: '/api/boards/' + list_item.list.board_id + '/lists/' + list_item.list.id + '/list_items/' + list_item.id,
    data: {list_item}
  });
};
