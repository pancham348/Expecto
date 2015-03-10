initSearch = function(){
	$('#search-form').on('submit', function(event){
		event.preventDefault();
		// var thing = $(event.currentTarget).serialize();
		debugger;
		var thing = $(event.currentTarget).find('input').val();
		var thingEnc = encodeURIComponent(thing);
		Backbone.history.navigate('search/?business%3D' + thingEnc, {trigger: true});
	})
}

$(initSearch)

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

