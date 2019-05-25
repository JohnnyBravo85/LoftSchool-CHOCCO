const wrapper = document.querySelector('.wrapper');
const burgerMenu = document.querySelector('#burger-menu');
const nav = document.querySelector('#nav');
const сompanyList = document.querySelector('.сompany-list');
const menuOverlay = document.createElement('div');

wrapper.appendChild(menuOverlay);
menuOverlay.style.position ='absolute';
menuOverlay.style.width ='100vw';
menuOverlay.style.height ='100vh';

// menuOverlay.classList.add('.overlay');


burgerMenu.addEventListener('click', function() {
  console.log('Хэллоу');
})