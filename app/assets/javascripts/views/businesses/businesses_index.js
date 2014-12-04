Expecto.Views.BusinessesIndex = Backbone.CompositeView.extend({
  initialize: function() {
  	  this.listenTo(
		  this.collection, 
		  "sync add remove", 
		  this.render
	  )
  },
  
  events: {
  	"click .categories li" : "renderCategory",
  },
  
  template: JST['businesses/index'],
  
  render: function(){
	  var renderedContent = this.template({
		  businesses: this.collection
	  })
	  this.$el.html(renderedContent);
	  return this;
  },
  
  

});
