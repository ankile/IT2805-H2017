const button = document.getElementById('top-button');

window.onscroll = function() {toggleButton()}

function toggleButton() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
