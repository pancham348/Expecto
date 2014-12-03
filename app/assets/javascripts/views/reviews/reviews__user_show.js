Expecto.Views.ReviewsUserShow = Backbone.CompositeView.extend({
	
    initialize: function(options) {
		this.business = options.business;
    	  this.listenTo(this.model, "sync change add remove", this.render)
    },
	
	template: JST['reviews/userShow'],
    render: function(){
		var id = this.model.get("business_id")
	  var business = Expecto.Collections.businesses.getOrFetch(id);
  	  var renderedContent = this.template({review: this.model, business: business})
  	  this.$el.html(renderedContent);
  	  return this;
    },
	
})