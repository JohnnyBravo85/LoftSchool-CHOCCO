const sliderControlLeft = document.querySelector('.slider-control--left'),
      sliderControlRight = document.querySelector('.slider-control--rigth'),
      productList = document.querySelector('.product-list');


sliderControlLeft.addEventListener('click', function(event) {
  event.preventDefault();
  let leftStyle = parseInt( getComputedStyle(productList).left - 100 );
  console.log(leftStyle);
  if(leftStyle <= 0) {
    productList.style.left = leftStyle + '%';
  }
});

sliderControlRight.addEventListener('click', function(event) {
  event.preventDefault();
  var rightStyle = parseInt( getComputedStyle(productList).left + 100 );
  console.log(rightStyle)

  if(rightStyle >= -100) {
    productList.style.left = rightStyle + '%';
  }
});