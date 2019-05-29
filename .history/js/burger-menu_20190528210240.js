const burgerMenu = document.querySelector('.burger-menu'),
      nav = document.querySelector('.nav'),
      сompanyList = document.querySelector('.сompany-list');

burgerMenu.addEventListener('click', function() {
  burgerMenu.classList.toggle('burger-menu--active');
  nav.classList.toggle('nav-active');
  сompanyList.classList.toggle('сompany-list-active');
  document.body.classList.toggle('body-overflow');
});