class Flashcard < ApplicationRecord
  belongs_to :deck

  validates :term, :definition, :deck_id, presence: true 
end
