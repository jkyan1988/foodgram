class PostWithLikesSerializer < Post::Serializer
  has_many :likes
end
