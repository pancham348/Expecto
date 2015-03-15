Expecto.Views.PhotosForm = Backbone.View.extend({
  initialize: function(options){
		this.business = options.business;
  },
  template: JST['photos/form'],
  events: {
		"click .btn-default":"submitForm"
	},
  render: function(){
	var renderedContent = this.template()
	this.$el.html(renderedContent);
	  var $filePicker = this.$("input[type=filepicker]")
	  filepicker.constructWidget($filePicker[0]);
	  return this;
  },
  
	submitForm: function(event){
		event.preventDefault();
		var that = this;
		
	  	  filepicker.pick(function(blob) {
	  		if (that.$("#photo_caption").val() === "") {
	  			$("#photo-errors").addClass("alert alert-danger alert-dismissible").append("<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><strong>Warning!</strong> Please enter a caption for the photo.")
	  		}else{
	  		  that.model.photos().create({img_src: blob.url, 
	  		  caption: that.$("#photo_caption").val(), business_id: that.business.id}, {wait: true});
		  	}
	  	  });
	  

	},

});
