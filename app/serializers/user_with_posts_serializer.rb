class UserWithPostsSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_pic, :bio
  has_many :posts
end
