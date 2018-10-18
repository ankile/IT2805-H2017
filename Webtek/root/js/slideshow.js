/*
FILE NAME: slideshow.js
WRITTEN BY: Mats Kvelland
WHEN:  November 2017
PURPOSE: Display a functional slideshow at home page.
*/

//Declaration of global variables/constants:
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d');
const imgLeft = new Image();
const imgRight = new Image();
//Add images to this array, and the slideshow will automagically start displaying the new image with a dedicated image-node:
const images = ["img/slideshow01.jpg", "img/slideshow02.jpg", "img/slideshow03.jpg", "img/slideshow04.jpg", "img/slideshow05.jpg"]
const animSpeed = 25;
var curImg = 0;
var timeout = null;
var diff = 1;
var dirLeft = true;
var imgLeftPos = -imgLeft.width;
var imgRightPos = parseInt(canvas.width);
var allowAnimate = true;

//Prepares for a the slide right animation to start, and calls function "AnimateRight()" to start animating:
function SlideRight(imgLeftSrc, imgRightSrc) {
    imgLeft.src = imgLeftSrc;
    imgRight.src = imgRightSrc;
    
    imgLeftPos = -parseInt(canvas.width);
    imgRightPos = 0;
    
    allowAnimate = true;
    window.requestAnimationFrame(AnimateRight);
}

//Prepares for a the slide left animation to start, and calls function "AnimateLeft()" to start animating:
function SlideLeft(imgLeftSrc, imgRightSrc) {
    imgLeft.src = imgLeftSrc;
    imgRight.src = imgRightSrc;

    imgLeftPos = 0;
    imgRightPos = parseInt(canvas.width);

    allowAnimate = true;
    window.requestAnimationFrame(AnimateLeft);
}

//The following function calls itself each frame until the previous image has dissappeared out of the canvas from the right side:
function AnimateRight() {
    if(allowAnimate == true) {
        if(imgLeftPos < 0) {
            context.clearRect(0, 0, 300, 300);

            context.drawImage(imgLeft, imgLeftPos, 0, parseInt(canvas.width), parseInt(canvas.height));
            context.drawImage(imgRight, imgRightPos, 0, parseInt(canvas.width), parseInt(canvas.height));

            imgLeftPos += animSpeed;
            imgRightPos += animSpeed;

            window.requestAnimationFrame(AnimateRight);
        }
        else {
            context.drawImage(imgLeft, 0, 0, parseInt(canvas.width), parseInt(canvas.height));
        }
    }
}

//The following function calls itself each frame until the previous image has dissappeared out of the canvas from the left side:
function AnimateLeft() {
    if(allowAnimate == true) {
        if(imgLeftPos >= -parseInt(canvas.width)) {
            context.clearRect(0, 0, 300, 300);

            context.drawImage(imgLeft, imgLeftPos, 0, parseInt(canvas.width), parseInt(canvas.height));
            context.drawImage(imgRight, imgRightPos, 0, parseInt(canvas.width), parseInt(canvas.height));

            imgLeftPos -= animSpeed;
            imgRightPos -= animSpeed;

            window.requestAnimationFrame(AnimateLeft);
        }
        else {
            context.drawImage(imgRight, 0, 0, parseInt(canvas.width), parseInt(canvas.height));
        }
    }
}

//The following function gets called when the user clicks a node (circular button), and it displays the corresponding image without an animated transition:
function ShowImage(img) {
    var nodeImage = new Image();
    nodeImage.src = img;
    nodeImage.onload = function () {
        allowAnimate = false;
        context.drawImage(nodeImage, 0, 0, parseInt(canvas.width), parseInt(canvas.height));
        HighLightCurImgNode();
        timeout = setTimeout(ShowImages, 4000);
    }
}

//The following function calls itself on an interval, and increases or decreases the current image variable depending on the variable "diff" which holds the direction to move, and it then starts the initiation of the applicable animation:
function ShowImages()
{
    var prevImg = curImg;
    curImg += diff;
    if(curImg + 1 > images.length){
        curImg = 0;
    }
    else if (curImg < 0){
        curImg = images.length - 1;
    }
    if(dirLeft) {
        SlideLeft(images[prevImg], images[curImg]);
    }
    else {
        SlideRight(images[curImg], images[prevImg]);
    }
    HighLightCurImgNode();
    diff = 1;
    timeout = setTimeout(ShowImages, 4500);

    dirLeft = true;
}

//The following two functions manages the increase/decrease of the current image variable:
function IncCurImg () {
    if(curImg + 1 >= images.length){
        curImg = 0;
    }
    else{
        curImg++;
    }
}
function DecCurImg () {
    if(curImg <= 0){
        curImg = images.length - 1;
    }
    else{
        curImg -= 2;
    }
}

//The following function creates/displays automatically generated nodes (circular buttons) each with a corresponding image from the array:
function InitImgNodes() {
    var container = document.getElementById("nodeContainer");
    for(var i = 0; i < images.length; i++) {
        var divNode = document.createElement("div");
        divNode.classList.add("imgNode");
        divNode.value = i;
        //When the nodes are clicked they will directly display their corresponding image, using the "ShowImage()" function:
        divNode.addEventListener("click", function (event) {
            clearTimeout(timeout);
            var newImg = event.target.value;
            curImg = newImg;
            ShowImage(images[newImg]);
        });
        container.appendChild(divNode);
    }
}

//The following function adds a css-class to the node which has the current image as its corresponding image, and the previous selected node will lose its "selected" css-class:
function HighLightCurImgNode() {
    var nodes = document.getElementById("nodeContainer").children;
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].value == curImg) {
            nodes[i].classList.add("selectedNode");
        }
        else {
            nodes[i].classList.remove("selectedNode");
        }
    }
}

//Add event listeners on the left and right slideshow-arrows so that the proper functions and variables are set when clicked:
document.getElementById("divLeft").addEventListener("click", function () {
    dirLeft = false;
    diff = -1;
    clearTimeout(timeout);
    ShowImages();
});
document.getElementById("divRight").addEventListener("click", function () {
    diff = 1;
    clearTimeout(timeout);
    ShowImages();
});

//Create/display nodes and show the first image when the script is loaded:
InitImgNodes();
ShowImage("img/slideshow01.jpg");