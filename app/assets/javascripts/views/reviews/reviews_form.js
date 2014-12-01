Expecto.Views.ReviewsForm = Backbone.CompositeView.extend({
	
	initialize: function(options){
	  this.business = options.business	
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
	  // var formData = $("#new-review-form").serializeJSON();
 // 	  formData.set("business_id", this.business.id)
 // 	  var model = new Expecto.Models.Review(formData)
 // 		  model.save();
  
 this.model.reviews().create({rating: this.$(".review_rating").val(), content: this.$(".review_content").val(), business_id: this.business.id});
	}
})