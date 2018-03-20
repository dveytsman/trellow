class CreateListItems < ActiveRecord::Migration[5.1]
  def change
    create_table :list_items do |t|
      t.string :title, null: false
      t.integer :list_id, null: false
      t.string :creator_id, null: false

      t.timestamps
    end
  end
end
