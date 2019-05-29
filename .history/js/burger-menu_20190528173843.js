const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const сompanyList = document.querySelector('.сompany-list');
const сompanyListLink = document.querySelectorAll('.сompany-list__item');
console.log(сompanyListLink);

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('burger-menu--active');
  nav.classList.toggle('nav-active');
  сompanyList.classList.toggle('сompany-list-active');
  document.body.classList.toggle('body-overflow');
});

сompanyListLink.addEventListener('click', function(){
    сompanyList.classList.remove('сompany-list-active');
    nav.classList.remove('nav-active');
    document.body.classList.remove('body-overflow');
  });

// сompanyListLink.addEventListener('click', function(){
//   сompanyList.classList.remove('сompany-list-active');
//   nav.classList.remove('nav-active');
//   document.body.classList.remove('body-overflow');
// })