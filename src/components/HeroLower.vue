/* HTML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<template>
  <div class="heroLower">
    <picture class="heroLower__picture">
      <source
        media="(min-width: 768px)"
        srcset="@/assets/image/marker/bg_hero.jpg 1x, @/assets/image/marker/bg_hero@2x.jpg 2x"
      />
      <source media="(max-width: 767.9px)" srcset="@/assets/image/marker/bg_hero@sp.jpg" />
      <img class="heroLower__background lazyload" src="@/assets/image/marker/bg_hero.jpg" />
    </picture>
    <div class="heroLower__wrapper">
      <div class="heroLower__inner">
        <div class="heroLower__content">
          <h2 class="heroLower__title">
            <span class="heroLower__titleEnglish">HOUSE MARKER</span>
            <span class="heroLower__titleJapanese">提携住宅会社に相談する</span>
          </h2>
        </div>
        <picture class="heroLower__picture">
          <source
            media="(min-width: 768px)"
            srcset="@/assets/image/marker/hero.jpg 1x, @/assets/image/marker/hero@2x.jpg 2x"
          />
          <source media="(max-width: 767.9px)" srcset="@/assets/image/marker/hero@sp.jpg" />
          <img class="heroLower__image lazyload" src="@/assets/image/marker/hero.jpg" />
        </picture>
      </div>
    </div>
  </div>
</template>


/* Script
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<script>
export default {
  props: {
    msg: String
  }
};
</script>


/* Style
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<style lang="scss">
/* Block
───────────────────────────────── */
.heroLower {
  position: relative;
  @include mq-pc {
    padding-top: rem(168);
  }
  @include mq-sp {
    padding: 21vw 8vw 0;
  }

  & + * {
    @include mq-pc {
      margin-top: rem(64);
    }
    @include mq-sp {
      margin-top: 13vw;
    }
  }
}

/* Element
───────────────────────────────── */
.heroLower__background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  @include ofi-cover;
  @include mq-pc {
    height: rem(445);
  }
  @include mq-sp {
    height: vw(336);
  }
}

.heroLower__wrapper {
  @include contents;
}

.heroLower__inner {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.9);
  overflow: hidden;
  display: flex;
  @include mq-pc {
    box-shadow: rem(16) rem(16) rem(40) rgba(0, 0, 0, 0.05);
    border-radius: rem(16);
  }
  @include mq-sp {
    box-shadow: 5vw 5vw 13vw rgba(0, 0, 0, 0.05);
    flex-direction: column-reverse;
    border-radius: 4vw;
  }
}

.heroLower__content {
  @include mq-pc {
    width: calc(100% - #{rem(791)});
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @include mq-sp {
    padding: 8vw;
  }
}

.heroLower__title {
  line-height: 1;
  text-align: center;
}

.heroLower__titleEnglish {
  @include font-din;
  @include mq-pc {
    font-size: rem(50);
  }
  @include mq-sp {
    font-size: vw(32);
  }
}

.heroLower__titleJapanese {
  display: block;
  color: $color-main;
  @include font-noto(medium);
  @include mq-pc {
    font-size: rem(18);
    margin-top: rem(16);
  }
  @include mq-sp {
    margin-top: 2vw;
  }
}

.heroLower__image {
  @include mq-pc {
    width: rem(791);
  }
}
</style>
