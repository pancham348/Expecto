Expecto.Routers.Businesses = Backbone.Router.extend({
	
	initialize: function(options){
		this.$rootEl = options.$rootEl;
		this.neighborhood = "Diagon Alley";
	},
	
	routes: {
		"":"index",
		"categories/:id" : "category",
		"businesses/:id" : "show",
		"users/:id" : "showUser",
		"neighborhoods/:id" : "switchNeighborhood"
	},
	
	index: function(){
		Expecto.Collections.businesses.fetch();
		var businesses = Expecto.Collections.businesses.where({category: "Food", neighborhood: this.neighborhood});
	  	  var newCollection = new Expecto.Collections.Businesses()
	  	  for (var i = 0; i < businesses.length; i++) {
	  		  newCollection.add(businesses[i]);
	  	  }
		var formView = new Expecto.Views.BusinessesIndex({collection: newCollection, neighborhood: this.neighborhood})
		this._swapView(formView)
	},
	
    category: function(event){
		Expecto.Collections.businesses.fetch();
		var category = event
		if (event === "#") {
			category = "Food";
		}
 	  var businesses = Expecto.Collections.businesses.where({category: category, neighborhood: this.neighborhood});
	  var newCollection = new Expecto.Collections.Businesses()
	  for (var i = 0; i < businesses.length; i++) {
		  newCollection.add(businesses[i]);
	  }
 	  var formView = new Expecto.Views.BusinessesIndex({collection: newCollection})
 	  this._swapView(formView)
    },
	
	show: function(id){
		//Expecto.Collections.businesses.fetch();
		var business = Expecto.Collections.businesses.getOrFetch(id);
		var formView = new Expecto.Views.BusinessShow({model: business});
		this._swapView(formView)
	},
	
	showUser: function(id){
		//Expecto.Collections.users.fetch()
		var user = Expecto.Collections.users.getOrFetch(id);
		var formView = new Expecto.Views.UsersShow({model: user});
		this._swapView(formView);
	},
	
	switchNeighborhood: function(id){
		
		if (this.neighborhood === "Diagon Alley") {
			this.neighborhood = "Hogsmeade"
		}else{
			this.neighborhood = "Diagon Alley"
		}
	  var hood = this.neighborhood;
   	  var businesses = Expecto.Collections.businesses.where({neighborhood: this.neighborhood});
  	  var newCollection = new Expecto.Collections.Businesses()
  	  for (var i = 0; i < businesses.length; i++) {
  		  newCollection.add(businesses[i]);
  	  }
   	  var formView = new Expecto.Views.BusinessesIndex({collection: newCollection, neighborhood: hood})
   	  this._swapView(formView)
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
