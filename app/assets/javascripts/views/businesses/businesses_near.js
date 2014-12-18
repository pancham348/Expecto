Expecto.Views.NearShow = Backbone.CompositeView.extend({
		template: JST['businesses/near'],
	    render: function(){
	  	  var renderedContent = this.template({businesses: this.collection})
	  	  this.$el.html(renderedContent);
	  	  return this;
	    },
})