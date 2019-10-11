/* HTML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<template>
  <header class="header">
    <nav class="header__inner" role="navigation">
      <div class="header__logo">
        <h1 class="header__logoImage">
          <router-link to="/">
            <img
              src="@/assets/image/common/logo.svg"
              alt="JR西日本ウェルネット 住宅相談室"
              width="384"
              height="103"
            />
          </router-link>
        </h1>
        <p class="header__logoText">住まいに関する様々なご相談にのり、JR西日本社員限定の特典をご用意しております。</p>
      </div>
      <div class="header__contents">
        <ul class="header__utility">
          <li class="header__utilityItem">
            <router-link to="sample" class="@linkB">住宅相談室とは？</router-link>
          </li>
          <li class="header__utilityItem">
            <router-link to="sample" class="@linkB">特典ご利用の流れ</router-link>
          </li>
        </ul>
        <ul class="header__navigation">
          <li class="header__navigationItem">
            <router-link to="sample" class="@linkA">イベント情報</router-link>
          </li>
          <li class="header__navigationItem">
            <router-link to="/marker" class="@linkA">提携住宅会社に相談する</router-link>
          </li>
          <li class="header__navigationItem">
            <router-link to="/property" class="@linkA">エリアから物件を探す</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="header__formButton">
      <a href="sample" target="_blank" rel="noopener" class="header__formButtonLink">
        <div class="header__formButtonLinkInner">
          <span class="header__formButtonIcon"></span>
          <span class="header__formButtonText">登録フォーム</span>
        </div>
      </a>
    </div>
  </header>
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
.header {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 99;
  @include mq-pc {
    min-width: $min-basis;
  }
}

/* Element
───────────────────────────────── */
.header__inner {
  @include mq-pc {
    @include contents;
    display: flex;
    justify-content: space-between;
  }
}

.header__logo {
  @include mq-pc {
    margin-top: rem(24);
  }
  @include mq-sp {
    margin: 4vw 0 0 5vw;
  }
}

.header__logoImage {
  @include mq-pc {
    width: rem(193);
  }
  @include mq-sp {
    width: vw(146);
  }

  img {
    width: 100%;
    height: auto;
  }
}

.header__logoText {
  font-size: rem(12);
  margin-top: rem(8);
  @include font-noto(regular);
  @include pc-item;
}

.header__contents {
  margin: rem(40) rem(128) 0 0;
  @include pc-item;
}

.header__utility {
  display: flex;
  justify-content: flex-end;
}

.header__utilityItem {
  margin-left: rem(24);
}

.header__navigation {
  display: flex;
  justify-content: flex-end;
  margin-top: rem(16);
}

.header__navigationItem {
  margin-left: rem(24);
}

.header__formButton {
  position: absolute;
  top: 0;
  right: 0;
  @include pc-item;
}

.header__formButtonLink {
  display: flex;
  width: rem(168);
  height: rem(141);
  justify-content: center;
  align-items: center;
  background: $color-main;
  text-align: center;
  border-radius: 0 0 0 rem(8);
  transition: $base-duration $easing;
  border: 1px solid $color-main;

  &:hover {
    background: $color-darkBlue;
  }
}

.header__formButtonIcon {
  display: inline-block;
  width: rem(32);
  height: rem(32);
  background: url("/assets/image/icon_form_white.svg") no-repeat;
  background-size: 100%;
  transition: $base-duration $easing;
}

.header__formButtonText {
  color: #fff;
  display: block;
  transition: $base-duration $easing;
  @include font-noto(medium);
}
</style>
