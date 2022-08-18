class LikesSerializer < ActiveModel::Serializer
  attributes :id, :like, :user_id, :post_id
  belongs_to :user
  belongs_to :post
end
