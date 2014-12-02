module Api
  class BusinessesController < ApiController
    helper_method :current_business
    
    def create
      @business = Business.new(business_params)
      if @business.save
        render json: @business
      else
        render json: @business.errors.full_messages, status: :unprocessable_entity  
      end
    end
    
    def show
      @business = Business.find(params[:id])
      render json: @business.to_json(include: [:reviews, :photos])
    end
  
    def index
      @businesses = Business.all
      render json: @businesses
    end
      
    private
  
    def business_params
      params.require(:business).permit(:name, :location, :rating, :description)
    end
  end
end
