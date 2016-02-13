

var map = L.map('map').setView([40.71,-73.93], 13);

//link cartoDB tiles

var cartoDBTiles = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{ 
  attribution: 'Map Data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors, Map Tiles &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});

// add cartodb tiles to map
map.addLayer(cartoDBTiles);

//

$.getJSON("geojson/NYC_neighborhood_data.geojson", function( data ) {
	var neighborhoods = data;

	console.log(neighborhoods);

	var popStyle = function ( feature ) {
		var value = (feature.properties.Pop / feature.properties.sq_mile);
		var fillColor = null;

		if(value >= 0 && value <=10000){
            fillColor = "#f0f9e8";
        }
        if(value >10000 && value <=30000){
            fillColor = "#ccebc5";
        }
        if(value >30000 && value<=50000){
            fillColor = "#a8ddb5";
        }
        if(value >50000 && value <=70000){
            fillColor = "#7bccc4";
        }
        if(value >60000 && value <=80000) { 
            fillColor = "#43a2ca";
        }
        if(value >80000) { 
            fillColor = "#0868ac";
        }
		if (feature.properties.NYC_NEIG == "Central Park"){
			fillColor= null
		}

        var style = {
            weight: 2,
            opacity: .2,
            color: 'black',
            fillOpacity: 0.75,
            fillColor: fillColor
        };

        return style;
    }

        var popClick = function ( feature, layer ) {
        layer.bindPopup("<strong>Neighborhood:</strong> " + feature.properties.NYC_NEIG + "<br /><light>Population: </light>" + feature.properties.Pop );
    }

    neighborhoodsGeoJSON = L.geoJson(neighborhoods, {
        style: popStyle,
        onEachFeature: popClick
    }).addTo(map);

});


$.getJSON("geojson/PollingSites.geojson", function( data ) {
	var pollingsites = data;

	var polStyle = function (feature , latlng){
		var pointMarker = L.circle(latlng, 50, {
			stroke: true,
			color: 'black',
			weight: .5,
			opacity: 1,
            fillColor: '#ffc100',
            fillOpacity: 1
		});

		return pointMarker;
	}

	var polClick = function (feature, layer) {
		layer.bindPopup("<strong>Polling Site:</strong> " + feature.properties.SITE_NAME + "<br /><light>Street:</light> " + feature.properties.STREET_NAME);
	}

	pollingsitesGeoJSON = L.geoJson(pollingsites, {
	pointToLayer: polStyle,
	onEachFeature: polClick
	}).addTo(map);

});

