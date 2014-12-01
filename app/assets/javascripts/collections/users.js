Expecto.Collections.Users = Backbone.Collection.extend({
	url: "/api/users",
  model: Expecto.Models.User,
    getOrFetch: function(id){
  		var model = this.get(id);
  		var that = this;
  		if (model) {
  			model.fetch();
  		}else{
  			model = new Expecto.Models.User({id: id})
  			model.fetch({
  				success: function(){
  					that.add(model)
  				}
  			})
  		}
		
  		return model;
  	},

});
Expecto.Collections.users = new Expecto.Collections.Users()