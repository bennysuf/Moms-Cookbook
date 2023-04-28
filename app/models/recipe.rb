class Recipe < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :title, presence: true
  validates :directions, presence: true
  validates :ingredients, presence: true
end
