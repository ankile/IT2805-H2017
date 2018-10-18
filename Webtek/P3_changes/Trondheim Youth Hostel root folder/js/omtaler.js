/*
FILE NAME: slideshow.js
WRITTEN BY: Mats Kvelland
WHEN:  November 2017
PURPOSE: Display five random reviews from a premade selection of reviews to simulate new reviews every time the page loads without using server-side. Display user created reviews.
*/

//A class for reviews with the properties "navn" (defaults to "ANONYM") and "innhold": 
var Omtale = function (navn, innhold) {
    this.navn = navn || "ANONYM";
    this.innhold = innhold;
}

//A global constant variable containing premade reviews:
const omtaler = [
    new Omtale("Alexander Fritjof", "Fusce a eleifend purus, in finibus sem. Proin augue ante, malesuada vel aliquet sed, tincidunt id massa. Suspendisse vel interdum neque. Integer consectetur lectus vitae eleifend pulvinar. Aliquam facilisis ultrices blandit. Quisque id libero quis ipsum ornare blandit. Fusce pellentesque auctor tellus eu venenatis. Quisque mattis, quam ut pharetra ornare, nibh augue convallis orci, non pulvinar enim lectus in nunc. Fusce ornare risus et vestibulum accumsan."), 
    new Omtale("Turid Steffen", "Vestibulum sed molestie libero. Sed vehicula convallis molestie. Integer dictum eget nibh sit amet fermentum. In id feugiat elit. Phasellus aliquet odio non consectetur sollicitudin. Nam ut ipsum suscipit, feugiat ligula et, maximus augue. Duis aliquet semper tellus, eget aliquam massa bibendum a. Ut non iaculis sem, a interdum sem. Curabitur finibus porttitor augue, id malesuada eros finibus et. Maecenas volutpat, arcu eu molestie vulputate, lectus leo vehicula sem, vel eleifend neque diam sed risus. Suspendisse ultricies venenatis hendrerit. Suspendisse potenti. Curabitur pellentesque erat leo, in laoreet mauris vehicula ac."), 
    new Omtale("Ingolf Philip", "Donec dapibus, eros ac eleifend sagittis, quam dui laoreet nisi, a sollicitudin leo risus a eros. Pellentesque malesuada ornare diam. Nunc vitae eros interdum, mollis lacus non, finibus urna. Duis eget euismod est, et semper leo. Praesent lacus libero, condimentum sit amet ipsum et, consequat finibus enim. Quisque tortor mauris, egestas ac auctor at, vulputate eget mi. Sed commodo consectetur eros, vel bibendum turpis aliquam vel. Maecenas faucibus lectus eget massa maximus dapibus."), 
    new Omtale("Erlend Ester", "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque consectetur, ligula quis mollis iaculis, arcu metus consectetur felis, nec fermentum nunc ex at urna. Morbi semper nunc sed erat malesuada, sed aliquet tortor blandit. Sed quam nunc, sollicitudin eget urna eget, placerat malesuada tortor. Suspendisse condimentum, nisi in porttitor volutpat, dui velit volutpat elit, vitae tempor nunc eros eget sem. Cras egestas lectus eget lorem dictum luctus. Suspendisse quis dolor vel justo faucibus condimentum. Suspendisse in vulputate purus."), 
    new Omtale("Jim Mike", "Duis elementum eleifend ipsum eget sagittis. Nunc a orci quis diam pretium ultricies ac at nulla. In pharetra nibh id volutpat sollicitudin. Sed nec dui erat. Morbi hendrerit, mi a volutpat rhoncus, ligula nunc tincidunt ante, vel consequat eros est a dolor. Vestibulum elementum ex mi, id pulvinar mauris ultricies mattis. Pellentesque neque turpis, faucibus non dapibus eu, dictum in urna. Nam ullamcorper consectetur enim, in vestibulum erat accumsan sed."), 
    new Omtale("Zachary Courtney", "Suspendisse eu consectetur magna. Suspendisse nec elit sit amet leo imperdiet cursus. Aenean eget dolor sodales, mollis elit nec, scelerisque lorem. Sed sit amet vestibulum mi. Vestibulum semper vehicula elit at semper. Praesent blandit aliquet nulla, nec vestibulum ex sagittis in. Ut quis vestibulum sapien, et gravida diam. Donec viverra ipsum nec nisl consequat faucibus. Aliquam non libero a magna blandit bibendum ac non enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet mattis est. Nam id volutpat lacus, aliquam placerat turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc varius urna a sapien porta mattis."), 
    new Omtale("Brock Ferdy", "Aliquam eleifend ex nec lectus rutrum, ut elementum eros dapibus. Vestibulum dapibus id arcu sed hendrerit. Ut eget mollis ex, eu pretium sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas euismod cursus sollicitudin. In euismod tortor vitae justo venenatis gravida. Cras et consequat nisl."), 
    new Omtale("Gabriel Garnet", "Nunc gravida efficitur libero, eu placerat sem aliquam id. Proin convallis dapibus est. Duis pellentesque elit non velit vulputate, sed dignissim orci vulputate. Etiam porttitor massa ante, eget tristique dui rhoncus vel. Vestibulum felis est, porta nec blandit in, ultricies id libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur dignissim efficitur ex, pharetra efficitur lectus faucibus id. Aliquam elementum mi id leo elementum scelerisque. Suspendisse sed ultricies quam, vel efficitur diam. Proin varius elit eu lacus venenatis rhoncus. Proin congue scelerisque leo."), 
    new Omtale("Stephen Elmer", "Nulla in pellentesque velit, sed aliquam arcu. Cras eu elit posuere, aliquam ante in, aliquet leo. Aenean placerat leo sit amet purus vulputate vulputate. Integer id tortor tortor. Fusce finibus lacus sapien, sed dictum leo cursus a. Sed quis commodo metus, vitae tincidunt odio. In commodo eget nisl in congue."), 
    new Omtale("German Parker", "Vivamus fermentum vestibulum est eu porttitor. Sed semper convallis ante, non malesuada ante dapibus sed. Mauris sit amet faucibus nibh. Quisque sagittis ligula nec elementum ultricies. Quisque in dolor quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut congue tristique pretium. Aliquam enim sapien, gravida sit amet ullamcorper eu, finibus vel enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula felis, viverra vel mi ut, egestas volutpat lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vel consectetur erat. Phasellus eu euismod turpis, id tincidunt quam. Suspendisse feugiat malesuada enim vel tristique.")
];

