var latitude;
var longitude;
var radius;
var nextFunction;
var atPosition;


function atLocation(lat, long, nxtFunc){
 atLocationWithRadius(lat, long, 0.0004, nxtFunc);

}

function atLocationWithRadius(lat, long, rad, nxtFunc){
  latitude = lat;
  longitude = long;
  radius = rad
  nextFunction = nxtFunc;
document.getElementById("overlay").style.display = "block";
var geo_options = {
  enableHighAccuracy: true,
  maximumAge        : 0,
  timeout           : Infinity
};
navigator.geolocation.getCurrentPosition(checkPosition, geo_error, geo_options);

}
function geo_error() {
  alert("Sorry, no position available.");
}

function checkPosition(position) {

var lat = position.coords.latitude;
var long = position.coords.longitude;

console.log( lat + " long: " + long);

   if(lat > (latitude - radius) && lat < (latitude + radius) && long > (longitude - radius) && long < (longitude + radius)){
atPosition = true;
} else {
atPosition = false
}
 document.getElementById("overlay").style.display = "none";

nextFunction(atPosition);
}