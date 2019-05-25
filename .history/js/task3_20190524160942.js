const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

right.addEventListener("click", function() {
  // напишите здесь код, который сдвигает items на 100px вправо

  var rightS = (parseInt(getComputedStyle(items).left) - 100);
  console.log(rigth);

  if (rightS < -500) {
    items.style.left = rightS + 'px';
  }
  // если items уже сдвинут на 5 элементов впарво, то больше элементы сдвигать не надо, т.к. вы достигли конца списка
});

if(items.style.left == '-500px') {
  getComputedStyle(items).left = '-500px';
}

left.addEventListener("click", function() {
  let rigthStyle = (parseInt(getComputedStyle(items).left) + 100) + 'px';
  items.style.left = rigthStyle;
  console.log(items.style.left);
    // если item находится в самом начале, то больше элементы сдвигать влево не надо, т.к. вы достигли начала списка
});

  if(items.style.left == '0px') {
    items.style.left = '0px'
  }