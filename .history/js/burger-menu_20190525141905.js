const wrapper = document.querySelector('#wrapper');
const burger = document.querySelector('#burger-menu');
const nav = document.querySelector('#nav');

burger.addEventListener('click', function() {
  wrapper.style.background = '#2f3234';
  console.log('Хэллоу');
})