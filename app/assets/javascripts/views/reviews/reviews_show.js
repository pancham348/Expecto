Expecto.Views.ReviewsShow = Backbone.CompositeView.extend({
	
    initialize: function() {
    	  this.listenTo(this.model, "sync change add remove", this.render)
    },
	
	template: JST['reviews/show'],
    render: function(){
  	  var renderedContent = this.template({review: this.model})
  	  this.$el.html(renderedContent);
  	  return this;
    },
	
})