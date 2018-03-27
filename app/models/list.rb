class List < ApplicationRecord
  validates :creator, :title, :board_id, presence: true

  belongs_to :board,
  primary_key: :id,
  foreign_key: :board_id,
  class_name: :Board

  has_one :creator,
  through: :board,
  source: :creator

  has_many :list_items, dependent: :destroy,
  primary_key: :id,
  foreign_key: :list_id,
  class_name: :ListItem
end
