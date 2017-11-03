json.extract! board, :id, :title, :creator_id

if @board.lists.empty?
  json.lists({})
else
  json.lists do
    @board.lists.each do |list|
      json.set! list.id do
        json.partial! 'lists/list', list: list
      end
    end
  end
end
