class Board < ApplicationRecord
  validates :creator, :title, presence: true

  belongs_to :creator,
  primary_key: :id,
  foreign_key: :creator_id,
  class_name: :User

  has_many :lists, dependent: :destroy,
  primary_key: :id,
  foreign_key: :board_id,
  class_name: :List


end
