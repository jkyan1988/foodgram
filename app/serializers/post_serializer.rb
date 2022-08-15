class PostSerializer < ActiveModel::Serializer
  attributes :id, :post, :description, :user_id
  has_many :comments, dependent: :destroy
end
