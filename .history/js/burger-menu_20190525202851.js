const burgerMenu = document.querySelector('.burger-menu');
const wrapper = document.querySelector('.wrapper');
const nav = document.querySelector('.nav');
const сompanyList = document.querySelector('.сompany-list');
const menuOverlay = document.createElement('div');

burgerMenu.addEventListener('click', function() {
  nav.classList.add('nav-active');
  сompanyList.classList.add('сompany-list-active');
  document.body.classList.add()
  console.log('Хэллоу');
});

сompanyList.addEventListener('click', function(){
  сompanyList.classList.remove('сompany-list-active');
  nav.classList.remove('nav-active');
})