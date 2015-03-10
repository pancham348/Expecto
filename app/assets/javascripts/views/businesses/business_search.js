Expecto.Views.BusinessSearch = Backbone.CompositeView.extend({
	
	template: JST['businesses/search'],
	
    initialize: function() {
    	  this.listenTo(
  		  this.collection, 
  		  "sync add remove", 
  		  this.render
  	  )
	  
    },
	render: function(){
		var renderedContent = this.template({businesses: this.collection});
  	  this.$el.html(renderedContent);
  	  $rating = this.$el.find('.star-input');
  	  $rating.raty({score: function(){
  	  	return $(this).attr('data-score');
  	  }, readOnly: true});
  	  return this;
	}
	
});