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
			lat = position.coords.latitude;
			long = position.coords.longitude;
    	x.innerHTML = "Latitude: " + lat + 
    	"<br>Longitude: " + long; 

    	$('#upload_latitude').attr('value', lat)
    	$('#upload_longitude').attr('value', long)

    	googleMaps();
		}
		getLocation()


		function googleMaps() {
    var map;
    var elevator;
    var myLatlng = new google.maps.LatLng($('#upload_latitude').attr('value'), $('#upload_longitude').attr('value'));
    var myOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: 'roadmap'
    };
    map = new google.maps.Map($('#map_canvas')[0], myOptions);

    var marker = new google.maps.Marker({
    	position: myLatlng,
    	title: "Your current location",
    	icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
		});

    var currentCircle;

		var currentCircle = new google.maps.Circle({
			fillColor: '#7D8EE2',
			fillOpacity: 0.35,
			map:map,
			center: myLatlng,
			radius: 1600,
			strokeWeight: 0
		});

		marker.setMap(map);

    var addresses = [];
    var picturesForMarkers = [];
    var divPictureLatitude = $('.pictures');
    $.each(divPictureLatitude, function (i, val) {
        addresses.push(val.children[1].value + ", " + val.children[2].value);
        picturesForMarkers.push(val.children[0].src);

    });

    var infowindow = new google.maps.InfoWindow();
    var i; // I removed marker.

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address=' + addresses[x] + '&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location;
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            var marker = new google.maps.Marker({
                position: latlng,
                map: map
            });
            // The marker has been added to the map, add the event to the marker.
            google.maps.event.addListener(marker, 'click', (function (marker, x) {
                return function () {
                    var content = '<img src="' + picturesForMarkers[x] + '" style="width:300px;">';
                    console.log(content);
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                };
            })(marker, x));
        });
      }
	 };
	}


};

$(function() {
	App.initialize();
});

