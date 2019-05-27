const wrapper = document.querySelector('#wrapper');
const burger = document.querySelector('#burger-menu');
const nav = document.querySelector('#nav');
const 

burger.addEventListener('click', function() {
  nav.style.position = 'fixed';
  nav.style.display = 'flex';
  console.log('Хэллоу');
})