class CreateLists < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.integer :board_id, null: false
      t.string :creator_id, null: false

      t.timestamps
    end
  end
end
