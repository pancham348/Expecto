Expecto.Routers.Businesses = Backbone.Router.extend({
	
	initialize: function(options){
		 this.$rootEl = options.$rootEl
	},
	
	routes: {
		"":"index",
		"categories/:id" : "category",
		"businesses/:id" : "show"
	},
	
	index: function(){
		Expecto.Collections.businesses.fetch();
		var businesses = Expecto.Collections.businesses.where({category: "Pubs"});
	  	  var newCollection = new Expecto.Collections.Businesses()
	  	  for (var i = 0; i < businesses.length; i++) {
	  		  newCollection.add(businesses[i]);
	  	  }
		var formView = new Expecto.Views.BusinessesIndex({collection: newCollection})
		this._swapView(formView)
	},
	
    category: function(event){
		Expecto.Collections.businesses.fetch();
		var category = event
		if (event === "#") {
			category = "Pubs";
		}
 	  var businesses = Expecto.Collections.businesses.where({category: category});
	  var newCollection = new Expecto.Collections.Businesses()
	  for (var i = 0; i < businesses.length; i++) {
		  newCollection.add(businesses[i]);
	  }
 	  var formView = new Expecto.Views.BusinessesIndex({collection: newCollection})
 	  this._swapView(formView)
    },
	
	show: function(id){
		Expecto.Collections.businesses.fetch();
		var business = Expecto.Collections.businesses.getOrFetch(id);
		var formView = new Expecto.Views.BusinessShow({model: business});
		//debugger;
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
