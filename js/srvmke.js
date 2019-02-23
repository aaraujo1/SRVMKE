function initMap() {
    // The location
    var startMke = {lat: 43.037848, lng: -87.9106865};
    // The map
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14.25, center: startMke});
    // The marker
    var marker = new google.maps.Marker({position: startMke, map: map});
  }