Expecto.Models.Photo = Backbone.Model.extend({
	urlRoot: '/api/photos',
	
	isValid: function(){
		if ((this.get("img_src") === "")||(this.get("caption") === "")) {
			return false;
		}else{
			return true;
		}
	}
});
