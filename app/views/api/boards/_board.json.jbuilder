json.extract! board, :id, :title, :creator_id
json.listIds board.lists.pluck(:id)
