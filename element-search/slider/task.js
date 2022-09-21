const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
const sliderNext = document.querySelector('.slider__arrow_next');
const sliderPrev = document.querySelector('.slider__arrow_prev');
let sliderActive = document.querySelector('.slider__item_active');

sliderNext.onclick = function() {
  if (sliderActive.className.includes('slider__item slider__item_active')) {
    if (sliderItems.indexOf(sliderActive) >= sliderItems.length - 1) {
      sliderActive = sliderItems[0];
      sliderActive.classList.add('slider__item_active');
      sliderItems[sliderItems.length - 1].classList.remove('slider__item_active');
    } else {
      sliderActive.classList.remove('slider__item_active');
      sliderActive = sliderItems[sliderItems.indexOf(sliderActive) + 1];
      sliderActive.classList.add('slider__item_active');
    }
  }
}

sliderPrev.onclick = function() {
  if (sliderActive.className.includes('slider__item slider__item_active')) {
    if (sliderItems.indexOf(sliderActive) === 0) {
      sliderActive = sliderItems[sliderItems.length - 1];
      sliderActive.classList.add('slider__item_active');
      sliderItems[0].classList.remove('slider__item_active');
    } else {
      sliderActive.classList.remove('slider__item_active');
      sliderActive = sliderItems[sliderItems.indexOf(sliderActive) - 1];
      sliderActive.classList.add('slider__item_active');
    }
  }
}