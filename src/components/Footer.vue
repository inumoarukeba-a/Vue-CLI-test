/* HTML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<template>
  <footer class="footer" role="contentinfo">
    <picture class="footer__picture">
      <source
        media="(min-width: 768px)"
        srcset="@/assets/image/common/foot_img.jpg 1x, @/assets/image/common/foot_img@2x.jpg 2x"
      />
      <source media="(max-width: 767.9px)" srcset="@/assets/image/common/foot_img.jpg" />
      <img
        class="footer__image lazyload"
        src="@/assets/image/common/foot_img.jpg"
        width="1440"
        height="832"
      />
    </picture>
    <div class="footer__inner">
      <div class="footer__form">
        <h2 class="footer__formTitle">登録フォーム</h2>
        <div class="footer__formButton">
          <a href="sample" class="@button">
            <span class="@button__inner">お得な特典を受ける</span>
          </a>
        </div>
      </div>
      <div class="footer__contents">
        <div class="footer__contact">
          <div class="footer__contactInner">
            <h3 class="footer__contactTitle">お問い合わせ・ご相談</h3>
            <div class="footer__contactData">
              <h4 class="footer__contactDataTitle">TEL</h4>
              <a href="sample" class="footer__contactDataTextLink -number">06-6105-1067</a>
            </div>
            <div class="footer__contactData">
              <h4 class="footer__contactDataTitle">MAIL</h4>
              <a href="sample" class="footer__contactDataTextLink">メールを送る</a>
            </div>
          </div>
        </div>
        <div class="footer__link">
          <ul class="footer__linkNavigation">
            <li class="footer__linkNavigationItem">
              <a href="sample" class="@linkA -white">イベント情報</a>
            </li>
            <li class="footer__linkNavigationItem">
              <a href="sample" class="@linkA -white">提携住宅会社に相談する</a>
            </li>
            <li class="footer__linkNavigationItem">
              <a href="sample" class="@linkA -white">エリアから物件を探す</a>
            </li>
          </ul>
          <ul class="footer__linkUtility">
            <li class="footer__linkUtilityItem">
              <a href="sample" class="@linkB -white">住宅相談室とは？</a>
            </li>
            <li class="footer__linkUtilityItem">
              <a href="sample" class="@linkB -white">特典ご利用の流れ</a>
            </li>
          </ul>
          <ul class="footer__utility sp-item">
            <li class="footer__utilityItem">
              <a href="sample" class="footer__utilityItemLink -blank">コーポレートサイト</a>
            </li>
            <li class="footer__utilityItem">
              <a href="sample" class="footer__utilityItemLink -blank">プライバシーポリシー</a>
            </li>
            <li class="footer__utilityItem">
              <a href="sample" class="footer__utilityItemLink -blank">企業情報</a>
            </li>
          </ul>
        </div>
        <div class="footer__concept">
          <h3 class="footer__conceptTitle">ジェイアール西日本ウェルネット</h3>
          <p
            class="footer__conceptText"
          >ジェイアール西日本ウェルネットでは、JR西日本グループで働く社員のみなさまへの“福利厚生” の観点のもと、健康で快適な生活を送るための『住まい作り』をお手伝いさせていただきたいと当サービスを行っております。住まいの「購入・売却・リフォーム」など、何から始めていいのか分からない！というお気持ちをぜひお気軽にご相談ください。</p>
        </div>
      </div>
      <div class="footer__bottom">
        <ul class="footer__utility pc-item">
          <li class="footer__utilityItem">
            <a href="sample" class="footer__utilityItemLink -blank">コーポレートサイト</a>
          </li>
          <li class="footer__utilityItem">
            <a href="sample" class="footer__utilityItemLink -blank">プライバシーポリシー</a>
          </li>
          <li class="footer__utilityItem">
            <a href="sample" class="footer__utilityItemLink -blank">企業情報</a>
          </li>
        </ul>
        <p class="footer__copyright">
          <small>© West Japan Railway Welnet Company.</small>
        </p>
      </div>
    </div>
  </footer>
</template>


/* Script
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<script>
import BreadclumbList from "@/components/BreadclumbList.vue";
export default {
  components: {
    BreadclumbList
  }
};
</script>


/* Style
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<style scoped lang="scss">
/* Block
───────────────────────────────── */
.footer {
  position: relative;
  background: $color-main;
  color: #fff;
  @include mq-sp {
    padding: 34vw 0 13vw;
  }
}

/* Element
───────────────────────────────── */
.footer__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @include mq-pc {
    @include ofi-cover;
  }
}

.footer__inner {
  position: relative;
  z-index: 1;
  @include mq-pc {
    padding: rem(104) 0 rem(64);
    @include contents;
  }
}

.footer__form {
  margin: 0 auto;
  background: #fff;
  text-align: center;
  @include mq-pc {
    padding: rem(64) rem(168);
    border-radius: rem(16);
    width: fit-content;
    box-shadow: rem(16) rem(16) rem(40) rgba(0, 0, 0, 0.05);
  }
  @include mq-sp {
    padding: 13vw 0 13vw;
    width: vw(315);
    border-radius: 4vw;
    margin: 0 auto;
    box-shadow: 5vw 5vw 13vw rgba(0, 0, 0, 0.05);
  }
}

