/*
FILE NAME: sign_counter.js
WRITTEN BY: Lars Lien Ankile
WHEN: Novemvber 2017
PURPOSE: Update the charachter count in the textarea field in the contact form
to inform the user how many charachters they have left. */

const counter = document.getElementById('sign-counter');
const textArea = document.getElementById('utfyllende-tekst');

textArea.addEventListener('input', updateCounter);


function updateCounter(event) {
  counter.innerText = textArea.value.length;
}
