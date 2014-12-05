Expecto.Collections.Photos = Backbone.Collection.extend({
	url: '/api/photos',
  model: Expecto.Models.Photo,
	initialize: function(options){
		this.business = options.business
		this.user = options.user
	}
});
