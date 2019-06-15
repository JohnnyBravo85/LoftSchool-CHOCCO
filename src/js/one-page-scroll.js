;(function () {
  const onePageScroll = document.querySelector('.one-page-scroll'),
    sections = document.querySelectorAll('.section'),
    sectionsLength = sections.length,
    сompanyListItem = document.querySelectorAll('.сompany-list__item'),
    сompanyListItemLength = сompanyListItem.length,
    fixedNavItem = document.querySelectorAll('.fixed-nav__item'),
    fixedNavItemLength = fixedNavItem.length;

  for (let i = 0; i < сompanyListItemLength; ++i) {
    сompanyListItem[i].addEventListener('click', function (e) {
      for(let j = 0; j < fixedNavItemLength; ++j) {
        fixedNavItem[j].classList.remove('fixed-nav__item--active')
      }
      onePageScroll.style.transform = `translateY(-${step * i}%)`;
      fixedNavItem[i + 1].classList.add('fixed-nav__item--active');
    });
  }

  for(let i = 0; i < fixedNavItemLength; ++i) {
    fixedNavItem[i].addEventListener('click', function (e) {
      for(let j = 0; j < fixedNavItemLength; ++j) {
        fixedNavItem[j].classList.remove('fixed-nav__item--active');
      }
      onePageScroll.style.transform = `translateY(-${step * i}%)`;
      fixedNavItem[i].classList.add('fixed-nav__item--active');
    });
  }

  const transitionDelayOPS = getComputedStyle(onePageScroll).transitionDuration,
    delay = (+transitionDelayOPS.slice(0, transitionDelayOPS.length - 1)) * 1000; //Преобразование в число и получение числа в ms

  let count = 0,
    step = 100;

  let transformFlag = true;
  window.addEventListener('wheel', function (e) {

    if (e.deltaY > 0) {
      if (transformFlag && count < sectionsLength - 1) {
        for(let i = 0; i < fixedNavItemLength; ++i) {
          fixedNavItem[i].classList.remove('fixed-nav__item--active');
        }
        ++count;
        onePageScroll.style.transform = `translateY(-${count * step}%)`;
        fixedNavItem[count].classList.add('fixed-nav__item--active');
        transformFlag = false;
        setTimeout(function () {
          transformFlag = true;
        }, delay);
      }
    }

    if (e.deltaY < 0) {
      if (transformFlag && count > 0) {
        for(let i = 0; i < fixedNavItemLength; ++i) {
          fixedNavItem[i].classList.remove('fixed-nav__item--active');
        }
        --count;
        onePageScroll.style.transform = `translateY(-${count * step}%)`;
        fixedNavItem[count].classList.add('fixed-nav__item--active');
        transformFlag = false;
        setTimeout(function () {
          transformFlag = true;
        }, delay);
      }
    }
  });

  let currentPosition;
  window.addEventListener('touchstart', function(e) {
    currentPosition = e.targetTouches[0].pageY;
  });

  let lastPosition;
  window.addEventListener('touchmove', function (e) {

    lastPosition = e.changedTouches[0].pageY;

    if (currentPosition > lastPosition) {
      if (transformFlag && count < sectionsLength - 1) {
        for(let i = 0; i < fixedNavItemLength; ++i) {
          fixedNavItem[i].classList.remove('fixed-nav__item--active');
        }
        ++count;
        onePageScroll.style.transform = `translateY(-${count * step}%)`;
        fixedNavItem[count].classList.add('fixed-nav__item--active');
        transformFlag = false;
        setTimeout(function () {
          transformFlag = true;
        }, delay);
      }
    }

    if (currentPosition < lastPosition) {
      if (transformFlag && count > 0) {
        for(let i = 0; i < fixedNavItemLength; ++i) {
          fixedNavItem[i].classList.remove('fixed-nav__item--active');
        }
        --count;
        onePageScroll.style.transform = `translateY(-${count * step}%)`;
        fixedNavItem[count].classList.add('fixed-nav__item--active');
        transformFlag = false;
        setTimeout(function () {
          transformFlag = true;
        }, delay);
      }
    }
  });

})()