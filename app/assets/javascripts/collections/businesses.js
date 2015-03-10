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
	search: function (query) {
			result_collection = new Expecto.Collections.Businesses();
			var results = this.filter(function (model) {
				var matchedExp = new RegExp(query, 'i');
				var thing = model.get('name').match(matchedExp);
				if (thing) {
					return true;
				} else {
					return false;
				}
			});
		
			result_collection.set(results);
			return result_collection
		}   

});
Expecto.Collections.businesses = new Expecto.Collections.Businesses();