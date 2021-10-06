# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

"starting..."
d1 = Deck.create(user_id: User.first.id, title: "Japanese I", cover_url: "coverurl")
d2 = Deck.create(user_id: User.first.id, title: "second deck", cover_url: "coverurl")

f1 = Flashcard.create(deck_id: 1, word: "hello", definition: "こんにちわ", language: "japanese")
f2 = Flashcard.create(deck_id: 1, word: "how are you", definition: "お元気ですか", language: "japanese")
f3 = Flashcard.create(deck_id: 2, word: "dog", definition: "animal", language: "english")
f3 = Flashcard.create(deck_id: 2, word: "computer", definition: "machine", language: "english")

"finished seeding :) "