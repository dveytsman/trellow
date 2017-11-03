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
      end
    end
  end
end
