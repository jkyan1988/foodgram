# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all
Comment.destroy_all


puts "Seeding users..."

10.times do 
    User.create!(username: Faker::Name.first_name, password: "123", profile_pic: "https://i.pravatar.cc/150?img=100", bio: Faker::Restaurant.description)
end

puts "Seeding posts..."

10.times do
    Post.create!(post: "https://picsum.photos/800/900", description: Faker::Restaurant.description)
end

puts "Seeding comments..."
10.times do
    Comment.create!(comment: Faker::Restaurant.description, user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
end


puts "Seeding completed successfully"