const sliderControlLeft = document.querySelector('.slider-control--left'),
      sliderControlRight = document.querySelector('.slider-control--rigth'),
      productList = document.querySelector('.product-list');


sliderControlLeft.addEventListener('click', function(event) {
  event.preventDefault();
  let leftStyle = parseInt( getComputedStyle(productList).left);
  console.log(leftStyle);
  if(leftStyle > 0) {
    productList.style.left = leftStyle + 100 + '%';
  }
});

sliderControlRight.addEventListener('click', function(event) {
  event.preventDefault();
  let rightStyle = parseInt( getComputedStyle(productList).left);

  if(rightStyle > -100) {
    productList.style.left = rightStyle - 100 + '%';
    console.log(productList.style.left);
  }
});