import { orderSummary } from "./orderSummary.js";
import { paymentSummary } from "./paymentSummary.js";





document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme');
  console.log(savedTheme);
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
});

document.getElementById('toggle-theme').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark-theme');
  } else {
    localStorage.setItem('theme', 'light-theme');
  }
}); 

orderSummary();
paymentSummary();