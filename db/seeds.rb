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
Like.destroy_all


puts "Seeding users..."

User.create!(username: Faker::Name.first_name, password: "123", profile_pic: "https://images.unsplash.com/photo-1654417958787-5d9948c3c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80", bio: Faker::Restaurant.description)
User.create!(username: Faker::Name.first_name, password: "123", profile_pic: "https://images.unsplash.com/photo-1651474799880-10329ed16946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", bio: Faker::Restaurant.description)
User.create!(username: Faker::Name.first_name, password: "123", profile_pic: "https://images.unsplash.com/photo-1654922704274-cd34f165c5e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", bio: Faker::Restaurant.description)
User.create!(username: Faker::Name.first_name, password: "123", profile_pic: "https://images.unsplash.com/photo-1654923064643-4029284b40bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", bio: Faker::Restaurant.description)
User.create!(username: Faker::Name.first_name, password: "123", profile_pic: "https://images.unsplash.com/photo-1654912912529-2b7aadef2475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", bio: Faker::Restaurant.description)
User.create!(username: Faker::Name.first_name, password: "123", profile_pic: "https://images.unsplash.com/photo-1655117070431-0ca113ca5106?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=702&q=80", bio: Faker::Restaurant.description)
User.create!(username: Faker::Name.first_name, password: "123", profile_pic: "https://images.unsplash.com/photo-1655069774988-7d509795c6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80", bio: Faker::Restaurant.description)
User.create!(username: Faker::Name.first_name, password: "123", profile_pic: "https://images.unsplash.com/photo-1655115287925-e03a3f863e98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80", bio: Faker::Restaurant.description)
User.create!(username: Faker::Name.first_name, password: "123", profile_pic: "https://images.unsplash.com/photo-1654912912506-f3685d8df808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", bio: Faker::Restaurant.description)
User.create!(username: Faker::Name.first_name, password: "123", profile_pic: "https://images.unsplash.com/photo-1613045992384-23bdc3b2c613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80", bio: Faker::Restaurant.description)
User.create!(username: Faker::Name.first_name, password: "123", profile_pic: "https://images.unsplash.com/photo-1654023451875-223085c35eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80", bio: Faker::Restaurant.description)
User.create!(username: "james", password: "123", profile_pic: "https://images.unsplash.com/photo-1654194952486-7d420417fc80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", bio: "I love food and whiskey")


puts "Seeding posts..."


Post.create!(post: "https://s3-media0.fl.yelpcdn.com/bphoto/z3Fg3G4ZESGrq5DaE5nnrA/o.jpg", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1656936632096-59fcacae533f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1657114774407-165a24536290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1657089841529-af2740d9dc08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1656057339655-786cadf701a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1656057368376-5fbc70ccca82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1654796605349-015a7841f680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://img.buzzfeed.com/buzzfeed-static/static/2016-05/23/15/enhanced/buzzfeed-prod-fastlane01/anigif_original-grid-image-20301-1464032543-1.gif?crop=400:400;0,0%7D", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://cdn.dribbble.com/users/3951514/screenshots/7288432/media/866b49d81c982fdecd5a22de44c5e677.gif", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://s-i.huffpost.com/gadgets/slideshows/332806/slide_332806_3310279_free.gif", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://i.pinimg.com/originals/68/91/d3/6891d3a9e553efbc664fa09fc3c92fda.gif", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://images.unsplash.com/photo-1659709521486-fb4bc2eb4c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80", description: Faker::Restaurant.description, user_id: User.all.ids.sample)
Post.create!(post: "https://bestanimations.com/Food/food-animated-gif-16.gif", description: Faker::Restaurant.description, user_id: User.all.ids.sample)


puts "Seeding comments..."
100.times do
    Comment.create!(comment: Faker::Quote.yoda, user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
end

puts "Seeding likes..."
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "true", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)
Like.create!(like: "false", user_id: User.all.ids.sample, post_id: Post.all.ids.sample)


puts "Seeding completed successfully"