class User < ApplicationRecord

  has_many :flashcards
  has_many :decks
  validates :username, presence: true, uniqueness: true
  has_secure_password
  
end
