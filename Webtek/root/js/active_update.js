/*
FILE NAME: active_update.js
WRITTEN BY: Lars Lien Ankile
WHEN: Novemvber 2017
PURPOSE: Make the navbar button for the current page orange to indicate where
the user is on the site */

const path = location.pathname;
const as = document.getElementsByTagName('a');

function addActive(index) {
  as[index].classList.add('active');
}

if (path.endsWith('mer_om_oss.html')) {
  addActive(1);
  addActive(2);
} else if (path.endsWith('rom.html')) {
  addActive(7);
} else if (path.endsWith('mer_kontakt.html')) {
  addActive(1);
  addActive(3);
} else if (path.endsWith('mer_blog.html')) {
  addActive(1);
  addActive(6);
} else if (path.endsWith('mer_om_trondheim.html')) {
  addActive(1);
  addActive(5);
} else if (path.endsWith('index.html')) {
  addActive(9);
} else if (path.endsWith('bestilling.html')) {
  addActive(8);
} else if (path.endsWith('mer_omtaler.html')) {
  addActive(1);
  addActive(4);
}
