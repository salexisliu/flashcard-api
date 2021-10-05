class Deck < ApplicationRecord
  belongs_to :user
  has_many :flashcards, dependent: :destroy

  validates :title, :user_id, presence: true 

  #  create_table "decks", force: :cascade do |t|
  #   t.bigint "user_id", null: false
  #   t.string "title"
  #   t.string "cover_url"
  #   t.datetime "created_at", precision: 6, null: false
  #   t.datetime "updated_at", precision: 6, null: false
  #   t.index ["user_id"], name: "index_decks_on_user_id"
  # end

end
