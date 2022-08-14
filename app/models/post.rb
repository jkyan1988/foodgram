class Post < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :likes
    belongs_to :user

    validates :user_id, presence: true
end
