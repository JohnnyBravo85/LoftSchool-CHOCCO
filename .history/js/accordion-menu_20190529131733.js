const menu = document.querySelector('#menu'),
      accordionItem = document.querySelectorAll('.accordion-item'),
      accordionItemLength = accordionItem.length;

console.log(accordionItem);

menu.addEventListener('click', function(event) {
  for (let i = 0; i < accordionItemLength; ++i) {
    accordionItem[i].classList.remove('accordion-item--active')
  }
  console.log(accordionItem);
});

for (let i = 0; i < accordionItemLength; ++i) {
  accordionItem[i].addEventListener('click', function(event){
    if ( accordionItem[i].classList.contains('accordion-item--active') ) {
      accordionItem[i].classList.remove('accordion-item--active');
    } else {
      
    }
  });
}

// accordionItem[i].addEventListener('click', function (e) {
//   if( document.querySelector('accordion-item--active') ) {
//     accordionItem[i].classList.remove('accordion-item--active');
//   } else {
//     accordionItem[i].classList.add('accordion-item--active');
//   }
// });