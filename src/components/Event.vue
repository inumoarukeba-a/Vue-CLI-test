/* HTML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<template>
  <div class="event">
    <header class="event__header">
      <h2 class="@titleA">
        <span class="@titleA__english">EVENTS</span>
        <span class="@titleA__japanese">イベント情報</span>
      </h2>
    </header>
    <div class="event__swiperWrap">
      <div class="event__swiper swiper-container">
        <div class="event__list swiper-wrapper">
          <div class="event__item swiper-slide">
            <a href="sample" class="event__link">
              <div class="event__thumbnail">
                <img
                  class="event__image"
                  src="@/assets/image/home/dummy_event@2x.png"
                  alt="イベント名が入りますイベント名が"
                />
              </div>
              <div class="event__body">
                <span class="event__area">大阪府</span>
                <h3 class="event__title">イベント名が入りますイベント名が</h3>
                <span class="event__date">2019.05.14開催</span>
              </div>
            </a>
          </div>
          <div class="event__item swiper-slide">
            <a href="sample" class="event__link">
              <div class="event__thumbnail">
                <img
                  class="event__image"
                  src="@/assets/image/home/dummy_event@2x.png"
                  alt="イベント名が入りますイベント名が"
                />
              </div>
              <div class="event__body">
                <span class="event__area">大阪府</span>
                <h3 class="event__title">イベント名が入りますイベント名が</h3>
                <span class="event__date">2019.05.14開催</span>
              </div>
            </a>
          </div>
          <div class="event__item swiper-slide">
            <a href="sample" class="event__link">
              <div class="event__thumbnail">
                <img
                  class="event__image"
                  src="@/assets/image/home/dummy_event@2x.png"
                  alt="イベント名が入りますイベント名が"
                />
              </div>
              <div class="event__body">
                <span class="event__area">大阪府</span>
                <h3 class="event__title">イベント名が入りますイベント名が</h3>
                <span class="event__date">2019.05.14開催</span>
              </div>
            </a>
          </div>
          <div class="event__item swiper-slide">
            <a href="sample" class="event__link">
              <div class="event__thumbnail">
                <img
                  class="event__image"
                  src="@/assets/image/home/dummy_event@2x.png"
                  alt="イベント名が入りますイベント名が"
                />
              </div>
              <div class="event__body">
                <span class="event__area">大阪府</span>
                <h3 class="event__title">イベント名が入りますイベント名が</h3>
                <span class="event__date">2019.05.14開催</span>
              </div>
            </a>
          </div>
          <div class="event__item swiper-slide">
            <a href="sample" class="event__link">
              <div class="event__thumbnail">
                <img
                  class="event__image"
                  src="@/assets/image/home/dummy_event@2x.png"
                  alt="イベント名が入りますイベント名が"
                />
              </div>
              <div class="event__body">
                <span class="event__area">大阪府</span>
                <h3 class="event__title">イベント名が入りますイベント名が</h3>
                <span class="event__date">2019.05.14開催</span>
              </div>
            </a>
          </div>
        </div>
        <aside class="event__pagination swiper-pagination"></aside>
      </div>
      <aside class="event__controller">
        <div class="event__prev swiper-button-prev">
          <Arrow />
        </div>
        <div class="event__next swiper-button-next">
          <Arrow />
        </div>
      </aside>
    </div>
    <div class="event__more">
      <a href="sample" class="@linkC">もっとイベント情報を見る</a>
    </div>
  </div>
</template>

/* Script
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<script>
import Arrow from "@/modules/Arrow.vue";

export default {
  components: {
    Arrow
  }
};
</script>


/* Style
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<style lang="scss">
/* Block
───────────────────────────────── */
.event {
  @include mq-pc {
    position: relative;
    border-radius: rem(16);
    background: $color-lightBlue;
    padding: rem(40) 0;
  }
  @include mq-sp {
    padding: 0 8vw;
  }

  & + * {
    @include mq-pc {
      margin-top: rem(168);
    }
    @include mq-sp {
      margin-top: 34vw;
    }
  }
}

