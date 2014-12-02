Expecto.Views.BusinessShow = Backbone.CompositeView.extend({
		template: JST['businesses/show'],
	
    render: function(){
  	  var renderedContent = this.template({business: this.model})
  	  this.$el.html(renderedContent);
	  this.attachSubviews();
  	  var $filePicker = this.$("input[type=filepicker]")
  		  filepicker.constructWidget($filePicker[0]);
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
		this.model.reviews().each(this.addReview.bind(this));
		if (_currentUserJSON != 'null') {
			this.addReviewForm();
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
		// upload: function () {
// 			var that = this;
// 		  filepicker.pick(function(blob) {
// 		    that.model.set("img_src", blob.url)
// 			  that.model.save()
// 			  that.render()
// 		  });
// 		}

	initializeMap: function () {
		if (this._alreadyRendered) {
	  	  var mapOptions = {
	  	    zoom: 8,
	  	    center: new google.maps.LatLng(51.4, -0.12)
	  	  };

	  	  var map = new google.maps.Map(document.getElementById('map-canvas'),
	  	      mapOptions);
		}
	},
	
	onRender: function () {
		this._alreadyRendered = true;
		this.initializeMap();
	}
});