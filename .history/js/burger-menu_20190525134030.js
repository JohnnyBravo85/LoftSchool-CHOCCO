const wrapper = document.querySelector('#wrapper');
const burger = document.querySelector('#burger-menu');

burger.addEventListener('click', function() {
  wrapper.style.background = '#2f3234';
  wrapper.style.zIndex = ''
  console.log('Хэллоу');
})