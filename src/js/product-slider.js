;(function(){
  const sliderControlLeft = document.querySelector('.slider-control--left'),
  sliderControlRight = document.querySelector('.slider-control--rigth'),
  productList = document.querySelector('.product-list'),
  productListItems = document.querySelectorAll('.product-list__item'),
  productListItemsLength = productListItems.length;

var currentRight = 0,
  step = 100,
  i = 0;

sliderControlLeft.addEventListener('click', function (e) {
  e.preventDefault();

  if (i > 0) {
    currentRight -= step;
    productList.style.right = currentRight + '%';
    --i;
  } else if (i == 0) {
    currentRight = (productListItemsLength - 1) * step;
    productList.style.right = currentRight + '%';
    i = productListItemsLength - 1;
  }
});

sliderControlRight.addEventListener('click', function (e) {
  e.preventDefault();

  if (i < productListItemsLength - 1) {
    currentRight += step;
    productList.style.right = currentRight + '%';
    ++i;
  } else if (i == productListItemsLength - 1) {
    currentRight = 0;
    productList.style.right = currentRight + '%'
    i = 0;
  }
});
})()