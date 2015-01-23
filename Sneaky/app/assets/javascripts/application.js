// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require dropzone.min
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars
//= require_self
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree .
var App = {
	Models: {}, 
	Collections: {}, 
	Views: {}, 
	Routers: {},
	initialize: function() {
		console.log('first hi');
		App.images = new App.Collections.imageCollection();
		App.imageCollectionView = new App.Views.imageCollectionView({ collection:App.images});
		App.images.fetch({reset: true});

	 x = $("#demo")[0];
		// window.onload = function() {
			function getLocation() {
    	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
   	  } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    	}
		}
		function showPosition(position) {
			var lat = position.coords.latitude;
			var long = position.coords.longitude;
    	x.innerHTML = "Latitude: " + lat + 
    	"<br>Longitude: " + long; 

    	$('#upload_latitude').attr('value', lat)
    	$('#upload_longitude').attr('value', long)
		}
		getLocation()
	}


};

$(function() {
	App.initialize();
});

