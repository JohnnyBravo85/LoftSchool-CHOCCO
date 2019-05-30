const sliderControlLeft = document.querySelector('.slider-control--left'),
      sliderControlRight = document.querySelector('.slider-control--rigth'),
      productList = document.querySelector('.product-list'),
      computed = getComputedStyle(productList);

sliderControlLeft.addEventListener('click', function(e) {
  e.preventDefault();

  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight > 0) {
    productList.style.right = currentRight - 100 + '%';
  }
});

sliderControlRight.addEventListener('click', function (e) {
  e.preventDefault();

  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight < 200) {
    productList.style.right = currentRight + 100 + '%';
  }
});