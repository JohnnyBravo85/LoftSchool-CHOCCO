// const menu = document.querySelector('#menu'),
// accordionItem = document.querySelectorAll('.accordion-item'),
// accordionItemlength = accordionItem.length;

// menu.addEventListener('click', function(event) {
//   for (let i = 0; i < accordionItemlength; ++i) {
//     accordionItem[i].classList.remove('a')
//   }
// });

function filter(input, than) {
  for (let i = 0; i < input.length; i++) {
    let arrayNew = [];
    if (input[i] > than) {
      for(let j = 0; j < input.length; j++) {
        arrayNew[j] = input[i];
      }
    }
  }
  return arrayNew
};

var array = [12, 100, 34, 65, 10];

filter(array, 15);

console.log(arrayNew);

