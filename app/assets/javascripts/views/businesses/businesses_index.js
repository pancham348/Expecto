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
	  return this;
  },
  
  makeActive: function(event){
	  $(event.currentTarget).addClass("active")
  }

});
