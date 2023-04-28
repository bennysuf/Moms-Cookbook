
puts "Seeding"

User.create(username: "bobby", password: "ybbob", password_confirmation: "ybbob")
User.create(username: "test", password: "tset", password_confirmation: "tset")
User.create(username: "123", password: "321", password_confirmation: "321")
User.create(username: "mama", password: "amam", password_confirmation: "amam")

Category.create(category: "Dairy")
Category.create(category: "Meat")
Category.create(category: "Fish")
Category.create(category: "Pultry")

Recipe.create(title: "Pizza", directions: "sjfknm", ingredients: "ljhbn", user_id: 1 , category_id: 1)
Recipe.create(title: "Rice", directions: "hjb", ingredients: "uyhjb", user_id: 2 , category_id: 2)
Recipe.create(title: "Chicken", directions: "hbj", ingredients: "uyvhb", user_id: 3 , category_id: 3)
Recipe.create(title: "Cheese", directions: "uhbjn", ingredients: "uhbj", user_id: 3 , category_id: 4)
Recipe.create(title: "Cake", directions: "uhbj", ingredients: "khjb", user_id: 3 , category_id: 1)

puts "Seeding completed successfully"