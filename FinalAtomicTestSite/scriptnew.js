///**********************  MAPS  ************************///

//initialize three maps
var map1 = L.map('map1').setView([33.6773, -106.4754], 7);
var map2 = L.map('map2').setView([37.0875, -116.0192], 7);
var map3 = L.map('map3').setView([11.697222, 165.271944], 9);
//get 3 sets of basemap tiles
var CartoDBTiles1 = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
  attribution: 'Map Data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors, Map Tiles &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});
var CartoDBTiles2 = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
  attribution: 'Map Data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors, Map Tiles &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});
var CartoDBTiles3 = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
  attribution: 'Map Data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors, Map Tiles &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
});
//add tile sets to each map
map1.addLayer(CartoDBTiles1);
map2.addLayer(CartoDBTiles2);
map3.addLayer(CartoDBTiles3);


//MAP STYLE VARIABLES

var ViewshedStyle = {
    "color": "white",
    "weight": 0,
    "fillColor": "#f4d686",
    "fillOpacity": .50
};

var BuffStyle = {
	"stroke":true,
    "color": "#850200",
    "weight": 1,
    "opacity": 85,
    "fillOpacity": 0
};

var CloudStyle = {
    "color": "white",
    "weight": 1,
    "opacity": 85,
    "fillColor": "none",
    "fillOpacity": 0
};

//TRINITY DATA and LOAD TO MAP

/////MAP GLOBAL VARIABLES
var TrinityViewshedGeoJson;
var TrinitySiteGeoJson;
var TrinityBuffGeoJson;
var TrinityCloudGeoJson;

addTrinityViewshed();

function addTrinityViewshed() {
		$.getJSON( "data/trinityWGS.geojson", function( data ) {
			var TrinityViewshed = data;

			TrinityViewshedGeoJson = L.geoJson(TrinityViewshed, {
				style: ViewshedStyle
			});

		addTrinityBuff();
	});
}

function addTrinityBuff() {
		$.getJSON( "data/trinitybuff.geojson", function( data ) {
			var TrinityBuff = data;

			TrinityBuffGeoJson = L.geoJson(TrinityBuff, {
				style: BuffStyle
			});

		addTrinityCloud();
	});
}

function addTrinityCloud() {
		$.getJSON( "data/trinitycloud.geojson", function( data ) {
			var TrinityCloud = data;

			TrinityCloudGeoJson = L.geoJson(TrinityCloud, {
				style: CloudStyle
			});

		addTrinitySite();
	});
}

function addTrinitySite() {
		$.getJSON( "data/trinitysite.geojson", function( data ) {
			var TrinitySite = data;

			var TrinitySitePointToLayer = function (feature, latlng){
				var siteMarker = L.circle(latlng, 50, {
				stroke: false,
				fillColor: "red",
				fillOpacity: 100
			});
		return siteMarker;
	}

    var TrinitySiteClick = function (feature, layer) {
        layer.bindPopup("<strong>Trinity Test Detonation Site<strong>");
    }

    TrinitySiteGeoJson = L.geoJson(TrinitySite,{
    	pointToLayer: TrinitySitePointToLayer,
    	onEachFeature: TrinitySiteClick
    });

    //Viewshed on bottom
    TrinityViewshedGeoJson.addTo(map1);
    //Buff next
	TrinityBuffGeoJson.addTo(map1);
	//Cloud next
	TrinityCloudGeoJson.addTo(map1);
	//Site last
	TrinitySiteGeoJson.addTo(map1);
	});
}


//CLIMAX DATA and LOAD TO MAP
var ClimaxViewshedGeoJson;
var ClimaxSiteGeoJson;
var ClimaxBuffGeoJson;
var ClimaxCloudGeoJson;

addClimaxViewshed();

function addClimaxViewshed() {
		$.getJSON( "data/climaxWGS.geojson", function( data ) {
			var ClimaxViewshed = data;

			ClimaxViewshedGeoJson = L.geoJson(ClimaxViewshed, {
				style: ViewshedStyle
			});

		addClimaxBuff();
	});
}

function addClimaxBuff() {
		$.getJSON( "data/climaxbuff.geojson", function( data ) {
			var ClimaxBuff = data;

			ClimaxBuffGeoJson = L.geoJson(ClimaxBuff, {
				style: BuffStyle
			});

		addClimaxCloud();
	});
}

function addClimaxCloud() {
		$.getJSON("data/climaxcloudnew.geojson", function( data ) {
			var ClimaxCloud = data;

			ClimaxCloudGeoJson = L.geoJson(ClimaxCloud, {
				style: CloudStyle
			});

		addClimaxSite();
	});
}

function addClimaxSite() {
		$.getJSON( "data/climaxsite.geojson", function( data ) {
			var ClimaxSite = data;

			var ClimaxSitePointToLayer = function (feature, latlng){
				var siteMarker = L.circle(latlng, 50, {
				stroke: false,
				fillColor: "red",
				fillOpacity: 100
			});
		return siteMarker;
	}

    var ClimaxSiteClick = function (feature, layer) {
        layer.bindPopup("<strong>Climax Shot Detonation Site<strong>");
    }

    ClimaxSiteGeoJson = L.geoJson(ClimaxSite,{
    	pointToLayer: ClimaxSitePointToLayer,
    	onEachFeature: ClimaxSiteClick
    });

    //Viewshed on bottom
    ClimaxViewshedGeoJson.addTo(map2);
    //Buff next
	ClimaxBuffGeoJson.addTo(map2);
	//Cloud next
	ClimaxCloudGeoJson.addTo(map2);
	//Site last
	ClimaxSiteGeoJson.addTo(map2);
	});
}



///**********************  MODALS  ************************///

// reveal modal at click to image

$('.img_1').click(function(){
$('#modal1').modal('show');
});

$('.img_2').click(function(){
$('#modal2').modal('show');
});

$('.img_3').click(function(){
$('#modal3').modal('show');
});

//add modal fullscreen style on show modal
$(".modal-fullscreen").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 100);
});

$(".modal-fullscreen").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
});

//fix leaflet modals bug on each map
$("#modal1").on('shown.bs.modal', function(){
    setTimeout(function() {
        map1.invalidateSize();
   }, 1);
})

$("#modal2").on('shown.bs.modal', function(){
    setTimeout(function() {
        map2.invalidateSize();
   }, 1);
})

$("#modal3").on('shown.bs.modal', function(){
    setTimeout(function() {
        map3.invalidateSize();
   }, 1);
})




//CartoDB data load//

/*
$.getJSON('https://sgoodwin.cartodb.com:443/api/v2/sql?format=GeoJSON&q= select * from public.trinpoly', function(data) {
	var dataset = data;
    // draw the dataset on the map
    plotDataset(dataset);
});

// function to plot the dataset passed to it
function plotDataset(dataset) {
    leaflet_geoJSON = L.geoJson(dataset).addTo(map);
}

*/

