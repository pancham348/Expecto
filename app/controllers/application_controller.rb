class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  helper_method :current_user, :logged_in?

  private
  
  def current_user
    return nil unless session[:token]
    @current_user ||= User.find_by_session_token(session[:token])
    Rails.logger.debug @current_user.to_json
    @current_user
  end
  
  def sign_in(user)
    session[:token] = user.reset_session_token!
  end
  
  def sign_out
    session[:token] = nil
  end
  
  def logged_in?
    	return true unless session[:token].nil?
    	false
  end
    
  # def ensure_sign_in
  #   redirect_to new_session_url unless logged_in?
  # end

end
