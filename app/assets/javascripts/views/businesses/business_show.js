Expecto.Views.BusinessShow = Backbone.CompositeView.extend({
		template: JST['businesses/show'],
	
    render: function(){
  	  var renderedContent = this.template({business: this.model})
  	  this.$el.html(renderedContent);
	  this.attachSubviews();
	  //$("#input-2").rating();
	  this.initializeMap();
  	  return this;
    },
	
	events: {
		"click .btn-default": "upload"
	},
	initialize: function() {
		this._alreadyRendered = false;
		
    	  this.listenTo(this.model, "sync change", this.render)
		this.listenTo(
					this.model.reviews(), "add", this.addReview
				);
		this.listenTo(
					this.model.photos(), "add", this.addPhoto
				);
		this.model.reviews().each(this.addReview.bind(this));
		this.model.photos().each(this.addPhoto.bind(this));
		if (_currentUserJSON != 'null') {
			this.addReviewForm();
			
			this.addPhotoForm()
		}
		view = this;
    },
	
	addReview: function(review){
		var reviewsShow = new Expecto.Views.ReviewsShow({model: review});
		this.addSubview(".reviews", reviewsShow)
	},
		
	addReviewForm: function(review){
		var reviewsForm = new Expecto.Views.ReviewsForm({model: this.model, business: this.model});
		this.addSubview(".reviews-form", reviewsForm)
	},
	
	addPhoto: function(photo){
		var photosShow = new Expecto.Views.PhotosShow({model: photo});
		this.addSubview(".photos", photosShow);
	},
	
	addPhotoForm: function(){
		var photoForm = new Expecto.Views.PhotosForm({model: this.model, business: this.model});
		this.addSubview(".photos-form", photoForm);
	},
	
	initializeMap: function () {
		if (this._alreadyRendered) {
		  var myLatlng = new google.maps.LatLng(this.model.get("latitude"),this.model.get("longitude"));	
	  	  var mapOptions = {
	  	    zoom: 8,
	  	    center: myLatlng
	  	  };

	  	  var map = new google.maps.Map(document.getElementById('map-canvas'),
	  	      mapOptions);
		  
		  var marker = new google.maps.Marker({
		      position: myLatlng,
		      map: map,
		      title: 'Hello World!'
		  });
		}
	},
	
	onRender: function () {
		this._alreadyRendered = true;
		this.initializeMap();
		$(".star-input").rating();
	}
});