class PostWithCommentsSerializer < ActiveModel::Serializer
  attributes :id, :post, :description
  has_many :comments
end
