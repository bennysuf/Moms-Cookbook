class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :directions, :ingredients, :categories
  
  has_one :user
end