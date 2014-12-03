Expecto.Views.ReviewsShow = Backbone.CompositeView.extend({
	
    initialize: function(options) {
		this.business = options.business;
    	  this.listenTo(this.model, "sync change add remove", this.render)
    },
	
	template: JST['reviews/show'],
    render: function(){
		var id = this.model.get("user_id")
	  var user = Expecto.Collections.users.getOrFetch(id);
  	  var renderedContent = this.template({review: this.model, user: user})
  	  this.$el.html(renderedContent);
  	  return this;
    },
	
})