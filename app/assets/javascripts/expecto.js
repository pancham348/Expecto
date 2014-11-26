window.Expecto= {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
	  new Expecto.Routers.Businesses({
		  $rootEl: $("#content")
	  });
	  Backbone.history.start();
  }
};

