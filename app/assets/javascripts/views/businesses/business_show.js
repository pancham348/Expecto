Expecto.Views.BusinessShow = Backbone.CompositeView.extend({
    initialize: function() {
    	  this.listenTo(this.model, "sync change add remove", this.render)
		// var mapOptions = {
		//   center: new google.maps.LatLng(-34.397, 150.644),
		//   zoom: 8
		// };
		//
		// var map = new google.maps.Map(document.getElementById("map-canvas"),
		//     mapOptions);
		//  google.maps.event.addDomListener(window, 'load', initialize);
    },
	
	template: JST['businesses/show'],
    render: function(){
  	  var renderedContent = this.template({business: this.model})
  	  this.$el.html(renderedContent);
  	  return this;
    },
});