const carousel = document.querySelector('.carousel'),
      carouselItems = document.querySelectorAll('.carousel__item'),
      carouselItemsLenth = carouselItems.length;

for(let i = 0; i < carouselItemsLenth; ++i) {
  carouselItems[i].addEventListener('click', function(e) {
    if( !(carouselItems[i].classList.contains('carousel__item--active')) ) {
      for(let i = 0; i < carouselItemsLenth; ++i) {
        carouselItems[i].classList.remove('carousel__item--active');
      }
      carouselItems[i].classList.add('carousel__item--active');
    }
  });
}