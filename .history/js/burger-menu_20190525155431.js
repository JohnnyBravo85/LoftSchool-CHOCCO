const wrapper = document.querySelector('.wrapper');
const burgerMenu = document.querySelector('#burger-menu');
const nav = document.querySelector('#nav');
const сompanyList = document.querySelector('.сompany-list');
const menuOverlay = document.createElement('div');

wrapper.appendChild(menuOverlay);
menuOverlay.style.position ='absolute';
menuOverlay.style.width ='100vw';
menuOverlay.style.height ='100vh';
menuOverlay.style.top ='0';
menuOverlay.style.left ='0';
menuOverlay.style.background ='#2f3234';
menuOverlay.style.zIndex ='50';
// menuOverlay.classList.add('.overlay');


burgerMenu.addEventListener('click', function() {
  console.log('Хэллоу');
})