class Category < ApplicationRecord
    has_many :recipes
    has_many :users, through: :recipes

    validates :category, presence: true
end
