class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :profile_pic, :bio
end
