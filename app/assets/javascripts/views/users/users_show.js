Expecto.Views.UsersShow = Backbone.CompositeView.extend({

  template: JST['users/show'],
	events: {
		"click .btn-default": "upload"
	},
    render: function(){
  	  var renderedContent = this.template({user: this.model})
  	  this.$el.html(renderedContent);
	  var $filePicker = this.$("input[type=filepicker]")
		  filepicker.constructWidget($filePicker[0]);
	  this.attachSubviews();
	  $(".star-input").rating();
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
		var that = this;
	  filepicker.pick(function(blob) {
	    that.model.set("img_src", blob.url)
		  that.model.save()
		  that.render()
	  });
	}

});
