const menu = document.querySelector('#menu'),
      accordionItem = document.querySelectorAll('.accordion-item'),
      accordionItemLength = accordionItem.length;


console.log(accordionItem);

menu.addEventListener('click', function(event) {
  for (let i = 0; i < accordionItemLength; ++i) {
    accordionItem[i].classList.remove('abc')
    console.log(accordionItem);
  }
});

