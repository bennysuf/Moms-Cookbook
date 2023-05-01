class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :categories
  has_many :recipes
end
