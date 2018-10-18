/*
FILE NAME: bestilling.js
WRITTEN BY: Anders Bergesen
WHEN:  6.11
PURPOSE: Function that gives the user a total sum for the order
*/

/* var from inputs */
var dager, total, romtype, frokost;
var epost = document.getElementById("email").value;
var rom2 = document.getElementById('rom2');
var rom4 = document.getElementById('rom4');
var romLink = location.search;

if (romLink.endsWith('rom2')) {
  rom2.checked = true;
  rom4.checked = false;
} else if (romLink.endsWith('rom4')) {
  rom4.checked = true;
  rom2.checked = false;
}

function setValues() {
  dager = document.getElementById("dager").value;
  total = document.getElementById("total").value;
  personer = document.getElementById("personer").value;
  romtype = 199
  frokost = 0
}

/* sums the different values*/
function totalbelop() {
  setValues();
  if (rom2.checked){
      romtype = 249;
  }
  if (rom4.checked){
      romtype = 199;
  }
  if (document.getElementById('frokost').checked) {
      frokost = 50;
  }

  total = (dager * romtype * personer) + (dager * frokost * personer) ;
  document.getElementById("total").value = total + ",-";
}
