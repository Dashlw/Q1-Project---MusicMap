$(document).ready(function() {

    $('.materialboxed').materialbox();

});

var map = {};
var circles = [];

$("#add").click(function() {
    $("#responsive-menu").toggle(400);
});

$("#mainButton").click(function() {

    $('h3').text("")

    var artist = $('input').val().toLowerCase();
    $('input').val('');

    $.get('https://galvanize-cors-proxy.herokuapp.com/http://api.bandsintown.com/artists/' + artist + '/events.json?api_version=2.0&app_id=musicmap&date=all')

    .then(function(data) {
        console.log(data);

        clearCircles()

        var artistImg = data[0].artists[0].image_url;
        $('.materialboxed').attr('src', artistImg)

        var artistName = data[0].artists[0].name;
        $('h3').append(artistName)

        var windowContent = "";

        // console.log(windowContent);

        var cityList = {}
        for (var j = 0; j < data.length; j++) {
            var city = data[j].venue.city;

            if (!cityList[city]) {
                cityList[city] = {
                    center: {
                        lat: data[j].venue.latitude,
                        lng: data[j].venue.longitude
                    },
                    name: city,
                    count: 1,
                };
            } else {
                cityList[city].count++
            } // end city count
        }

        for (var city in cityList) {
            // Add the circle for this city to the map.
            var cityCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#CE1483',
                fillOpacity: 0.35,
                map: map,
                position: cityList[city].center,
                center: cityList[city].center,
                radius: Math.sqrt(cityList[city].count) * 8000

            });

            circles.push(cityCircle);

            (function(cityCircle, city) {
                var infowindow = new google.maps.InfoWindow({
                    content: "<p><b>" + city.name + "</b></p>" +
                        "<p>" + city.count + "</p>"
                });

                var c = cityCircle.addListener('mouseover', function() {
                    infowindow.open(map, cityCircle);
                });

                cityCircle.addListener('mouseout', function() {
                    google.maps.event.removeListener(c);
                });


            }(cityCircle, cityList[city]));
        } // end circle add

        $('#err').hide();

    }).catch(function(error) {
        $('#err').show();
    });

}); // end button click function


var denver = {
    lat: 39.7392,
    lng: -104.9903
}

var la = {
    lat: 34.0522,
    lng: -118.2437
}

var ny = {
    lat: 40.7128,
    lng: -74.0059
}

var london = {
    lat: 51.5074,
    lng: 0.1278
}

var worldview = {
    lat: 38.7223,
    lng: -9.1393
}

$('#denver').on('click', function() {
    map.setZoom(8);
    map.setCenter(denver);
});

$('#la').on('click', function() {
    map.setZoom(8);
    map.setCenter(la);
});

$('#newyork').on('click', function() {
    map.setZoom(8);
    map.setCenter(ny);
});

$('#london').on('click', function() {
    map.setZoom(8);
    map.setCenter(london);
});

$('#worldview').on('click', function() {
    map.setZoom(2);
    map.setCenter(worldview);
});


function initMap() {

    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {
            lat: 40.674,
            lng: -104.945,
        },
        zoom: 5,
    });

} // end map function

function clearCircles() {
    for (var i = 0; i < circles.length; i++) {
        circles[i].setMap(null)
    }
    circles = [];
}
