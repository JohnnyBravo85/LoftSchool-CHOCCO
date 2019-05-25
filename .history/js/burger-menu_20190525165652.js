const burgerMenu = document.querySelector('.burger-menu');
const wrapper = document.querySelector('.wrapper');
const nav = document.querySelector('.nav');
const сompanyList = document.querySelector('.сompany-list');
const menuOverlay = document.createElement('div');
// menuOverlay.classList.add('.overlay');


burgerMenu.addEventListener('click', function() {
  // wrapper.appendChild(menuOverlay);
  // menuOverlay.style.position ='absolute';
  // menuOverlay.style.width ='100%';
  // menuOverlay.style.height ='100%';
  // menuOverlay.style.top ='0';
  // menuOverlay.style.left ='0';
  // menuOverlay.style.background ='#2f3234';
  // menuOverlay.style.zIndex ='50';

  nav.classList.add('nav-js');
  сompanyList.classList.add('сompany-list-js');
  console.log('Хэллоу');
})