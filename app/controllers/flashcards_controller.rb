class FlashcardsController < ApplicationController

  def index
    flashcards = Flashcard.all
    render json: flashcards
  end

  def create
    current_deck = Deck.find(params[:id])
    flashcard = current_deck.flashcards.new(card_params)
    if flashcard.save
      render json: flashcard, status: :created
    else
      render json: flashcard.errors, status: :unprocessable_entity
    end
  end

  private

  def card_params
    params.permit(:deck_id, :word, :definition, :learned)
   
  end

  def find_card
    @card = Flashcard.find(params[:id])
  end

end
