class Flashcard < ApplicationRecord
  belongs_to :deck

  validates :word, :definition, :deck_id, presence: true
  validates :word, uniqueness: { scope: [:deck_id], message: "can't enter the same word in same deck"}

  # create_table "flashcards", force: :cascade do |t|
  #   t.bigint "deck_id", null: false
  #   t.string "term"
  #   t.string "definition"
  #   t.boolean "learned"
  #   t.string "language"
  #   t.datetime "created_at", precision: 6, null: false
  #   t.datetime "updated_at", precision: 6, null: false
  #   t.index ["deck_id"], name: "index_flashcards_on_deck_id"
end
