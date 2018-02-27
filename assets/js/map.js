function SA_GoogleMaps(){

var myLatlng = new google.maps.LatLng(-20.742147,-41.198215);

    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        scrollwheel: false,
        panControl: false,
        mapTypeControl: true,
        styles: [
            {
                stylers: [
                    {saturation: -50}
                ]
            },
            {
                featureType: 'water',
                stylers: [
                    {color: '#18bf20'}
                ]
            }
        ],

        zoomControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER}

    }

    var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

    google.maps.event.addDomListener(window, 'resize', function(){
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });

    var marcador = new google.maps.Marker({
        position: myLatlng,

        map: map,
        icon: '/assets/img/pin.png',
        title: 'Granfaccin'
    });

}

function SA_LoadGoogleMaps(){
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAfm6swx2tzFW9bIGphqNK_S1J7haJzy1Y&sensor=true&callback=SA_GoogleMaps";
  document.body.appendChild(script);
}

window.onload = SA_LoadGoogleMaps;
