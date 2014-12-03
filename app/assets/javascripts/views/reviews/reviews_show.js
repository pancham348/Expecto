Expecto.Views.ReviewsShow = Backbone.CompositeView.extend({
	
    initialize: function(options) {
		this.business = options.business;
		view = this;
    },
	
	template: JST['reviews/show'],
    render: function(){
		
	  var renderedContent = this.template({
		  review: this.model, 
		  user: this.user
	  });
  	  this.$el.html(renderedContent);
  	  return this;
    },
	
})