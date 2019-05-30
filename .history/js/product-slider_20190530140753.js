const sliderControlLeft = document.querySelector('.slider-control--left'),
      sliderControlRight = document.querySelector('.slider-control--rigth'),
      productList = document.querySelector('.product-list');


sliderControlLeft.addEventListener('click', function(event) {
  event.preventDefault();
  var leftStyle = parseInt( getComputedStyle(productList).left);
  console.log(leftStyle);
});

sliderControlRight.addEventListener('click', function(event) {
  event.preventDefault();
  var rightStyle = parseInt( getComputedStyle(productList).left);
  if(rightStyle < 100) {
    productList.style.left = rightStyle + 100 + '%';
    console.log(productList.style.left);
  }
});