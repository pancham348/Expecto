Expecto.Models.Review = Backbone.Model.extend({
	urlRoot: "api/reviews",
	user: function(){
	this._user = this._user ||
		new Expecto.Models.User();
	return this._user;

	},
	
	business: function(){
	this._business = this._business ||
		new Expecto.Models.Business();
	return this._business;

	},

parse: function(response){
	if(this.user){
		this.user().set(response.user, {parse: true})
		delete response.user;
	}
	
	if(this.business){
		this.business().set(response.business, {parse: true})
		delete response.business;
	}
	return response;
},

isValid: function(){
	if ((this.get("rating") === "")||(this.get("content") === "")) {
		return false;
	}else{
		return true;
	}
},

validation: {
	rating: {
		required: true
	},
	
	content: {
		required: true
	}
}
	
});
