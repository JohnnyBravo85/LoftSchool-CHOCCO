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
  productList.style.right = parseInt( getComputedStyle(productList).right );
  if(productList.style.right < 100) {
    productList.style.right = right + 100 + '%';
  }
  console.log(productList.style.right);
});