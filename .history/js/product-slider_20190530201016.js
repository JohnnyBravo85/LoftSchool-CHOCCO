const sliderControlLeft = document.querySelector('.slider-control--left'),
      sliderControlRight = document.querySelector('.slider-control--rigth'),
      productList = document.querySelector('.product-list'),
      productListItems = document.querySelectorAll('.product-list__item'),
      productListItemsLength = productListItems.length;

var currentRight = 0,
    step = 100,
    i = 0;

sliderControlLeft.addEventListener('click', function(e) {
  e.preventDefault();

  for (i; i > 0; --i) {
    currentRight -= step;
    productList.style.right = currentRight + '%';
  }
});

sliderControlRight.addEventListener('click', function (e) {
  e.preventDefault();

  for (i; i < productListItemsLength - 1; ++i) {
    currentRight += step; 
    productList.style.right = currentRight + '%';
  }
});
