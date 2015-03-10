
The site is currently delpoyed here: http://expecto.herokuapp.com

Expecto is a Yelp influenced, single Page application built using Backbone.js on top of a Ruby on Rails api. The purpose of this app was to demonstrate the skills and knowledge I had gained during my time at App Academy. The core functionality of this app is to rate and review businesses found in the Harry Potter universe. Users can rate businesses, write reviews and upload photos. The overall rating of the business is calculated by averaging the review scores. The businesses ae broken down into category and neighborhood. Currently there are two neighborhoods and five categories. Users can switch between neighborhoods and categories by clicking links on the main user page. Each business has it's own page where the reviews, ratings and photos are displayed along with a map showing the business location. In addition each user has a profile page that keeps track of each rating and review they have submitted.

##Some technical features include:##
	* Utilizes Backbone composite view pattern
	* Customized authentication system using the 'BCrypt' gem
	* Customized JSON serialization for reducing data transfer
	* Customized back-end validations for unique user names, ratings and reviews
	* Backend associations connecting Users, Reviews, and Businesses
	* Searches businesses using regex patterns.
	* Front end prevention of submitting a review without being logged in
	* Lightbox modals for pictures
	* Consumes the Google maps api for showing the location of a Business
	* Consumes filepicker api for uploading photos and profile pictures


##Features currently being added:##
	* Autocomplete plug-in for search
	* Carousel for photos on business show page
	* Front-end validations
##Possible additions:##
	* Messaging between users
	* Separate business accounts for business owners

