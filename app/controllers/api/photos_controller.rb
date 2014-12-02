module Api
  class PhotosController < ApiController
    def create
      @photo = Photo.new(photo_params)
      @photo.user_id = current_user.id
      if @photo.save
        render json: @photo.to_json
      else
        render json: @photo.erros.ful_messages, status: :unprocessable_entity
      end
    end
  
    def show
      @photo = Photo.find(params[:id])
      render json: @photo
    end
  
    private
  
    def photo_params
      params.require(:photo).permit(:img_src, :caption, :busiess_id)
    end
  end
end
