module Api
  class ReviewsController < ApiController
  
    
    def create
      @review = Review.new(review_params)
      @review.user_id = current_user.id
      if @review.save
        render json: @review
      else
        render json: @review.errors.full_messages, status: :unprocessable_entity
      end
    end
  
    def show
      @review = Review.find(params[:id])
      render json: @review.to_json(include: :user)
    end
  
    private
    
    def review_params
      params.require(:review).permit(:content, :rating, :business_id)
    end
  end
end