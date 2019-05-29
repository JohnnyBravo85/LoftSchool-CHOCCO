// const menu = document.querySelector('#menu'),
// accordionItem = document.querySelectorAll('.accordion-item'),
// accordionItemlength = accordionItem.length;

// menu.addEventListener('click', function(event) {
//   for (let i = 0; i < accordionItemlength; ++i) {
//     accordionItem[i].classList.remove('a')
//   }
// });

var arrayNew = [];

function filter(input, than) {
  let j = 0;
  for (let i = 0; i < input.length; ++i) {
    if (input[i] > than) {
      arrayNew[j] = input[i];
      ++j;
    }
  }
  return arrayNew;
};

var array = [12, 100, 34, 65, 10];

filter(array, 20);

console.log(arrayNew);

