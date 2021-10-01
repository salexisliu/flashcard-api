class CreateFlashcards < ActiveRecord::Migration[6.1]
  def change
    create_table :flashcards do |t|
      t.belongs_to :deck, null: false, foreign_key: true
      t.string :term
      t.string :definition
      t.boolean :learned
      t.string :language

      t.timestamps
    end
  end
end
