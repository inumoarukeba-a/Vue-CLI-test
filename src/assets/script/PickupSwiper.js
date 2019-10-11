import Swiper from "swiper";
export default class {
  /**
   * Constructor
   */
  constructor() {
    const $TARGET = document.querySelector(".pickup__swiper");
    new Swiper($TARGET, {
      slidesPerView: 1,
      pagination: {
        el: ".pickup__pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".pickup__next",
        prevEl: ".pickup__prev"
      },
      breakpoints: {
        768: {}
      }
    });
  }
}
