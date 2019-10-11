/* HTML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<template>
  <div class="propertyAndMarker">
    <div class="propertyAndMarker__item -findProperty">
      <div class="propertyAndMarker__image">
        <img src="@/assets/image/home/img_map.svg" alt />
      </div>
      <div class="propertyAndMarker__title">
        <h2 class="@titleA -vertical">
          <span class="@titleA__english">FIND PROPERTY</span>
          <span class="@titleA__japanese">エリアから物件を探す</span>
        </h2>
      </div>
      <p class="propertyAndMarker__txt">
        JR西日本住宅相談室で提携している各種住宅会社より、
        <br class="pc-item" />さまざまなエリアの住宅物件情報をご案内します。
      </p>
      <div class="propertyAndMarker__button">
        <a href="sample" class="@button">
          <span class="@button__inner">内容を詳しく見る</span>
        </a>
      </div>
    </div>
    <div class="propertyAndMarker__item -houseMaker">
      <div class="propertyAndMarker__image">
        <img src="@/assets/image/home/img_house.svg" alt />
      </div>
      <div class="propertyAndMarker__title">
        <h2 class="@titleA -vertical">
          <span class="@titleA__english">HOUSE MARKER</span>
          <span class="@titleA__japanese">提携住宅会社に相談する</span>
        </h2>
      </div>
      <p class="propertyAndMarker__txt">
        20社の住宅会社の中からお客さまにピッタリの物件を
        <br class="pc-item" />お探しいただけます。
      </p>
      <div class="propertyAndMarker__button">
        <a href="sample" class="@button">
          <span class="@button__inner">内容を詳しく見る</span>
        </a>
      </div>
    </div>
  </div>
</template>


/* Script
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<script>
</script>


/* Style
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<style lang="scss">
/* Block
───────────────────────────────── */
.propertyAndMarker {
  @include mq-pc {
    display: flex;
    margin-left: rem(-64);
    margin-right: rem(-64);
    padding-left: rem(64);
    padding-right: rem(64);
    padding-top: rem(208);
    overflow: hidden;
  }
  @include mq-sp {
    padding: 0 8vw;
  }
}

.propertyAndMarker__item {
  position: relative;
  @include mq-pc {
    width: 50%;

    &:nth-child(1) {
      border-right: 1px solid $color-border;
    }

    &:nth-child(2) {
      padding-left: rem(64);
    }
  }
  @include mq-sp {
    &:nth-child(2) {
      margin-top: 13vw;
      border-top: 1px solid $color-border;
    }
  }
}

.propertyAndMarker__image {
  position: relative;
  @include mq-pc {
    height: rem(290);
  }
  @include mq-sp {
    .-findProperty & {
      height: vw(265);
    }

    .-houseMaker & {
      height: vw(320);
    }
  }

  img {
    position: absolute;
    z-index: -1;
    max-width: none;

    .-findProperty & {
      @include mq-pc {
        bottom: rem(-15);
        left: rem(-125);
        width: rem(1070);
      }
      @include mq-sp {
        bottom: -8vw;
        left: vw(-75);
        width: vw(700);
      }
    }

    .-houseMaker & {
      @include mq-pc {
        bottom: rem(-10);
        left: rem(-65);
        width: rem(980);
      }
      @include mq-sp {
        bottom: vw(20);
        left: vw(-83);
        width: vw(700);
      }
    }
  }
}

.propertyAndMarker__title {
  position: relative;
  z-index: 1;
}

.propertyAndMarker__txt {
  @include font-noto(light);
  @include mq-pc {
    margin-top: rem(40);
  }
  @include mq-sp {
    margin-top: 5vw;
  }
}

.propertyAndMarker__button {
  @include mq-pc {
    margin-top: rem(40);
  }
  @include mq-sp {
    margin-top: 8vw;
  }
}
</style>
