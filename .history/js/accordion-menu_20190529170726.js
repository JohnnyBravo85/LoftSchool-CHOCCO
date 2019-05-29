const menu = document.querySelector('#menu'),
accordionItem = document.querySelectorAll('.accordion-item'),
accordionItemlength = accordionItem.length;

menu.addEventListener('click', function(event) {
  for (let i = 0; i < accordionItemlength; ++i) {
    accordionItem[i].classList.remove('a')
  }
});
