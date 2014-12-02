Expecto.Views.UsersShow = Backbone.CompositeView.extend({

  template: JST['users/show'],
	events: {
		"click .btn btn-default": "changeImg"
	},
    render: function(){
  	  var renderedContent = this.template({user: this.model})
  	  this.$el.html(renderedContent);
	  var $filePicker = this.$("input[type=filepicker]")
		  filepicker.constructWidget($filePicker[0]);
	  this.attachSubviews();
  	  return this;
    },
	initialize: function() {
		
    	this.listenTo(this.model, "sync change", this.render)
		this.listenTo(
					this.model.reviews(), "add", this.addReview
				);
		this.model.reviews().each(this.addReview.bind(this));
    },
	addReview: function(review){
			var reviewsShow = new Expecto.Views.ReviewsUserShow({model: review});
			this.addSubview(".reviews", reviewsShow)
		},
	upload: function () {
	  filepicker.pick(function(blob) {
	    var newImage = new MyApp.Models.Image({
	      img_src: blob.url
	    });
	    newImage.save({}, {
	      success: function () {
	        alert('Image saved!');
	      }
	    })
	  });
	}

});
