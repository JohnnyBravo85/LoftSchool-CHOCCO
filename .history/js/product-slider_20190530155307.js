const sliderControlLeft = document.querySelector('.slider-control--left'),
      sliderControlRight = document.querySelector('.slider-control--rigth'),
      productList = document.querySelector('.product-list');


sliderControlLeft.addEventListener('click', function(event) {
  event.preventDefault();
  let leftStyle = parseInt( getComputedStyle(productList).right );
  console.log(leftStyle);
  if(leftStyle < 0) {
    productList.style.rigth = leftStyle - 100 + '%';
  }
});

sliderControlRight.addEventListener('click', function(event) {
  event.preventDefault();
  let rightStyle = parseInt( getComputedStyle(productList).right );
  console.log(rightStyle);
  if(rightStyle < 100) {
    productList.style.right = rightStyle + 100 + '%';
  }
  console.log(rightStyle);
});