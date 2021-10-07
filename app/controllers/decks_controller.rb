class DecksController < ApplicationController

  # get rid of this skip before action later
  skip_before_action :confirm_authentication
  before_action :find_deck, only:  [:show, :update]
  before_action :authorize_user, only: [:show, :update]

  def index
    decks = current_user.decks.all
    render json: decks.to_json(
        include: {
          flashcards: { 
            except: [
              :created_at
            ]
         }}
      )
  end

  def show
      render json: @deck.to_json(
        include: {
          flashcards: { 
            except: [
              :created_at
            ]
         }}
      )

  end

  def create
    deck = current_user.decks.new(deck_params)
    if deck.save
      render json: deck, status: :created
    else
      render json: deck.errors, status: :unprocessable_entity
    end
  end

  def destroy
    deck = current_user.decks.find(params[:id])
    deck.destroy
    render json: deck, status: :ok
  end

private

  def deck_params
    params.permit(:title, :cover_url, :user_id)
  end

  def find_deck
    @deck = Deck.find(params[:id])
  end

  def authorize_user
    #user is authorized IF they are the admin OR the creator of the event
    user_can_modify = @deck.user_id == current_user.id
    render json: {error: "You don't have permission to perform that action"}, 
    status: :forbidden unless user_can_modify 
    #is the current use an admin?
  end


end