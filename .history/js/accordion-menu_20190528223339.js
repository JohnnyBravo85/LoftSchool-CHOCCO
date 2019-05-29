const accordion = document.querySelector('.accordion'),
      accordionItem = document.querySelectorAll('.accordion-item'),
      accordionItemLength = accordionItem.length;


console.log(accordionItem);

accordion.addEventListener('click', function(event) {
  for (let i = 0; i < accordionItemLength; ++i) {
    accordionItem[i].classList.remove('abc')
  }
});

console.log(accordionItem);