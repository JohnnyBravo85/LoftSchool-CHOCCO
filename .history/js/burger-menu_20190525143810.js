const wrapper = document.querySelector('#wrapper');
const burgerMenu = document.querySelector('#burger-menu');
const nav = document.querySelector('#nav');
const сompanyList = document.querySelector('.сompany-list');

burgerMenu.addEventListener('click', function() {
  nav.style.position = 'fixed';
  nav.style.display = 'flex';
  companyList.style.flexDirection = 'column';
  console.log('Хэллоу');
})