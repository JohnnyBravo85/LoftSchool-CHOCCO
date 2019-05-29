const burgerMenu = document.querySelector('.burger-menu'),
      nav = document.querySelector('.nav'),
      сompanyList = document.querySelector('.сompany-list'),
      сompanyListItem = document.querySelectorAll('.сompany-list__item');

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('burger-menu--active');
  nav.classList.toggle('nav-active');
  сompanyList.classList.toggle('сompany-list-active');
  document.body.classList.toggle('body-overflow');
});

сompanyListItem.addEventListener('click', function(){
    сompanyList.classList.remove('сompany-list-active');
    nav.classList.remove('nav-active');
    document.body.classList.remove('body-overflow');
  });

// сompanyListLink.addEventListener('click', function(){
//   сompanyList.classList.remove('сompany-list-active');
//   nav.classList.remove('nav-active');
//   document.body.classList.remove('body-overflow');
// })