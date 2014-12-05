Expecto.Views.PhotosShow = Backbone.View.extend({
    initialize: function(options) {
		this.business = options.business;
    	  this.listenTo(this.model, "sync change add remove", this.render)
    },
  template: JST['photos/show'],
	render: function(){
		var renderedContent = this.template({photo: this.model})
		this.$el.html(renderedContent);
		return this;
	},

});
