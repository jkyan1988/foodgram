class PostSerializer < ActiveModel::Serializer
  attributes :id, :post, :description, :user_id
end
