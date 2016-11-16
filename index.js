$(document).ready(function() {

});

var map = {};

$('button').click(function() {

        var artist = $('input').val().toLowerCase();
        $('input').val('');

        // var events = [];

        $.get('https://galvanize-cors-proxy.herokuapp.com/http://api.bandsintown.com/artists/' + artist + '/events.json?api_version=2.0&app_id=musicmap&date=all')

        .then(function(data) {
            var cityList = {}
            for (var j = 0; j < data.length; j++) {
                var city = data[j].venue.city;

                if (!cityList[city]) {
                    cityList[city] = {
                        center: {
                            lat: data[j].venue.latitude,
                            lng: data[j].venue.longitude
                        },
                        count: 1,
                    };
                } else {
                    cityList[city].count++
                } // end city count
            }

            // console.log(cityList);

            for (var city in cityList) {
                // Add the circle for this city to the map.
                var cityCircle = new google.maps.Circle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    map: map,
                    center: cityList[city].center,
                    radius: Math.sqrt(cityList[city].count) * 4000
                });
            } // end circle add

            $('#err').hide();

        }).catch(function(error) {
            $('#err').show();
        })
    }) // end button click function

var chicago = {
    lat: 41.878,
    lng: -87.62
}

var denver = {
    lat: 39.7392,
    lng: -104.9903
}

var ny = {
    lat: 40.7128,
    lng: -74.0059
}

var london = {
    lat: 51.5074,
    lng: 0.1278
}


function initMap() {

    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {
            lat: 40.674,
            lng: -104.945,
        },
        zoom: 5,
    });
} // end map function

$('#chicago').on('click', function() {
    map.setZoom(8);
    map.setCenter(chicago);
});

$('#denver').on('click', function() {
    map.setZoom(8);
    map.setCenter(denver);
});

$('#newyork').on('click', function() {
    map.setZoom(8);
    map.setCenter(ny);
});

$('#london').on('click', function() {
    map.setZoom(8);
    map.setCenter(london);
});
