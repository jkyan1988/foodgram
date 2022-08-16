class UserWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :username, :profile_pic, :bio
  has_many :comments
end
