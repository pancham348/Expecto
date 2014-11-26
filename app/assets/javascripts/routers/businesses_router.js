Expecto.Routers.Businesses = Backbone.Router.extend({
	
	initialize: function(options){
		 this.$rootEl = options.$rootEl
	},
	
	routes: {
		"":"index"
	},
	
	index: function(){
		Expecto.Collections.businesses.fetch();
		var businesses = Expecto.Collections.businesses;
		var formView = new Expecto.Views.BusinessesIndex({collection: businesses})
		this._swapView(formView)
	},
	
	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;
		this.$rootEl.html(view.render().$el)
	}	
	
});
