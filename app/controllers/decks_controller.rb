class DecksController < ApplicationController

  before_action :find_deck, only:  [:show, :create, :update, :destroy]
  before_action :authorize_user, only:  [:update, :destroy]

  def index
    decks = Deck.all
    render json: decks
  end

  def show
    render json: @deck
  end

  def create
    deck = current_user.decks.new(deck_params)
    if deck.save
      render json: deck, status: :created
    else
      render json: deck.errors, status: :unprocessable_entity
    end
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