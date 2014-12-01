Expecto.Models.Business = Backbone.Model.extend({
	urlRoot: "/api/businesses",
	reviews: function(){

			this._reviews = this._reviews ||
				new Expecto.Collections.Reviews([],{business: this});
			return this._reviews;

		},

		parse: function(response){
			if(this.reviews){
				this.reviews().set(response.reviews, {parse: true})
				delete response.reviews;
			}
			return response;
		}
});
