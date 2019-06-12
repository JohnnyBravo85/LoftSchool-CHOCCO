;(function () {
  const onePageScroll = document.querySelector('.one-page-scroll'),
    sections = document.querySelectorAll('.section'),
    sectionsLength = sections.length;
  for (let i = 0; i < sectionsLength; ++i) {
    let index = [];

    index[i] = sections[i].getAttribute('data-scroll'); //Получаем массив атрибутов data-scroll
    console.log(index);
  };

  const transitionDelayOPS = getComputedStyle(onePageScroll).transitionDelay,
  delay = (+transitionDelayOPS.slice(0, transitionDelayOPS.length - 1)) * 1000; //Преобразование в число и получение числа в ms

  let count = 0;

  window.addEventListener('wheel', function(e) {
    let transformFlag = true;

    if(e.deltaY > 0) {
      console.log(e.deltaY);
    }

    if(e.deltaY < 0) {
      count--;
      onePageScroll.style.transform = `translateY(-${count * 100}%)`;
  }
});
})()

// if(transformFlag) {
//   count++;
//   onePageScroll.style.transform = `translateY(-${count * 100}%)`;
//   transformFlag = false;
// }

// setTimeout (function() {
// }, delay);