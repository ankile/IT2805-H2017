/*
FILE NAME: form_submit.js
WRITTEN BY: Lars Lien Ankile
WHEN: Novemvber 2017
PURPOSE: Make the contact form interactive. It fetches some of the info from
the input fields and generates a response based on what is entered and displays
that information on the same page.  */

const formDiv = document.getElementById('forms-div');
const form = document.getElementById('forms');
const counter1 = document.getElementById('sign-counter');

/* Event listeners */
formDiv.addEventListener('submit', formSubmit);

/* Gets information and makes an response */
function formSubmit(event) {
  event.preventDefault();

  const fullName = form[0].value;
  const firstName = fullName.split(' ')[0];
  const email = form[1].value;
  const subject = form[2].value.toLowerCase();

  formDiv.innerHTML = '';

  const response1 = document.createElement('p');
  response1.setAttribute('style', 'padding-top:30px')
  response1.innerText = 'Tusen takk for din henvendelse, ' + firstName + '.';

  const response2 = document.createElement('p');
  response2.innerText = 'Du vil få svar på ' + subject + ' på epostadressen ' + email + ' så fort som mulig.'

  const response3 = document.createElement('p');
  const link = document.createElement('a');
  link.setAttribute('onClick', 'resetForm()');
  link.setAttribute('href', '#');
  link.innerText = 'klikke her';
  response3.innerText = 'Vil du sende en ny henvendelse kan du ';
  response3.appendChild(link);

  formDiv.appendChild(response1);
  formDiv.appendChild(response2);
  formDiv.appendChild(response3);
}

/* Resets the form to the default */
function resetForm(event) {
  formDiv.innerHTML = '';

  for (let i = 0; i < form.length-1; i++) {
    form[i].value = '';
  }
  formDiv.appendChild(form);
  counter.innerText = 0;
}
