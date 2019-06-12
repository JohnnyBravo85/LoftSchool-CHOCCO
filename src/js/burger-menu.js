;(function(){
  const burgerMenu = document.querySelector('.burger-menu'),
    nav = document.querySelector('.nav'),
    сompanyList = document.querySelector('.сompany-list'),
    companyLists = document.querySelectorAll('.сompany-list'),
    companyListsLength = companyLists.length;

  burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger-menu--active');
    nav.classList.toggle('nav-active');
    сompanyList.classList.toggle('сompany-list-active');
    document.body.classList.toggle('body-overflow');
  });

  for (let i = 0; i < companyListsLength; ++i) {
    companyLists[i].addEventListener('click', function (e) {
      burgerMenu.classList.remove('burger-menu--active');
      nav.classList.remove('nav-active');
      сompanyList.classList.remove('сompany-list-active');
      document.body.classList.remove('body-overflow');
    });
  };
})()