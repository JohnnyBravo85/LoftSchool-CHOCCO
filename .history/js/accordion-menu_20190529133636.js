const menu = document.querySelector('#menu'),
      accordionItem = document.querySelectorAll('.accordion-item'),
      accordionItemLength = accordionItem.length;

menu.addEventListener('click', function(event) {
  for (let i = 0; i < accordionItemLength; ++i) {
    accordionItem[i].classList.remove('accordion-item--active')
  }
});

for (let i = 0; i < accordionItemLength; ++i) {
  accordionItem[i].addEventListener('click', function(event){
    event.stopPropagation();
    if ( accordionItem[i].classList.contains('accordion-item--active') ) {
      accordionItem[i].classList.remove('accordion-item--active');
    } else {
      for(let i = 0; i < accordionItemLength; ++i) {
        accordionItem[i].classList.remove('accordion-item--active');
      }
      accordionItem[i].classList.add('accordion-item--active');
    }
  });
}