Expecto.Views.BusinessesIndex = Backbone.CompositeView.extend({
  initialize: function() {
	  this.render();
  	  this.listenTo(this.collection, "sync change:neighborhood add remove", this.render)
  },
  events: {
  	"click .categories li" : "renderCategory",
	"click #hogsmeade": "switchNeighborhood"
  },
  template: JST['businesses/index'],
  render: function(){
	  var renderedContent = this.template({businesses: this.collection, neighborhood: this.hood})
	  this.$el.html(renderedContent);
	  return this;
  },
  
  

});