//The following function takes imput from the user and displays it as a review using the "VisOmtale(omtale)" function:
function NyOmtale() {
    var navn = document.getElementById("txtNavn").value;
    var innhold = document.getElementById("txtInnhold").value;
    if(innhold != "") {
        VisOmtale(new Omtale(navn, innhold));
    }
}

//The following function displays a review:
function VisOmtale(omtale) {
    var beholder = document.getElementById("divOmtaler");

    var divOmtale = document.createElement("div");
    divOmtale.classList.add("card", "auto-margin");
    var h2Navn = document.createElement("h2");
    h2Navn.innerText = omtale.navn;
    h2Navn.classList.add("omtaleHeader");
    divOmtale.appendChild(h2Navn);
    var br = document.createElement("br");
    divOmtale.appendChild(br);
    var pInnhold = document.createElement("p");
    pInnhold.innerText = omtale.innhold;
    pInnhold.classList.add("omtaleText");
    divOmtale.appendChild(pInnhold);
    beholder.insertBefore(br, beholder.firstChild);
    beholder.insertBefore(divOmtale, beholder.firstChild);
}

//The following function display five random reviews from the premade selection of reviews:
function VisTilfeldigeOmtaler() {
    var valgteOmtaler = [];
    while(valgteOmtaler.length < 5) {
        var curTilfeldig = omtaler[Math.floor(Math.random() * omtaler.length)];
        if(!valgteOmtaler.includes(curTilfeldig)) {
            valgteOmtaler.push(curTilfeldig);
            VisOmtale(curTilfeldig);
        }
    }
}

//Add an event listener on the button so that a new review is displayed when clicked:
document.getElementById("btnPubliser").addEventListener("click", NyOmtale);

//Displays random reviews when the script is loaded:
VisTilfeldigeOmtaler();