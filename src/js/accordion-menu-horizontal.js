;(function() {
  const menu = document.querySelector('#menu'),
  accordionItems = document.querySelectorAll('.accordion-item'),
  accordionItemsLength = accordionItems.length;

menu.addEventListener('click', function (event) {
  for (let i = 0; i < accordionItemsLength; ++i) {
    accordionItems[i].classList.remove('accordion-item--active');
  }
});

for (let i = 0; i < accordionItemsLength; ++i) {
  accordionItems[i].addEventListener('click', function (event) {
    event.stopPropagation();
    if (accordionItems[i].classList.contains('accordion-item--active')) {
      accordionItems[i].classList.remove('accordion-item--active');
    } else {
      for (let i = 0; i < accordionItemsLength; ++i) {
        accordionItems[i].classList.remove('accordion-item--active');
      }
      accordionItems[i].classList.add('accordion-item--active');
    }
  });
};
})()