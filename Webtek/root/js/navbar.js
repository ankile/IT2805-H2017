/*
FILE NAME: navbar.js
WRITTEN BY: Lars Lien Ankile
WHEN: October/Novemvber 2017
PURPOSE: Make the logo in the navbar interactive. */

const logoDiv = document.getElementById('logo-title');
const logo = document.getElementById('logo-image');

logoDiv.addEventListener('mouseenter', doorOpen);
logoDiv.addEventListener('mouseleave', doorClose);

function doorOpen() {
  logo.src = 'img/house_open.png';
}

function doorClose() {
  logo.src = 'img/house_closed.png';
}
