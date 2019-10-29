(function ($) {
    "use strict";
    $(function () {

        var mapPos = new google.maps.LatLng(32.6074048, -115.4177224);
        var map = new google.maps.Map(document.getElementById("contact-google-map"), {
            zoom: 13,
            center: mapPos,
            disableDefaultUI: true
        });
        // To use template map styles, add this to the map options
        //styles: [{"featureType": "all", "elementType": "geometry.fill", "stylers": [{"weight": "2.00"} ] }, {"featureType": "all", "elementType": "geometry.stroke", "stylers": [{"color": "#9c9c9c"} ] }, {"featureType": "all", "elementType": "labels.text", "stylers": [{"visibility": "on"} ] }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"} ] }, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"} ] }, {"featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"} ] }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100 }, {"lightness": 45 } ] }, {"featureType": "road", "elementType": "geometry.fill", "stylers": [{"color": "#eeeeee"} ] }, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"color": "#7b7b7b"} ] }, {"featureType": "road", "elementType": "labels.text.stroke", "stylers": [{"color": "#ffffff"} ] }, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"} ] }, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"} ] }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"} ] }, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"} ] }, {"featureType": "water", "elementType": "geometry.fill", "stylers": [{"color": "#c8d7d4"} ] }, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#070707"} ] }, {"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{"color": "#ffffff"} ] } ],

        var contentString = '<h4>76</h4>' +
                            '<p class="card-text">' +
                              'Bulevar Venustiano Carranza 1299, Valle Dorado, 21399 Mexicali, B.C..' +
                            '</p>' +
                            '<a href="https://www.google.com/maps/place/76/@32.6074048,-115.4077224,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xcb32d9a3d2e4aa05!8m2!3d32.6074048!4d-115.4055337" target="_blank">Abrir en Mapas</a>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker1 = new google.maps.Marker({position: new google.maps.LatLng(32.6074048, -115.4077224), map: map});

        marker1.addListener('click', function() {
          infowindow.open(map, marker1);
        });

        var contentString2 = '<h4>76</h4>' +
                            '<p class="card-text">' +
                              'Blvd Manuel Gomez Morin, Gobernador Braulio Maldonado 1064, Ex-Ejido Coahuila, 21360 Mexicali, B.C.' +
                            '</p>' +
                            '<a href="https://www.google.com/maps/place/76/@32.6136864,-115.4290177,17z/data=!4m5!3m4!1s0x0:0x4452adca3d11d1ee!8m2!3d32.6136864!4d-115.426829" target="_blank">Abrir en Mapas</a>'

        var infowindow2 = new google.maps.InfoWindow({
          content: contentString2
        });

        var marker2 = new google.maps.Marker({position: new google.maps.LatLng(32.6136864, -115.4290177), map: map});

        marker2.addListener('click', function() {
          infowindow2.open(map, marker2);
        });

    });

})(jQuery);
