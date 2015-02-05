Expecto.Views.BusinessesIndex = Backbone.CompositeView.extend({
  initialize: function() {
  	  this.listenTo(
		  this.collection, 
		  "sync add remove", 
		  this.render
	  )
	  
  },
  
  events: {
  	"click .list-group-item" : "makeActive",
  },
  
  template: JST['businesses/index'],
  
  render: function(){
	  var renderedContent = this.template({
		  businesses: this.collection
	  })
	  this.$el.html(renderedContent);
	  $rating = this.$el.find('.star-input');
	  $rating.raty({score: function(){
	  	return $(this).attr('data-score');
	  }, readOnly: true});
	  return this;
  }
  

});
