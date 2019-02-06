var latitude;
var longitude;
var radius;
var nextFunction;
var lat;
var long;
var hasRecentPosition = false;
var watchId;
var mostRecentPos;
var posWaiter;


function atLocation(lati, longi, nxtFunc){
 atLocationWithRadius(lati, longi, 0.0004, nxtFunc);

}

function atLocationWithRadius(lati, longi, rad, nxtFunc){
document.getElementById("overlay").style.display = "block";
  latitude = lati;
  longitude = longi;
  radius = rad;
  nextFunction = nxtFunc;
if(!hasRecentPosition){
startPositionWatching();
}
posWaiter = setInterval('waitForPosition()',1000);
}

function waitForPosition(){
if(hasRecentPosition){
var atPosition;

if(lat > (latitude - radius) && lat < (latitude + radius) && long > (longitude - radius) && long < (longitude + radius)){
atPosition = true;
} else {
atPosition = false;
}
 document.getElementById("overlay").style.display = "none";

nextFunction(atPosition);
clearInterval(posWaiter);
}
}


function startPositionWatching(){
if(watchId != null){
navigator.geolocation.clearWatch(watchId);
}
var geo_options = {
  enableHighAccuracy: true,
  maximumAge        : 0,
  timeout           : Infinity
};
watchId = navigator.geolocation.watchPosition(storePosition, geo_error, geo_options);
}

function geo_error() {
  alert("Sorry, no position available.");
}

function storePosition(position) {
var time = position.timestamp;
lat = position.coords.latitude;
long = position.coords.longitude;
mostRecentPos = time;
hasRecentPosition = true;
setTimeout('positionExpired(' + time + ')', 5000);
}

function positionExpired(timestamp){
 if(timestamp == mostRecentPos){
hasRecentPosition = false;}
}