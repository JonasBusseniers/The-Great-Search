var checkingLocationIndex;
window.onload = function () {
var imageGrid =     document.getElementById("imageGrid")
console.log(locations);

for( i = 0; i < locations.length; i++){
var location = locations[i];
var divNode = document.createElement("div");
var imgNode = document.createElement("img");
divNode.id = location.id;
if(location.found){
divNode.style.borderColor = "lime";
}
imgNode.setAttribute("onclick","enlargeImage(" + i + ")");
imgNode.className  = "template";
imgNode.src = location.image;
divNode.appendChild(imgNode);
imageGrid.appendChild(divNode);
}
imageGrid.style.backgroundImage = bgImg;
checkWin();
    }

function enlargeImage(i){
var location = locations[i];
document.getElementById("overlayImage").src = location.image;
document.getElementById("locationChecker").setAttribute("onclick","checkImageLocation(" + i + ",event)");
document.getElementById("locationChecker").style.display = "block";
document.getElementById("imageOverlay").style.display = "block";
}

function closeImageOverlay(){
document.getElementById("imageOverlay").style.display = "none";
}

function checkImageLocation(i, event){
event.stopPropagation();
var location = locations[i];
checkingLocationIndex = i;
atLocation(location.coords.lat,location.coords.long, areWeAtImage)

}

function areWeAtImage(weAre){
if(weAre){
var location = locations[checkingLocationIndex];
location.found = true;
window.localStorage.setItem(stageId, JSON.stringify(locations));
document.getElementById(location.id).style.borderColor = "lime";
document.getElementById(location.id).firstChild.setAttribute("style","opacity:0.5; -moz-opacity:0.5; filter:alpha(opacity=50)");
checkWin();
document.getElementById("locationChecker").style.display = "none";
document.getElementById("overlayImage").src = "images/correct.jpg";

checkOrder(checkingLocationIndex);
} else{
displayWrong();
}
}

function checkOrder(x){
 if(order){
 for (i = 0; i < order.length; i++) {
 var ref = order[i];
 console.log(order[i]);
  if(ref == x){
break;
  }
 if(!locations[order[i]].found){
 alert("Opgelet, je had vóór deze foto al een andere foto gevonden moeten hebben!");
 };

 }

 }
}

function displayWrong(){
document.getElementById("locationChecker").style.display = "none";
document.getElementById("overlayImage").src = "images/wrong.jpg";
}

function checkWin(){
var won = true;
for( i = 0; i < locations.length; i++){
var location = locations[i];
if(!location.found){
won = false;
}
}
if(won){
won()
}
}

function won(){
document.getElementById("completedStage").style.display = "block";
for(p = 0; p < 9; p++){
command = "fadeLocations(" + (8-p).toString() + ")";
setTimeout(command,p * 300);
}
if(lastStage){
randomFw();
setInterval(randomFw,2000);
setInterval(slideShow,6000);
}

}

function fadeLocations(o){
for( i = 0; i < locations.length; i++){
var location = locations[i];
document.getElementById(location.id).setAttribute("style","opacity:" + o/10 + "; -moz-opacity:" + o/10 + "; filter:alpha(opacity=" + o*10 + ")");
}
}

function randomFw(){
var r=4+parseInt(Math.random()*16);for(var i=r; i--;){setTimeout('createFirework(8,14,2,null,null,null,null,null,Math.random()>0.5,true)',(i+1)*(1+parseInt(Math.random()*1000)));}return false
}

function slideShow(){
imageGrid.style.backgroundImage = "url('images/stage1/happy.jpg')";
setTimeout(function(){ imageGrid.style.backgroundImage = "url('images/stage2/30bd.jpg')"; }, 2000);
setTimeout(function(){ imageGrid.style.backgroundImage = "url('images/stage3/fene.jpg')"; }, 4000);
}