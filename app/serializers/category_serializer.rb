class CategorySerializer < ActiveModel::Serializer
  attributes :id, :category
  has_many :recipes
end
