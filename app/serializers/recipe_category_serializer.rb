class RecipeCategorySerializer < ActiveModel::Serializer
  attributes :id, :difficulty
  has_one :category
  has_one :recipe
end
