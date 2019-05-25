const burgerMenu = document.querySelector('.burger-menu');
const wrapper = document.querySelector('.wrapper');
const nav = document.querySelector('.nav');
const сompanyList = document.querySelector('.сompany-list');
const menuOverlay = document.createElement('div');

burgerMenu.addEventListener('click', function() {
  nav.classList.toggle('nav-active');
  сompanyList.classList.toggle('сompany-list-active');
  document.body.classList.toggle('body-overflow');
});

сompanyList.addEventListener('click', function(){
  сompanyList.classList.remove('сompany-list-active');
  nav.classList.remove('nav-active');
  document.body.classList.remove('body-overflow');
})