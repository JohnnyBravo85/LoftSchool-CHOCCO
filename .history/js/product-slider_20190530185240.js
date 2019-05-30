const sliderControlLeft = document.querySelector('.slider-control--left'),
      sliderControlRight = document.querySelector('.slider-control--rigth'),
      productList = document.querySelector('.product-list'),

var currentRight = 0;

sliderControlLeft.addEventListener('click', function(e) {
  e.preventDefault();

  if (currentRight > 0) {
    productList.style.right = currentRight - 100 + '%';
  }

  console.log(currentRight);
});

sliderControlRight.addEventListener('click', function (e) {
  e.preventDefault();

  if (currentRight < 200) {
    productList.style.right = currentRight + 100 + '%';
  }
  console.log(currentRight);
});