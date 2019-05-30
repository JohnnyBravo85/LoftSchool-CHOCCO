const sliderControlLeft = document.querySelector('.slider-control--left'),
      sliderControlRight = document.querySelector('.slider-control--rigth'),
      productList = document.querySelector('.product-list');


sliderControlLeft.addEventListener('click', function(event) {
  event.preventDefault();
  let left = parseInt( getComputedStyle(productList).right );
  if(left < 0) {
    productList.style.rigth = left - 100 + '%';
  }
});

sliderControlRight.addEventListener('click', function(event) {
  event.preventDefault();
  let rightClick = getComputedStyle(productList).right;
});