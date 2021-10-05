class CreateDecks < ActiveRecord::Migration[6.1]
  def change
    create_table :decks do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :title
      t.string :cover_url

      t.timestamps
    end
  end
end
