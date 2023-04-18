class CategorySerializer < ActiveModel::Serializer
  attributes :id, :meal
  has_many :recipes
end
