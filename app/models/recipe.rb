class Recipe < ApplicationRecord
  belongs_to :user
  has_many :recipe_categories, dependent: :destroy
  has_many :categories, through: :recipe_categories

  validates :title, presence: true
  validates :directions, presence: true
  validates :ingredients, presence: true
end
