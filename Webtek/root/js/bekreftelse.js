/*
FILE NAME: bekreftelse.js
WRITTEN BY: Lars Lien ANkile
WHEN:  November 2017
PURPOSE: Display the correct email adress and a random order number
*/

/* Get the query string at the en of the url that contains the form info from the previous page. */
var url = location.search;

/* Split the information into successively smaller bits of info so that the email
adress can be extracted */
url = url.split('&');
var email = url[3].split('=');
email = email[1];
email = email.split('%40'); //'%40' is the '@' character

/* Set the innerHTML of the span element to the email adress from the form with a '@' in between */
document.getElementById('email').innerHTML = email[0] + '@' + email[1];

/* A function that generates a random hexadecimal order number */
var color = '';
var letters = "0123456789ABCDEF";
for (var i = 0; i < 10; i ++){
  color += letters[Math.floor(Math.random()*16)];
}

document.getElementById('referansenummer').innerHTML = color;
