const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

right.addEventListener("click", function() {
  // напишите здесь код, который сдвигает items на 100px вправо

  var right = (parseInt(getComputedStyle(items).left) - 100);
  console.log(right);

  // если items уже сдвинут на 5 элементов впарво, то больше элементы сдвигать не надо, т.к. вы достигли конца списка
  if (right > -600) {
    items.style.left = right + 'px';
  }
});

left.addEventListener("click", function() {
  var left = (parseInt(getComputedStyle(items).left) + 100);
  console.log(left);
  // если item находится в самом начале, то больше элементы сдвигать влево не надо, т.к. вы достигли начала списка
  if (left < 100) {
    items.style.left = left + 'px';
  }
});