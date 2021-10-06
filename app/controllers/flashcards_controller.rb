class FlashcardsController < ApplicationController

  # get rid of this skip before action later
   skip_before_action :confirm_authentication 
   before_action :find_card, only: [:show]
  
  def index
    flashcards = Flashcard.all
    render json: flashcards
  end

 def show
    render json: @card
  end

  def create
    flashcard = Flashcard.new(card_params)
    if flashcard.save
      render json: flashcard, status: :created
    else
      render json: flashcard.errors, status: :unprocessable_entity
    end
  end

  def destroy
    card = Flashcard.find(params[:id])
    card.destroy
    render json: card, status: :ok
  end

  private

  def card_params
    params.permit(:deck_id, :word, :definition, :learned)
   
  end

  def find_card
    @card = Flashcard.find(params[:id])
  end

end
