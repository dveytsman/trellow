class AddContentToListItems < ActiveRecord::Migration[5.1]
  def change
    add_column :list_items, :body, :text
  end
end
