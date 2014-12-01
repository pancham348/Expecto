json.extract!(@business)
	json.reviews do
	        json.array!(@business.reviews) do |review|
	            json.content review.content
	            json.rating review.rating
	        end
		end