window.Expecto= {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		Expecto.Collections.businesses.fetch({
			success: function () {
				new Expecto.Routers.Businesses({
				  $rootEl: $("#content")
				});

			    if (!Backbone.History.started) {
			  	  	Backbone.history.start();
			  	  }
				
			}
		});
	}
};

