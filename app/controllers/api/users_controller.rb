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
        #redirect_to root_url
      else
        flash.now[:errors] = @user.errors.full_messages
        render :new
      end
    end
  
    def show
      @user = User.find(params[:id])
      render json: @user.to_json(only: [:first_name, :last_name, :img_src], include: :reviews)
    end
  
    def update
      @user = User.find(params[:id])
      if @user.update_attributes(user_params)
        render json: @user
      else
        render json: @user.errors.full_messages,
               status: :unprocessable_entity
      end
    end
  
    private
  
    def user_params
      params.require(:user).permit(:username,:first_name, :last_name, :password, :img_src)
    end
  end
end