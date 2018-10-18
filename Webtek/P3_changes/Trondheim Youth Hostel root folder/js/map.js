/*
FILENAME: map.js
WRITTEN BY: Lars Lien Ankile
WHEN: November 2017
PURPOSE: Display a map on mer_om_oss.html */

/* function that generates the map */
function genererKart() {
    var kartCanvas = document.getElementById("map");
    /* Define where the center of the map should be and set the zoom */
    var kartValg = {
        center: new google.maps.LatLng(63.4337177,10.424059899999975),
        zoom: 13
    };
    var map = new google.maps.Map(kartCanvas, kartValg);
    /* Generate the marker at the same place as the center of the map */
    var marker = new google.maps.Marker({position: kartValg.center});
    marker.setMap(map);
    /* Generate the text box with the adress in it */
    var infowindow = new google.maps.InfoWindow({
      content: "Weidemanns vei 41"
    });
    infowindow.open(map,marker);
}
