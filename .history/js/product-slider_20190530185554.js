const sliderControlLeft = document.querySelector('.slider-control--left'),
      sliderControlRight = document.querySelector('.slider-control--rigth'),
      productList = document.querySelector('.product-list');

var currentRight = 0;

sliderControlLeft.addEventListener('click', function(e) {
  e.preventDefault();

  if (currentRight > 0) {
    currentRight -= 100;
    productList.style.right = currentRight + '%';
  }

  console.log(currentRight);
});

sliderControlRight.addEventListener('click', function (e) {
  e.preventDefault();

  if (currentRight < 200) {
    currentRight += 100; 
    productList.style.right = currentRight + '%';
  }
  console.log(currentRight);
});