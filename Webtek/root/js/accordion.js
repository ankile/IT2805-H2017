/*
FILE NAME: accordion.js
WRITTEN BY: Martin Egeli
WHEN: Novemvber 2017
PURPOSE: Make the answers toogle between display "none" and "block" based on if
the button is clicked or not. Default is set to none. */

var acc = document.getElementsByClassName("accordion");

for (var i=0; i<acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle('active');

    var svar = this.nextElementSibling;
    if (svar.style.display === 'block') {
      svar.style.display = 'none';
    } else {
      svar.style.display = 'block';
    }
  }
}
