json.board do
  json.partial! 'board', board: @board
end
if @board.lists.empty?
  json.lists({})
else
  json.lists do
    @board.lists.each do |list|
      json.set! list.id do
        json.partial! 'api/lists/list', list: list
        list.list_items.each do |list_item|
          json.set! list_item.id do
            json.partial! 'api/list_items/list_item', list_item: list_item
          end
        end
      end
    end
  end
end
