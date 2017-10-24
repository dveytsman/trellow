class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
end

helper_method :current_user, :logged_in?

private

def current_user
  return nil unless session[:session_token]
  @current_user ||= User.find_by(session_token: session[:session_token])
  # see the benchbnb had to stop and do something else