/* Header
───────────────────────────────── */
.event__header {
  @include mq-pc {
    position: absolute;
    top: rem(-24);
    left: rem(64);
  }
}

/* Swiper
───────────────────────────────── */
.event__swiperWrap {
  position: relative;
  @include mq-sp {
    margin-left: -8vw;
    margin-right: -8vw;
  }

  & + * {
    @include mq-sp {
      margin-top: 5vw;
    }
  }
}

.event__swiper {
  height: 100%;
  @include mq-pc {
    padding: rem(32);
    margin-left: rem(32);
    margin-right: rem(32);
  }
  @include mq-sp {
    padding: 8vw;
  }
}

/* Pagination
───────────────────────────────── */
.event__pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  @include mq-pc {
    position: static;
  }
  @include mq-sp {
    display: none;
  }

  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    & + * {
      margin: 0 rem(8);
    }
  }
  .swiper-pagination-bullet {
    background: $color-main;
    opacity: 0.1618;
  }
  .swiper-pagination-bullet-active {
    background: $color-main;
    opacity: 1;
  }
}

/* Controller
───────────────────────────────── */
.event__controller {
  @include mq-sp {
    display: none;
  }
  .swiper-button-disabled {
    opacity: 1;
  }
}

.event__prev,
.event__next {
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

.event__prev {
  left: 0;
  @include mq-pc {
    margin-left: rem(-32);
  }

  .\@svg__arrow {
    transform: rotate(180deg);
  }
}

.event__next {
  right: 0;
  @include mq-pc {
    margin-right: rem(-32);
  }
}

/* List
───────────────────────────────── */
.event__list {
  & + * {
    @include mq-pc {
      margin-top: rem(64);
    }
  }
}

/* Item
───────────────────────────────── */
.event__item {
  @include mq-sp {
    width: 55vw;
    &:not(:first-of-type) {
      padding-left: 5vw;
    }
  }
}

.event__link {
  overflow: hidden;
  background: #fff;
  transition: box-shadow $base-duration $easing,
    transform $base-duration $easing;
  @at-root .event__item:not(.swiper-slide-prev) & {
    @include mq-pc {
      box-shadow: rem(8) rem(8) rem(24) rgba(0, 0, 0, 0.05);
    }
    @include mq-sp {
      box-shadow: 2vw 2vw 5vw rgba(0, 0, 0, 0.05);
    }
    @include hover {
      box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
      transform: translateY(1px);
    }
  }
  @include mq-pc {
    display: flex;
    border-radius: rem(16);
  }
  @include mq-sp {
    display: block;
    border-radius: vw(16);
  }
}

.event__thumbnail {
  @include mq-pc {
    width: 50%;
  }
  @include mq-sp {
    height: 34vw;
  }
}

.event__image {
  @include ofi-cover;
}

.event__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @include mq-pc {
    padding: rem(24);
    width: 50%;
  }
  @include mq-sp {
    padding: 5vw 8vw;
  }
}

.event__area {
  display: inline-block;
  border: 1px solid $color-main;
  border-radius: 100px;
  color: $color-main;
  line-height: 1;
  @include font-noto(medium);
  @include mq-pc {
    padding: rem(4) rem(16);
    font-size: rem(13);
  }
  @include mq-sp {
    padding: 1vw 3vw;
    font-size: vw(13);
  }
}

.event__title {
  line-height: 1.5;
  @include font-noto;
  @include mq-pc {
    margin-top: rem(8);
  }
  @include mq-sp {
    margin-top: 2vw;
  }
}

.event__date {
  display: block;
  @include mq-pc {
    margin-top: rem(8);
    font-size: rem(14);
  }
  @include mq-sp {
    margin-top: 1vw;
    font-size: vw(13);
  }
}

.event__more {
  position: relative;
  z-index: 1;
  @include mq-pc {
    margin-left: auto;
    width: fit-content;
    margin-top: rem(-32);
    transform: translateY(-100%);
    padding-right: rem(64);
  }
  @include mq-sp {
    text-align: center;
  }
}
</style>
