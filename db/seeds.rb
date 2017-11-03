# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Board.destroy_all
List.destroy_all

u1 = User.create!(username: "guest", password: "newlife")

b1 = Board.create!(creator_id: u1.id, title: "I am a board")

l1 = List.create!(creator_id: u1.id , title: "I am a list" ,board_id: b1.id)
l2 = List.create!(creator_id: u1.id, title: "I am a second list", board_id: b1.id)
