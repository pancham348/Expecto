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
    },
	
	addReview: function(review){
			var reviewsShow = new Expecto.Views.ReviewsShow({model: review});
			this.addSubview(".reviews", reviewsShow)
		},
		
	addReviewForm: function(review){
			var reviewsForm = new Expecto.Views.ReviewsForm({model: this.model});
			this.addSubview(".reviews-form", reviewsForm)
		},
});