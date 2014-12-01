Expecto.Collections.Reviews = Backbone.Collection.extend({

  model: Expecto.Models.Review,
  url: function(){
		return this.review.url()
	},
	
  initialize: function(models, options){
	this.business = options.business;
	this.user = options.user;
   }
  
});
