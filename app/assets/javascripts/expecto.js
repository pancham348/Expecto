window.Expecto= {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
	  new Expecto.Routers.Businesses({
		  $rootEl: $("#content")
	  });
	  
	  if (!Backbone.History.started) {
	  	Backbone.history.start();
	  }
  }
};

