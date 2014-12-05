Expecto.Models.User = Backbone.Model.extend({
	urlRoot: "/api/users",
	reviews: function(){

			this._reviews = this._reviews ||
				new Expecto.Collections.Reviews([],{user: this});
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
