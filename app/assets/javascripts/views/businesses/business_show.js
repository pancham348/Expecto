Expecto.Views.BusinessShow = Backbone.CompositeView.extend({
	template: JST['businesses/show'],
	
    render: function(){
  	  var renderedContent = this.template({business: this.model})
  	  this.$el.html(renderedContent);
	  this.attachSubviews();
	  //$("#input-2").rating();
	  this.initializeMap();
 	$inputRating = this.$el.find('.input-rating').empty();
    $inputRating.raty();
	$rating = this.$el.find('#rating');
	$rating.raty({score: this.model.get("rating"), readOnly: true});
	// $photos = this.$el.find('.carousel-photos');
// 	$photos.bxSlider({
// 		slideWidth: 500,
// 		responsive: true
// 	});
	
	if(this.model.notUnique()){
		$(".reviews-form").remove()
		$("#review-errors").addClass("alert alert-danger").append("<span aria-hidden='true'></span><strong>Warning!</strong> You have already reviewed this business, please select another business to review.")
	}

  	  return this;
    },
	
	events: {
		"click .btn-default": "upload"
	},
	initialize: function() {
		this._alreadyRendered = false;
		
    	  this.listenTo(this.model, "sync change add", this.render)
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
			this.addPhotoForm();
		}
		
		Backbone.Validation.bind(this);
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
		this.addSubview(".carousel-photos", photosShow);
	},
	
	addPhotoForm: function(){
		var photoForm = new Expecto.Views.PhotosForm({model: this.model, business: this.model});
		this.addSubview(".photos-form", photoForm);
	},
	
	// checkUniqueReview: function(){
// 		for (var i = 0; i < this.model.reviews().models.length; i++) {
// 			if(this.model.reviews().models[i].get("user_id") === currentUser.id){
// 				console.log("already wrote a review");
// 			}
// 		}
// 	},
	// addNearbyShops: function(){
	// 	Expecto.Collections.businesses.fetch()
	// 	var near_biz = Expecto.Collections.businesses.where({category: this.model.category, neighborhood: _currentNeighborhood})
	// 	var near_collection = new Expecto.Collections.Businesses(near_biz)
	// 	var nearShow = new Expecto.Views.NearShow({collection: near_collection});
	// 	this.addSubview(".near", nearShow);
	// },
	
	initializeMap: function () {
		if (this._alreadyRendered) {
		  var myLatlng = new google.maps.LatLng(this.model.get("latitude"),this.model.get("longitude"));	
	  	  var mapOptions = {
	  	    zoom: 15,
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
	
	// initializeRating: function () {
// 	 	$inputRating = this.$el.find('.input-rating');
// 	    $inputRating.raty();
// 	},
	
	onRender: function () {
		this._alreadyRendered = true;
		this.initializeMap();
		//this.checkUniqueReview();
		// $(".star-input").rating();
  	 	
	}
});