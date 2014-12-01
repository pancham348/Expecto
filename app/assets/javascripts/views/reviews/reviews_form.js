Expecto.Views.ReviewsForm = Backbone.CompositeView.extend({
	
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
		
				  var formData = $("#new-review-form").serializeJSON();
				  
				  var model = new Expecto.Models.Review(formData)
					  model.save();
				
				 this.model.reviews().create(model);
	}
})