$(document).ready(function() {

});

// START GOOG MAP //
var map = {};

function initMap() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
}

//END GOOG MAP //

// START ARTIST SEARCH //

$('button').click(function() {

    var artist = $('input').val().toLowerCase();
    $('input').val('');

    var location = {};

    $.get('https://galvanize-cors-proxy.herokuapp.com/http://api.bandsintown.com/artists/' + artist + '/events.json?api_version=2.0&app_id=musicmap&date=all')

    .then(function(data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].venue.latitude);
        }

    }).catch(function(error) {

        $('#err').show();

    })


})


// END ARTIST SEARCH //
