;(function() {
  let carouselItems = document.querySelectorAll('.carousel__item'),
    carouselItemsLength = carouselItems.length,
    reviewsBlockItems = document.querySelectorAll('.reviews-block__item');

  for (let i = 0; i < carouselItemsLength; ++i) {
    carouselItems[i].addEventListener('click', function (e) {
      for (let j = 0; j < carouselItemsLength; ++j) {
        carouselItems[j].classList.remove('carousel__item--active');
        reviewsBlockItems[j].classList.remove('reviews-block__item--active');
      };
      e.currentTarget.classList.add('carousel__item--active');
      reviewsBlockItems[i].classList.add('reviews-block__item--active');
    });
  }
})()