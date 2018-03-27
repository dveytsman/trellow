export const createListItem = (list_item) => {
  return $.ajax({
    method: 'post',
    url: '/api/boards/' + list_item.list.board_id + '/lists/' + list_item.list.id + '/list_items',
    data: {list_item}
  });
};

export const deleteListItem = (list_item) => {
  return $.ajax({
    method: 'delete',
    url: '/api/list_items/' + list_item.id
  })
}
