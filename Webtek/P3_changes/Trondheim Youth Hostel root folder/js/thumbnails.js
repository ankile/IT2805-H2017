/*
FILE NAME: thumbnails.js
WRITTEN BY: Mathias Skotnes
WHEN: November 2017
PURPOSE: All images of class="thumbnails" can be scaled and presented in center of page. The purpose is so we can present more images as smaller thumbnails, which if desired can be taken a closer look at by scaling them.
*/


const overlay =document.getElementById("overlay");
const imageView=document.getElementById("imageView");

//Functions
//Presents an overlay
function on(event) {
    event = event || window.event 
    imageView.src=event.target.src;
    imageView.style.maxWidth="calc(100% - 400px)";
    overlay.style.display="block";  
}
//Hides overlay
function off() {
    document.getElementById("overlay").style.display = "none";
}

//EventListeners for all thumbnails:
var images =document.querySelectorAll('.thumbnail');
for(var i=0;i<images.length;i++){
  images[i].addEventListener('click',on);
}
//EventListener for Overlay, which will be turned off
overlay.addEventListener('click',off);

