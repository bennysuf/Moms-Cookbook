class RecipeCategorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :category
  has_one :recipe
end
