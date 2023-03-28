class User < ApplicationRecord
    has_many :recipes
    has_secure_password

    validates :password, presence: true
    validates :password_confirmation, presence: true
    validates :username, presence: true, uniqueness: true
end
