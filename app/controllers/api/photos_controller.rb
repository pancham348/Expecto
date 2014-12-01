module Api
  class PhotosController < ApiController
    def create
      @photo = Phot.new(photo_params)
      @photo.business_id = current_business.id
      @photo.user_id = current_user.id
      if @photo.save
        render json: @photo.to_json(include: :business)
      else
        render json: @photo.erros.ful_messages, status: :unprocessable_entity
      end
    end
  
    def show
      @photo = Phot.find(params[:id])
      render json: @photo
    end
  
    private
  
    def current_business
      if params[:id]
        @photo = Phot.find(params[:id])
        @business = @photo.business
      elsif params[:photo]
        @business = Phot.find(params[:photo][:business_id]) 
      end
    end
  
    def photo_params
      params.require(:photo).permit(:img_src, :caption)
    end
  end
end
