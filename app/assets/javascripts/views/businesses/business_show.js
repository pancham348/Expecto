Expecto.Views.BusinessShow = Backbone.CompositeView.extend({
		template: JST['businesses/show'],
	
    render: function(){
  	  var renderedContent = this.template({business: this.model})
  	  this.$el.html(renderedContent);
	  this.attachSubviews();
  	  return this;
    },
	initialize: function() {
    	  this.listenTo(this.model, "sync change", this.render)
		this.listenTo(
					this.model.reviews(), "add", this.addReview
				);
		this.model.reviews().each(this.addReview.bind(this));
		
		if (_currentUserJSON != 'null') {
			this.addReviewForm();
		}
		
		// google.maps.event.addDomListener(window, 'load', this.active);
    },
	
 	// active: function() {
//  	  var mapOptions = {
//  	    zoom: 8,
//  	    center: new google.maps.LatLng(-34.397, 150.644)
//  	  };
//
//  	  var map = new google.maps.Map(document.getElementById('map-canvas'),
//  	      mapOptions);
//  	  //debugger;
//  	},
	
	addReview: function(review){
			var reviewsShow = new Expecto.Views.ReviewsShow({model: review});
			this.addSubview(".reviews", reviewsShow)
		},
		
	addReviewForm: function(review){
			var reviewsForm = new Expecto.Views.ReviewsForm({model: this.model, business: this.model});
			this.addSubview(".reviews-form", reviewsForm)
		},
});