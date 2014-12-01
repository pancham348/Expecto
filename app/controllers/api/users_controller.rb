module Api
  class UsersController < ApiController
    before_action :ensure_sign_in
  
    def new
      @user = User.new
    end
  
    def create
      @user = User.new(user_params)
      if @user.save
        sign_in(@user)
        redirect_to root_url
      else
        flash.now[:errors] = @user.errors.full_messages
        render :new
      end
    end
  
    def show
      @user = User.find(params[:id])
      render json: @user.to_json(only: [:first_name, :last_name, :img_src], include: :reviews)
    end
  
    private
  
    def user_params
      params.require(:user).permit(:username,:first_name, :last_name, :password)
    end
  end
end