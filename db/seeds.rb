# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# require 'faker'

# Faker::Name.name
# Faker::Name.unique.name
# Faker::Number.within(range: 1..4)
# Faker::Color.color_name
# Faker::Food.dish
# Faker::Food.description
# Faker::Food.ingredient
puts "Seeding"

# User.create(username: Faker::Name.unique.name, password: Faker::Color.color_name)
# User.create(username: Faker::Name.unique.name, password: Faker::Color.color_name)
# User.create(username: Faker::Name.unique.name, password: Faker::Color.color_name)
# User.create(username: Faker::Name.unique.name, password: Faker::Color.color_name)
User.create(username: "bobby", password: "ybbob", password_confirmation: "ybbob")
User.create(username: "test", password: "tset", password_confirmation: "tset")
User.create(username: "123", password: "321", password_confirmation: "321")
User.create(username: "mama", password: "amam", password_confirmation: "amam")

# Recipe.create(title: Faker::Food.dish, directions: Faker::Food.description, ingredients: Faker::Food.ingredient, user_id: Faker::Number.within(range: 1..4))
# Recipe.create(title: Faker::Food.dish, directions: Faker::Food.description, ingredients: Faker::Food.ingredient, user_id: Faker::Number.within(range: 1..4))
# Recipe.create(title: Faker::Food.dish, directions: Faker::Food.description, ingredients: Faker::Food.ingredient, user_id:Faker::Number.within(range: 1..4))
# Recipe.create(title: Faker::Food.dish, directions: Faker::Food.description, ingredients: Faker::Food.ingredient, user_id:Faker::Number.within(range: 1..4))
# Recipe.create(title: Faker::Food.dish, directions: Faker::Food.description, ingredients: Faker::Food.ingredient, user_id:Faker::Number.within(range: 1..4))

# Recipe.create(title:"rice", directions: "put in pot, boil for 10 mins. let simmer.", ingredients: "rice, water, salt", user_id: 1)
# Recipe.create(title:"chulent", directions: "put everything from cabinet, place low heat till ready", ingredients: "everything, from, the, cabinet", user_id: 2)
# Recipe.create(title:"Pizza", directions: "Three egg whites with spinach, mushrooms, caramelized onions, tomatoes and low-fat feta cheese. With herbed quinoa, and your choice of rye or whole-grain toast.", ingredients: "Butternut Lettuce", user_id: 3)
# Recipe.create( title: "Pork Sausage Roll",
#  directions: "Three egg omelet with Roquefort cheese, chives, and ham. With a side of roasted potatoes, and your choice of toast or croissant.",
#  ingredients: "Sesame Oil", user_id: 4)
# Recipe.create(title:"Meatballs with Sauce", directions: "Two butter croissants of your choice (plain, almond or cheese). With a side of herb butter or house-made hazelnut spread.", ingredients: "Prunes", user_id: 3)

# Category.create(meal: "Breakfast", user_id: 1)
# Category.create(meal: "Lunch", user_id: 2)
# Category.create(meal: "Dinner", user_id: 3)
# Category.create(meal: "Breakfast", user_id: 4)
# Category.create(meal: "Lunch", user_id: 3)


# RecipeCategory.create(recipe_id: 1, category_id: 1)
# RecipeCategory.create(recipe_id: 2, category_id: 2)
# RecipeCategory.create(recipe_id: 3, category_id: 3)
# RecipeCategory.create(recipe_id: 4, category_id: 4)
# RecipeCategory.create(recipe_id: 5, category_id: 5)

puts "Seeding completed successfully"