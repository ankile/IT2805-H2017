const income = document.getElementById('income');
const wealth = document.getElementById('wealth');
const tax = document.getElementById('tax');

income.addEventListener('input', change);
wealth.addEventListener('input', change);

function change() {
  tax.value = income.value * 0.35 + wealth.value * 0.25;
}
