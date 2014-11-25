class SessionsController < ApplicationController
  
  def new
    
  end
  
  def create
    @user = User.find_by_credentials(params[:user])
    if @user
      sign_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = "Invalid username or password"
      render :new
    end
  end
  

end
