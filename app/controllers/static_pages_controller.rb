class StaticPagesController < ApplicationController
  before_action :ensure_sign_in
  
  def root
    render :root
  end
end
