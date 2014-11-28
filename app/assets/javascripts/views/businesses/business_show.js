Expecto.Views.BusinessShow = Backbone.CompositeView.extend({
    initialize: function() {
    	  this.listenTo(this.model, "sync change add remove", this.render)
    },
	
	template: JST['businesses/show'],
    render: function(){
  	  var renderedContent = this.template({business: this.model})
  	  this.$el.html(renderedContent);

  	  return this;
    },
});