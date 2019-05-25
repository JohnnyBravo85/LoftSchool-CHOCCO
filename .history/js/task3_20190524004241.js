const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

right.addEventListener("click", function() {
  // напишите здесь код, который сдвигает items на 100px вправо
  leftStyle = (parseInt(getComputedStyle(items).left) + 100) + 'px';
  items.style.left = leftStyle;

  if(items.style.left === '-500px') {
   leftStyle = '-500px';
  }
  
  

  // если items уже сдвинут на 5 элементов впарво, то больше элементы сдвигать не надо, т.к. вы достигли конца списка
});

left.addEventListener("click", function() {
  let rigthStyle = (parseInt(getComputedStyle(items).left) + 100) + 'px';
  items.style.right = rightStyle;
    // если item находится в самом начале, то больше элементы сдвигать влево не надо, т.к. вы достигли начала списка
});
