var lat;
var long;

function initMap() {
	var startMke = {
		lat: 43.037848,
		lng: -87.9106865
	};


	var map = new google.maps.Map(
		document.getElementById('map'), {
			zoom: 14.25,
			center: startMke
		});

	var marker = new google.maps.Marker({
		position: startMke,
		map: map
	});

	map.addListener('click', function (e) {
		placeMarkerAndPanTo(e.latLng, map);
		//console.log(e.latLng.lat() + " " + e.latLng.lng());
		lat = e.latLng.lat();
		long = e.latLng.lng();

			});

	function placeMarkerAndPanTo(latLng, map) {
		marker.setPosition(latLng);
		map.panTo(latLng);
	}
}

$(function(){
	$('#submit').on("click", function(){
		var eTitle = $('#fTitle').val();
		var oName = $('#fOrg').val();
		var fName = $('#fFname').val();
		var lName = $('#fLname').val();
		var desc = $('#fDesc').val();
		var date = $('#fDate').val();
		var numVols = $('#fNumVol').val();



		//console.log(lat + " " + long);
		addEvent(fName, lName, eTitle, date, oName, desc, lat, long, numVols);

		

	});
});
