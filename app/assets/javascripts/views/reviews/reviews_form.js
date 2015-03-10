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
        this.model.reviews().create({
			rating: $('.input-rating').find('input[name="score"]').val(), 
		    content: this.$(".review_content").val(), 
		    business_id: this.business.id
		}, { wait: true });
		//$('.star-input').empty();
		if ($('.input-rating').find('input[name="score"]').val() === null) {
			$(".input-rating").addClass("form-group has-error")
		}
		$(".review_content").val(''); 
		$(".review_content").focus(); 
	}
})