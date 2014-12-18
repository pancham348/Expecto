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
			
			if(this.photos){
				this.photos().set(response.photos, {parse: true})
				delete response.photos;
			}
			return response;
		},
		
		photos: function(){

				this._photos = this._photos ||
					new Expecto.Collections.Photos([],{business: this});
				return this._photos;

			},

			// parse: function(response){
// 				if(this.photos){
// 					this.photos().set(response.photos, {parse: true})
// 					delete response.photos;
// 				}
// 				return response;
// 			}
});
