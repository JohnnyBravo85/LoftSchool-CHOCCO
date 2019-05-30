const sliderControlLeft = document.querySelector('.slider-control--left'),
      sliderControlRight = document.querySelector('.slider-control--rigth'),
      productList = document.querySelector('.product-list'),
      currentRight = parseInt( getComputed(productList.style.right) );

sliderControlLeft.addEventListener('click', function(e) {
  e.preventDefault();

  let currentRight = parseInt(computed.right);

  if (!currentRight) {
    currentRight = 0;
  }

  if (currentRight > 0) {
    productList.style.right = currentRight - 100 + '%';
  }

  console.log(currentRight);
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

  console.log(currentRight);
});