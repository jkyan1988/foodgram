class User < ApplicationRecord
    has_many :comments
    has_many :posts
    has_many :likes

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :bio, presence: true
    validates :profile_pic, presence: true
    validates :password, presence: true
end
