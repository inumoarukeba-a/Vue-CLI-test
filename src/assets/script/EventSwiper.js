import Swiper from 'swiper'
export default class {
  /**
   * Constructor
   */
  constructor() {
    const $TARGET = document.querySelector('.event__swiper')
    new Swiper($TARGET, {
      slidesPerView: 'auto',
      freeMode: true,
      pagination: {
        el: '.event__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.event__next',
        prevEl: '.event__prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
          freeMode: false,
        },
      },
    })
  }
}
