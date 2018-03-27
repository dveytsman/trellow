class ListItem < ApplicationRecord
  validates :title, :list_id, presence: true

  belongs_to :list,
  primary_key: :id,
  foreign_key: :list_id,
  class_name: :List

  has_one :creator,
  through: :list,
  source: :creator
end
