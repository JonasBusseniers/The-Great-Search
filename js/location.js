var latitude;
var longitude;
var radius;
var nextFunction;
var atPosition;


function atLocation(lat, long, nxtFunc){
 atLocationWithRadius(lat, long, 0.05, nxtFunc);

}

function atLocationWithRadius(lat, long, rad, nxtFunc){
  latitude = lat;
  longitude = long;
  radius = rad
  nextFunction = nxtFunc;
document.getElementById("overlay").style.display = "block";

navigator.geolocation.getCurrentPosition(checkPosition);

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