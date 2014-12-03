Expecto.Collections.Businesses = Backbone.Collection.extend({
  url: "/api/businesses",
  model: Expecto.Models.Business,
  getOrFetch: function(id){
		var model = this.get(id);
		var that = this;
		if (model) {
			model.fetch();
		}else{
			model = new Expecto.Models.Business({id: id})
			model.fetch({
				success: function(){
					that.add(model)
				}
			})
		}
		return model;
	},

});
Expecto.Collections.businesses = new Expecto.Collections.Businesses();