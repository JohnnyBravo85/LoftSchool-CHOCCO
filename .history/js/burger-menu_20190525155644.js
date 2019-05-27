const wrapper = document.querySelector('.wrapper');
const burgerMenu = document.querySelector('#burger-menu');
const nav = document.querySelector('#nav');
const сompanyList = document.querySelector('.сompany-list');
const menuOverlay = document.createElement('div');

body.appendChild(menuOverlay);
menuOverlay.style.position ='absolute';
menuOverlay.style.width ='100%';
menuOverlay.style.height ='100%';
menuOverlay.style.top ='0';
menuOverlay.style.left ='0';
menuOverlay.style.background ='#2f3234';
menuOverlay.style.zIndex ='50';
// menuOverlay.classList.add('.overlay');


burgerMenu.addEventListener('click', function() {
  console.log('Хэллоу');
})