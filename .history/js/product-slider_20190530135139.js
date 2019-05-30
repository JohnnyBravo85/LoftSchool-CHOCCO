const sliderControlLeft = document.querySelector('.slider-control--left'),
      sliderControlRight = document.querySelector('.slider-control--rigth'),
      productList = document.querySelector('.product-list');


sliderControlLeft.addEventListener('click', function(event) {
  event.preventDefault();
  productList.style.left = getComputedStyle(productList).left;
  console.log(productList.style.left);
})