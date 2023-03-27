class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :directions, :ingredients
  has_one :user
end
