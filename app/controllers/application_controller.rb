class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  before_action :confirm_authentication   # this means to check before every single request
  # so you also need to have a skip before  action in session and user contrller so pople can log in and sign up with


  private

  def current_user
    @current_user ||= session[:user_id] && User.find_by_id(session[:user_id])
  end

  # this means to check before every single request
  
  def confirm_authentication
    return render json: { error: "You must be logged in to do that." }, status: :unauthorized unless current_user
  end
end