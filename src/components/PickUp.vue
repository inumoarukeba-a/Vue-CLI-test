<template>
  <div class="hero">
    <picture class="hero__picture">
      <source
        media="(min-width: 768px)"
        srcset="@/assets/image/hero.jpg 1x, @/assets/image/hero@2x.jpg 2x"
      />
      <source media="(max-width: 767.9px)" srcset="@/assets/image/hero@sp.jpg" />
      <img class="hero__image lazyload" src="@/assets/image/hero.jpg" />
    </picture>
    <div class="hero__content">
      <div class="pickup">
        <div class="pickup__swiperWrap">
          <div class="pickup__swiper swiper-container">
            <div class="pickup__wrapper swiper-wrapper">
              <div class="pickup__slide swiper-slide">
                <a class="pickup__link" href="#">
                  <picture class="pickup__picture">
                    <source
                      media="(min-width: 768px)"
                      srcset="@/assets/image/pickup01.png 1x, @/assets/image/pickup01@2x.png 2x"
                    />
                    <source media="(max-width: 767.9px)" srcset="@/assets/image/pickup01@sp.png" />
                    <img
                      class="pickup__image lazyload"
                      src="@/assets/image/pickup01.png"
                      alt="ご入居お祝い金キャンペーン"
                    />
                  </picture>
                </a>
              </div>
              <div class="pickup__slide swiper-slide">
                <a class="pickup__link" href="#">
                  <picture class="pickup__picture">
                    <source
                      media="(min-width: 768px)"
                      srcset="@/assets/image/pickup01.png 1x, @/assets/image/pickup01@2x.png 2x"
                    />
                    <source media="(max-width: 767.9px)" srcset="@/assets/image/pickup01@sp.png" />
                    <img
                      class="pickup__image lazyload"
                      src="@/assets/image/pickup01.png"
                      alt="ご入居お祝い金キャンペーン"
                    />
                  </picture>
                </a>
              </div>
            </div>
          </div>
        </div>
        <aside class="pickup__pagination swiper-pagination"></aside>
        <aside class="pickup__controller">
          <div class="pickup__prev swiper-button-prev"></div>
          <div class="pickup__next swiper-button-next"></div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PickUp",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* Block
───────────────────────────────── */
.hero {
  position: relative;
  @include mq-pc {
    padding-bottom: rem(128);
  }

  &::before {
    @include mq-pc {
      @include pseudo;
      width: 100%;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);
      position: absolute;
      left: 0;
      bottom: 0;
      height: rem(168);
      z-index: 1;
      pointer-events: none;
    }
  }

  & + * {
    @include mq-pc {
      margin-top: rem(104);
    }
    @include mq-sp {
      margin-top: 21vw;
    }
  }
}

/* Element
───────────────────────────────── */
.hero__content {
  position: relative;
  z-index: 2;
  @include contents;
  @include mq-pc {
    padding-top: rem(220);
  }
  @include mq-sp {
    padding: 34vw 8vw 0 8vw;
  }
}

.hero__image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  @include mq-pc {
    @include ofi-cover;
  }
}

/* Block
───────────────────────────────── */
.pickup {
  position: relative;
  @include mq-pc {
    width: rem(648);
  }
}

/* Swiper
───────────────────────────────── */
.pickup__swiperWrap {
  background-color: #fff;
  transition: box-shadow $base-duration $easing,
    transform $base-duration $easing;
  @include mq-pc {
    padding: rem(4);
    border-radius: rem(16);
    box-shadow: rem(16) rem(16) rem(40) rgba(0, 0, 0, 0.05);
  }
  @include mq-sp {
    padding: 1vw;
    border-radius: vw(16);
    box-shadow: 5vw 5vw 13vw rgba(0, 0, 0, 0.05);
  }

  @include hover {
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
    transform: translateY(1px);
  }
}

/* Item
───────────────────────────────── */
.pickup__slide {
  overflow: hidden;
  @include mq-pc {
    border-radius: rem(14);
  }
  @include mq-sp {
    border-radius: vw(14);
  }
}

/* Controller
───────────────────────────────── */
.pickup__controller {
  @include mq-sp {
    display: none;
  }
  .swiper-button-disabled {
    opacity: 1;
  }
}

.pickup__prev,
.pickup__next {
  @include mq-pc {
    width: rem(64);
    height: rem(64);
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color $base-duration $easing;
    path {
      stroke: $color-text;
    }
    @include hover {
      background-color: $color-main;
      path {
        stroke: #fff;
      }
    }
  }
  &.swiper-button-disabled {
    path {
      stroke: $color-border;
    }
  }
}

.pickup__prev {
  left: 0;
  @include mq-pc {
    margin-left: rem(-32);
  }

  .\@svg__arrow {
    transform: rotate(180deg);
  }
}

.pickup__next {
  right: 0;
  @include mq-pc {
    margin-right: rem(-32);
  }
}

/* Pagination
───────────────────────────────── */
.pickup__pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 100%;
  transform: translateY(100%);

  @include mq-pc {
    bottom: rem(-24);
  }
  @include mq-sp {
    bottom: -5vw;
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    & + * {
      @include mq-pc {
        margin: 0 rem(8);
      }
      @include mq-sp {
        margin: 0 1.5vw;
      }
    }
  }
  .swiper-pagination-bullet {
    background: $color-main;
    opacity: 0.382;
  }
  .swiper-pagination-bullet-active {
    background: $color-main;
    opacity: 1;
  }
}

/* List
───────────────────────────────── */
.pickup__list {
  & + * {
    @include mq-pc {
      margin-top: rem(64);
    }
  }
}

/* Item
───────────────────────────────── */
.pickup__image {
  width: 100%;
}
</style>
