const sliderControlLeft = document.querySelector('.slider-control--left'),
      sliderControlRight = document.querySelector('.slider-control--rigth'),
      productList = document.querySelector('.product-list'),
      productListItems = document.querySelectorAll('.product-list__item'),
      productListItemsLength = productListItems.lenght;

var currentRight = 0,
    step = 100,
    i = 0;

sliderControlLeft.addEventListener('click', function(e) {
  e.preventDefault();

  if (  < ) {
    currentRight -= step;
    productList.style.right = currentRight + '%';
    i++;
  }

});

sliderControlRight.addEventListener('click', function (e) {
  e.preventDefault();

  if (i < productListItemsLength + 1) {
    currentRight += step; 
    productList.style.right = currentRight + '%';
    i++;
  }
});