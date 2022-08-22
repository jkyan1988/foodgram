class UserWithPostsSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_pic, :bio, :location
  has_many :posts
end
