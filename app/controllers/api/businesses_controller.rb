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
      @business.rating = rating_score
      render json: @business.to_json(include: {reviews: {include: :user}, photos:{}})
    end
  
    def index
      @businesses = Business.all
      render json: @businesses
    end
    
    def rating_score
      sum = 0
      return 0 if @business.reviews.length == 0
      @business.reviews.each do |review|
       sum += review.rating
      end
      return sum / @business.reviews.length
    end
      
    private
  
    def business_params
      params.require(:business).permit(:name, :location, :rating, :description)
    end
  end
end
