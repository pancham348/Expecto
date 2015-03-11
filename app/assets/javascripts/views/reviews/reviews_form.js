Expecto.Views.ReviewsForm = Backbone.CompositeView.extend({
	
	initialize: function(options){
		this.business = options.business;
	},
	
	template: JST['reviews/form'],
	events: {
		"click #review-submit":"submitForm"
	},
    render: function(){
  	  var renderedContent = this.template()
  	  this.$el.html(renderedContent);
  	  return this;
    },
	
	submitForm: function(event){
		event.preventDefault();
        // this.model.reviews().create({
// 			rating: $('.input-rating').find('input[name="score"]').val(),
// 		    content: this.$(".review_content").val(),
// 		    business_id: this.business.id
// 		}, { wait: true });
		var review = new Expecto.Models.Review({
			rating: $('.input-rating').find('input[name="score"]').val(),
		    content: this.$(".review_content").val(),
		    business_id: this.business.id
		})
		
		if (review.isValid()) {
			this.model.reviews().create(review, { wait: true });
		}else{
			$("#review-errors").addClass("alert alert-danger alert-dismissible").append("<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Warning!</strong> Please select a rating and enter some text in the review text box.")
		}
		
		
		//$('.star-input').empty();
		$(".review_content").val(''); 
		$(".review_content").focus(); 
	}
})