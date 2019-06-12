;(function(){
  document.addEventListener('keyup', function (e) {
    let keyName = e.keyCode;

    if (keyName === 27) {
      burgerMenu.classList.remove('burger-menu--active');
      nav.classList.remove('nav-active');
      сompanyList.classList.remove('сompany-list-active');
      document.body.classList.remove('body-overflow');
      modal.style.display = 'none';
    }
  });
})()