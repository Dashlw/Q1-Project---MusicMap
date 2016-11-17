// styles: [{
//     elementType: 'geometry',
//     stylers: [{
//         color: '#242f3e'
//     }]
// }, {
//     elementType: 'labels.text.stroke',
//     stylers: [{
//         color: '#242f3e'
//     }]
// }, {
//     elementType: 'labels.text.fill',
//     stylers: [{
//         color: '#746855'
//     }]
// }, {
//     featureType: 'administrative.locality',
//     elementType: 'labels.text.fill',
//     stylers: [{
//         color: '#d59563'
//     }]
// }, {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [{
//         color: '#d59563'
//     }]
// }, {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [{
//         color: '#263c3f'
//     }]
// }, {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     stylers: [{
//         color: '#6b9a76'
//     }]
// }, {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [{
//         color: '#38414e'
//     }]
// }, {
//     featureType: 'road',
//     elementType: 'geometry.stroke',
//     stylers: [{
//         color: '#212a37'
//     }]
// }, {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [{
//         color: '#9ca5b3'
//     }]
// }, {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [{
//         color: '#746855'
//     }]
// }, {
//     featureType: 'road.highway',
//     elementType: 'geometry.stroke',
//     stylers: [{
//         color: '#1f2835'
//     }]
// }, {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     stylers: [{
//         color: '#f3d19c'
//     }]
// }, {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [{
//         color: '#2f3948'
//     }]
// }, {
//     featureType: 'transit.station',
//     elementType: 'labels.text.fill',
//     stylers: [{
//         color: '#d59563'
//     }]
// }, {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [{
//         color: '#121B2E'
//     }]
// }, {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [{
//         color: '#515c6d'
//     }]
// }, {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     stylers: [{
//         color: '#17263c'
//     }]
// }]


// START GOOG MAP //
// var map = {};

// function initMap() {
//
//     // var myLatLng = {
//     //     lat: -25.363,
//     //     lng: 131.044
//     // };
//
//     map = new google.maps.Map(document.getElementById('map-canvas'), {
//         center: {
//             lat: -34.397,
//             lng: 150.644
//         },
//
//
//         zoom: 8
//     });
// }

//END GOOG MAP //

// CITYLIST FORMAT
// cityList = {
//   London: {
//       center: {
//          lat: 234.5,
//          lng: 33.4,
//        }
//        count: 22
//     }


//EVENT INFO?
//if data.ticket_url >> display event info on hover
//connect with bubble
// }


//WORKING BUTTON FUNCTION
// $('button').click(function() {
//
//         var artist = $('input').val().toLowerCase();
//         $('input').val('');
//
//         // var events = [];
//
//         $.get('https://galvanize-cors-proxy.herokuapp.com/http://api.bandsintown.com/artists/' + artist + '/events.json?api_version=2.0&app_id=musicmap&date=all')
//
//         .then(function(data) {
//             var cityList = {}
//             for (var j = 0; j < data.length; j++) {
//                 var city = data[j].venue.city;
//
//                 if (!cityList[city]) {
//                     cityList[city] = {
//                         center: {
//                             lat: data[j].venue.latitude,
//                             lng: data[j].venue.longitude
//                         },
//                         count: 1,
//                     };
//                 } else {
//                     cityList[city].count++
//                 } // end city count
//             }
//
//             // console.log(cityList);
//
//             for (var city in cityList) {
//                 // Add the circle for this city to the map.
//                 var cityCircle = new google.maps.Circle({
//                     strokeColor: '#FF0000',
//                     strokeOpacity: 0.8,
//                     strokeWeight: 2,
//                     fillColor: '#FF0000',
//                     fillOpacity: 0.35,
//                     map: map,
//                     center: cityList[city].center,
//                     radius: Math.sqrt(cityList[city].count) * 4000
//                 });
//             } // end circle add
//
//             $('#err').hide();
//
//         }).catch(function(error) {
//             $('#err').show();
//         })
//     }) // end button click function



//CLICK OVER?
//   google.maps.event.addListener(marker, 'mouseover', function() {
//   	infowindow.open(map, this);
//   });
// //  And then to make the infowindow disappear again when you move the mouse away from the marker, just call the close() function on mouseout.
//
//   google.maps.event.addListener(marker, 'mouseout', function() {
//   	infowindow.close();
//   }); OR


// var infowindow = "some shit";
//
// cityCircle.addListener('click', function() {
//     infowindow.open(map, cityCircle);
// });
