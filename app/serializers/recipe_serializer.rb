class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :directions, :ingredients
  has_many :categories
  has_one :user
end