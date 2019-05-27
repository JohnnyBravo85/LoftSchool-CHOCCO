const wrapper = document.querySelector('#wrapper');
const burger = document.querySelector('#burger-menu');
const nav = document.querySelector('#nav');

burger.addEventListener('click', function() {
  nav.style.position = 'fixed';
  console.log('Хэллоу');
})