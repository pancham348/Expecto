Expecto.Views.ReviewsUserShow = Backbone.CompositeView.extend({
	
    initialize: function(options) {
		this.business = options.business;
    	  this.listenTo(this.model, "sync change add remove", this.render)
    },
	
	template: JST['reviews/userShow'],
    render: function(){
  	  var renderedContent = this.template({review: this.model})
  	  this.$el.html(renderedContent);
  	  return this;
    },
	
})