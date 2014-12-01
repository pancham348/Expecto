module Api
  class ReviewsController < ApiController
  
    helper_method :current_business
    def create
      @review = Review.new(review_params)
      @review.business_id = current_business.id
      @review.user_id = current_user.id
      if @review.save
        render json: @review.to_json(include: :business)
      else
        render json: @review.erros.ful_messages, status: :unprocessable_entity
      end
    end
  
    def show
      @review = Review.find(params[:id])
      render json: @review
    end
  
    private
  
    def current_business
      if params[:id]
        @review = Review.find(params[:id])
        @business = @review.business
      elsif params[:review]
        @business = Review.find(params[:review][:business_id]) 
      end
    end
  
    def review_params
      params.require(:review).permit(:content, :rating)
    end
  end
end