const burgerMenu = document.querySelector('.burger-menu');
const wrapper = document.querySelector('.wrapper');
const nav = document.querySelector('.nav');
const сompanyList = document.querySelector('.сompany-list');
const menuOverlay = document.createElement('div');
// menuOverlay.classList.add('.overlay');


burgerMenu.addEventListener('click', function() {
  nav.classList.add('nav-active');
  сompanyList.classList.add('сompany-list-active');
  console.log('Хэллоу');
})