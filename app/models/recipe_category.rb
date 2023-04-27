class RecipeCategory < ApplicationRecord
  belongs_to :category
  belongs_to :recipe

  validates :difficulty, presence: true
end
