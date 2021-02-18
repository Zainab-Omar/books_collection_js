# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: "Zainab")
user2 = User.create(name: "Abraham")
user3 = User.create(name: "Marwan")
user4 = User.create(name: "Jenna")

book1 = Book.create(title: "Greenlights", author: "Matthew McConaughey", img_url: "https://media.vanityfair.com/photos/5f355eb2ea4a2b0e8b86450a/master/pass/mcconaughey.jpg", user_id: user1.id)
book2 = Book.create(title: "The Shadow Box", author: "Luanne Rice", img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609664814i/56526636._UY200_.jpg", user_id: user1.id )
book3 = Book.create(title: "Hadley and Grace", author: "Suzanne Redfearn", img_url: "https://m.media-amazon.com/images/I/51uJZAsU1lL.jpg", user_id: user2.id )
book4 = Book.create(title: "The Moonlight Child", author: "Karen McQuestion", img_url: "https://images-na.ssl-images-amazon.com/images/I/61pVXBvmFJL.jpg", user_id: user2.id)
book5 = Book.create(title: "The Killing of Faith", author: "William Holms", img_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1606126309l/56016382._SX318_.jpg", user_id: user3.id)
book6 = Book.create(title: "Matters of Consequence", author: "Kimberly Rice", img_url: "https://prodimage.images-bn.com/pimages/9798663980562_p0_v2_s550x406.jpg", user_id: user4.id)

