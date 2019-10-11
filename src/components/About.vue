/* HTML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<template>
  <div class="about">
    <div class="about__imageWrap">
      <picture class="about__picture">
        <source
          media="(min-width: 768px)"
          srcset="@/assets/image/home/img_about.jpg 1x, @/assets/image/home/img_about@2x.jpg 2x"
        />
        <source media="(max-width: 767.9px)" srcset="@/assets/image/home/img_about@sp.jpg" />
        <img
          class="about__image lazyload"
          src="@/assets/image/home/img_about.jpg"
          alt="住宅相談室とは？"
          width="1280"
          height="534"
        />
      </picture>
    </div>
    <div class="about__content">
      <div class="about__header">
        <h2 class="@titleA -vertical -white -spSizeL">
          <span class="@titleA__english">ABOUT</span>
          <span class="@titleA__japanese">住宅相談室とは？</span>
        </h2>
      </div>
      <p class="about__lead">
        JR西日本社員
        <span class="@highlight">
          限定
          <span>の</span>割引特典
        </span>と、
        <br />
        <span class="@highlight">
          住まいに
          <span>関する様々な</span>ご相談
        </span>を、
        <br />ご提供するサービスです。
      </p>
      <div class="about__benefits">
        <div class="about__item">
          <h3 class="about__itemTitle">注文住宅</h3>
          <dl class="about__definitionList">
            <dt class="about__term">建物本体価格より</dt>
            <dd class="about__description">
              <strong>3%</strong>割引
            </dd>
          </dl>
        </div>
        <div class="about__item">
          <h3 class="about__itemTitle">新築分譲住宅</h3>
          <dl class="about__definitionList">
            <dt class="about__term">販売価格より</dt>
            <dd class="about__description">
              <strong>0.5-1%</strong>割引
            </dd>
          </dl>
        </div>
        <div class="about__item">
          <h3 class="about__itemTitle">リフォーム</h3>
          <dl class="about__definitionList">
            <dt class="about__term">見積価格より</dt>
            <dd class="about__description">
              <strong>3%</strong>割引
            </dd>
          </dl>
        </div>
        <div class="about__item">
          <h3 class="about__itemTitle">売却・購入</h3>
          <dl class="about__definitionList">
            <dt class="about__term">仲介手数料より</dt>
            <dd class="about__description">
              <strong>20%</strong>割引
            </dd>
          </dl>
        </div>
      </div>
      <div class="about__button">
        <a href="sample" class="@button -white">
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
.about {
  position: relative;
  text-align: center;
}

/* Image
───────────────────────────────── */
.about__imageWrap {
  @include mq-pc {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  @include mq-sp {
    position: relative;
    z-index: 1;
    width: vw(315);
    margin: 0 auto;
    box-shadow: 5vw 5vw 13vw rgba(0, 0, 0, 0.05);
  }
}

.about__image {
  @include mq-pc {
    border-radius: rem(16);
  }
  @include mq-sp {
    border-radius: vw(16);
  }
}

/* Content
───────────────────────────────── */
.about__content {
  position: relative;
  background: rgba(0, 101, 188, 0.95);
  @include mq-pc {
    margin-left: auto;
    margin-right: rem(64);
    padding: rem(64) rem(40);
    border-radius: rem(16);
    box-shadow: rem(16) rem(16) rem(40) rgba(0, 0, 0, 0.05);
    width: fit-content;
  }
  @include mq-sp {
    margin-top: -34vw;
    padding: 47vw 8vw 13vw;
  }
}

.about__lead {
  color: #fff;
  line-height: 1.5;
  @include mq-pc {
    margin-top: rem(40);
    font-size: rem(23);
  }
  @include mq-sp {
    margin-top: 8vw;
    white-space: nowrap;
    font-size: vw(18);
  }
}

.about__benefits {
  overflow: hidden;
  @include mq-pc {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    margin-top: rem(40);
    border-radius: rem(8);
  }
  @include mq-sp {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    margin-top: vw(24);
    border-radius: vw(16);
  }
}

.about__item {
  @include mq-pc {
    border-right: 1px solid $color-main;
    &:last-child {
      border-right: 0;
    }
  }
  @include mq-sp {
    &:nth-of-type(odd) {
      border-right: 1px solid $color-main;
    }
  }
}

.about__itemTitle {
  background: $color-darkBlue;
  color: #fff;
  @include font-noto(bold);
  @include mq-pc {
    padding: rem(8);
  }
  @include mq-sp {
    padding: 2vw;
  }
}

.about__definitionList {
  background: #fff;
  flex: 1;
  @include mq-pc {
    padding: rem(16) rem(8);
  }
  @include mq-sp {
    padding: 3vw 0 5vw;
  }
}

.about__term {
  line-height: 1.3;
}

.about__description {
  color: $color-main;
  line-height: 1;
  @include font-noto(bold);
  @include mq-pc {
    margin-top: rem(8);
    font-size: rem(17);
  }
  @include mq-sp {
    margin-top: vw(1);
    font-size: vw(17);
  }

  strong {
    @include font-din;
    @include mq-pc {
      margin-right: rem(3);
      font-size: rem(34);
    }
    @include mq-sp {
      margin-right: 1vw;
      font-size: vw(34);
    }
  }
}

.about__button {
  @include mq-pc {
    margin-top: rem(40);
  }
  @include mq-sp {
    margin-top: 8vw;
  }
}
</style>
