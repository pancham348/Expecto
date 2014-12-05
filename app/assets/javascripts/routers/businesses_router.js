Expecto.Routers.Businesses = Backbone.Router.extend({
	
	initialize: function(options){
		this.$rootEl = options.$rootEl;
	},
	
	routes: {
		"":"index",
		"categories/:id" : "category",
		"businesses/:id" : "show",
		"users/:id" : "showUser",
		"neighborhoods/:id" : "switchNeighborhood"
	},
	
	index: function(){
		// var businesses = Expecto.Collections.businesses.where({
		// 	category: "Food",
		// 	neighborhood: _currentNeighborhood
		// });
		// var newCollection = new Expecto.Collections.Businesses(businesses)
		//
		// var formView = new Expecto.Views.BusinessesIndex({
		// 	collection: newCollection
		// })
		// this._swapView(formView)
		Backbone.history.navigate("/categories/Food", {trigger: true});
	},
	
    category: function(event){
		Expecto.Collections.businesses.fetch();
		var category = event
		if (event === "#") {
			category = "Food";
		}
		var businesses = Expecto.Collections.businesses.where({
		  category: category, 
		  neighborhood: _currentNeighborhood
		});
		var newCollection = new Expecto.Collections.Businesses(businesses)

		var formView = new Expecto.Views.BusinessesIndex({
			collection: newCollection
		})
		this._swapView(formView)
    },
	
	show: function(id){
		//Expecto.Collections.businesses.fetch();
		var business = Expecto.Collections.businesses.getOrFetch(id);
		var formView = new Expecto.Views.BusinessShow({ model: business });
		this._swapView(formView);
	},
	
	showUser: function(id){
		//Expecto.Collections.users.fetch()
		var user = Expecto.Collections.users.getOrFetch(id);
		var formView = new Expecto.Views.UsersShow({model: user});
		this._swapView(formView);
	},
	
	switchNeighborhood: function(neighborhoodName) {
		neighborhoodName = neighborhoodName.replace(/\+/g, ' ');
		
		var hood = _currentNeighborhood = neighborhoodName;
		// var businesses = Expecto.Collections.businesses.where({
		//   neighborhood: hood
		// });
		//
		// var newCollection = new Expecto.Collections.Businesses(businesses)
		// var indexView = new Expecto.Views.BusinessesIndex({
		// 	collection: newCollection
		// })
		//
		// debugger
		// this._swapView(indexView)
		Backbone.history.navigate('/', {trigger: true})
	},
	
	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;
		this.$rootEl.html(view.render().$el);
		view.onRender && view.onRender();
	}	
	
});
