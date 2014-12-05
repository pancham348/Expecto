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
		  that.model.photos().create({img_src: blob.url, 
		  caption: that.$("#photo_caption").val(), business_id: that.business.id});
	  });

	},

});
