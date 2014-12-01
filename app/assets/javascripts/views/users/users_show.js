Expecto.Views.UsersShow = Backbone.CompositeView.extend({

  template: JST['users/show'],
    render: function(){
  	  var renderedContent = this.template({user: this.model})
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
    },
	addReview: function(review){
			var reviewsShow = new Expecto.Views.ReviewsShow({model: review});
			this.addSubview(".reviews", reviewsShow)
		},

});
