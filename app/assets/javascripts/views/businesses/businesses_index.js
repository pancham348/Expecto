Expecto.Views.BusinessesIndex = Backbone.View.extend({
	initialize: function() {
		    this.listenTo(this.collection, "sync", this.render)
		  },
  template: JST['businesses/index'],
  render: function(){
	  var renderedContent = this.template({businesses: this.collection})
	  this.$el.html(renderedContent);
	  return this;
  },
  
  

});
