
puts "Seeding"

User.create(username: "bobby", password: "ybbob", password_confirmation: "ybbob")
User.create(username: "test", password: "tset", password_confirmation: "tset")
User.create(username: "123", password: "321", password_confirmation: "321")
User.create(username: "mama", password: "amam", password_confirmation: "amam")

puts "Seeding completed successfully"