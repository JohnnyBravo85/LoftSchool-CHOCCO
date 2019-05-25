const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

right.addEventListener("click", function() {
  // напишите здесь код, который сдвигает items на 100px вправо
  let leftStyle = (parseInt(getComputedStyle(items).left) - 100) + 'px';
  items.style.left = leftStyle;
  console.log(items.style.left)

  if(items.style.left == '-500px') {
    items.style.left = '-500px';
  }
  

  // если items уже сдвинут на 5 элементов впарво, то больше элементы сдвигать не надо, т.к. вы достигли конца списка
});

left.addEventListener("click", function() {
  let rigthStyle = (parseInt(getComputedStyle(items).left) + 100) + 'px';
  items.style.left = rigthStyle;
  console.log(items.style.left);

  if(items.style.left == '0px') {
    items.style.left = '0px'
  }
    // если item находится в самом начале, то больше элементы сдвигать влево не надо, т.к. вы достигли начала списка
});