.footer__formTitle {
  display: inline-block;
  color: $color-main;
  @include font-noto(medium);
  background: url("/housing/asset/image/icon_form_blue.svg") left center
    no-repeat;
  @include mq-pc {
    padding-left: rem(40);
    background-size: rem(32);
    font-size: rem(26);
  }
  @include mq-sp {
    padding-left: 13vw;
    background-size: 8vw;
    font-size: 5vw;
  }
}

.footer__formButton {
  @include mq-pc {
    margin-top: rem(24);
  }
  @include mq-sp {
    margin-top: 4vw;
  }
}

.footer__contents {
  @include mq-pc {
    display: flex;
    margin-top: rem(104);
    padding-bottom: rem(64);
    border-bottom: 1px solid rgba(255, 255, 255, 0.38);
  }
  @include mq-sp {
    margin-top: 13vw;
  }
}

.footer__contact {
  @include mq-pc {
    padding-right: rem(64);
    width: 30%;
    border-right: 1px solid rgba(255, 255, 255, 0.38);
  }
}

.footer__contactInner {
  background: rgba(0, 69, 128, 0.62);
  text-align: center;
  @include mq-pc {
    padding: rem(40) rem(40) rem(40) rem(64);
    border-radius: rem(16);
  }
  @include mq-sp {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 8vw 0;
  }
}

.footer__contactTitle {
  @include font-noto(medium);
  @include mq-sp {
    width: 100%;
  }
}

.footer__contactData {
  @include mq-pc {
    margin-top: rem(16);
    display: flex;
    align-items: center;
  }
  @include mq-sp {
    padding: 2vw 8vw 0;
    margin-top: 3vw;
    &:nth-of-type(1) {
      border-right: 1px solid rgba(255, 255, 255, 0.38);
    }
  }
  @at-root .footer__contactTitle + & {
    @include mq-pc {
      margin-top: rem(33);
    }
  }
}

.footer__contactDataTitle {
  background: #fff;
  color: $color-main;
  line-height: 1;
  @include font-din;
  @include mq-pc {
    margin-right: rem(13);
    padding: rem(4);
    width: rem(64);
    border-radius: rem(2);
  }
  @include mq-sp {
    font-size: 4vw;
    padding: 1vw;
    width: vw(114);
    border-radius: 1vw;
  }
}

.footer__contactDataTextLink {
  color: #fff;
  line-height: 1;
  @include font-noto(medium);
  @include mq-pc {
    font-size: rem(16);
  }
  @include mq-sp {
    font-size: 4vw;
    margin-top: 4vw;
    display: block;
  }

  &.-number {
    @include font-din;
    @include tel-linktext;
    @include mq-pc {
      font-size: rem(24);
    }
    @include mq-sp {
      font-size: vw(24);
    }
  }
}

.footer__link {
  @include mq-pc {
    display: flex;
    justify-content: space-between;
    padding: rem(26) rem(64.5);
    width: 42%;
    border-right: 1px solid rgba(255, 255, 255, 0.38);
  }
  @include mq-sp {
    padding: 5vw 8vw 13vw;
  }
}

.footer__linkNavigation {
  @include mq-pc {
    margin-top: rem(5);
  }
}

.footer__linkNavigationItem {
  @include mq-sp {
    border-bottom: 1px solid rgba(255, 255, 255, 0.38);
    padding: 5vw 3vw;
  }
  &:not(:first-child) {
    @include mq-pc {
      margin-top: rem(26);
    }
  }
}

.footer__linkUtilityItem {
  @include mq-sp {
    border-bottom: 1px solid rgba(255, 255, 255, 0.38);
    padding: 5vw 3vw;
  }
  &:not(:first-child) {
    @include mq-pc {
      margin-top: rem(24);
    }
  }
}

.footer__concept {
  @include mq-pc {
    padding: rem(4) 0 rem(4) rem(64.5);
    width: 28%;
  }
  @include mq-sp {
    padding: 13vw 8vw;
    border-top: 1px solid rgba(255, 255, 255, 0.38);
    border-bottom: 1px solid rgba(255, 255, 255, 0.38);
  }
}

.footer__conceptTitle {
  @include font-noto(medium);
}

.footer__conceptText {
  @include mq-pc {
    margin-top: rem(4);
    font-size: rem(12);
  }
  @include mq-sp {
    margin-top: 4vw;
    font-size: 3vw;
  }
}

.footer__bottom {
  @include mq-pc {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: rem(40);
  }
}

.footer__utility {
  display: flex;
  flex-wrap: wrap;
  @include mq-sp {
    margin-top: 5vw;
    padding: 0 3vw;
  }
}

.footer__utilityItem {
  @include mq-pc {
    margin-right: rem(16);
  }
  @include mq-sp {
    margin-right: 3vw;
  }
}

.footer__utilityItemLink {
  display: inline-block;
  color: #fff;
  @include mq-pc {
    font-size: rem(12);

    &:hover {
      opacity: 0.75;
    }
  }
  @include mq-sp {
    font-size: 3vw;
  }

  &.-blank {
    background: url("/asset/image/common/icon_blank.svg") right center no-repeat;
    @include mq-pc {
      background-size: rem(10);
      padding-right: rem(16);
    }
    @include mq-sp {
      background-size: 3vw;
      padding-right: 4vw;
    }
  }
}

.footer__copyright {
  @include font-din;
  @include mq-pc {
    font-size: rem(12);
  }
  @include mq-sp {
    text-align: center;
    font-size: 3vw;
    margin-top: 8vw;
  }
}
</style>
