class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :directions, :ingredients, :category
  has_one :user
end