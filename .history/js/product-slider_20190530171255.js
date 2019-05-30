const sliderControlLeft = document.querySelector('.slider-control--left'),
      sliderControlRight = document.querySelector('.slider-control--rigth'),
      productList = document.querySelector('.product-list'),
      computed = getComputedStyle(productList);

      sliderControlRight.addEventListener('click', function (e) {
        e.preventDefault();

        let currentRight = parseInt(computed.right);

        if (!currentRight) {
          currentRight = 0;
        }

        if (currentRight < 100) {
          productList.style.right = currentRight + 100 + '%';
        }

        console.log(currentRight);
      });