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

b1 = Board.create!(creator_id: u1.id, title: "App Academy Homework")
b2 = Board.create!(creator_id: u1.id, title: "Full Stack Project")
b3 = Board.create!(creator_id: u1.id, title: "Shopping")
b4 = Board.create!(creator_id: u1.id, title: "Job Hunting")
b5 = Board.create!(creator_id: u1.id, title: "Finances")

l1 = List.create!(creator_id: u1.id , title: "Alpha course to do list" ,board_id: b1.id)
l2 = List.create!(creator_id: u1.id , title: "Ruby to do list" ,board_id: b1.id)
l3 = List.create!(creator_id: u1.id , title: "Rails to do list" ,board_id: b1.id)
l4 = List.create!(creator_id: u1.id , title: "Relearn rails list" ,board_id: b2.id)
l5 = List.create!(creator_id: u1.id , title: "Relearn react list" ,board_id: b2.id)
l6 = List.create!(creator_id: u1.id, title: "Costco list", board_id: b3.id)
l7 = List.create!(creator_id: u1.id, title: "Trader joes list", board_id: b3.id)
l8 = List.create!(creator_id: u1.id, title: "Whole foods list", board_id: b3.id)
l9 = List.create!(creator_id: u1.id, title: "Update resume", board_id: b4.id)
l10 = List.create!(creator_id: u1.id, title: "finish full stack list", board_id: b4.id)
