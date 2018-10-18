/*
FILE NAME: footer.js
WRITTEN BY: Lars Lien Ankile
WHEN: October/Novemvber 2017
PURPOSE: Make the navbar stick to the bottom of the page in case the window
height of the user is very large. */

/* Add an event listener on the window so that if the window is resized the check of window size is done */
window.addEventListener('resize', makeSticky);

/* Function that compares the window height with the content height, and makes the footer stick to the bottom of the page if the window is suffieciently tall */
function makeSticky() {
  console.log(window.innerHeight);
  console.log(document.body.scrollHeight);
  if (window.innerHeight < document.body.scrollHeight) {
    document.getElementById('footer').classList.remove('sticky');
  } else {
    document.getElementById('footer').classList.add('sticky');
  }
}

/* Run the function on load */
makeSticky()
