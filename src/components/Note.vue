/* HTML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<template>
  <section class="note">
    <p class="note__icon">
      <img src="@/assets/image/common/icon_attention.svg" width="24" height="24" />
    </p>
    <p class="note__lead">
      提携割引サービスを受けるには、JR西日本住宅相談室への
      <a
        class="@linkText"
        href="sample"
        target="_blank"
        rel="noopener"
      >事前登録</a>をしていただき、紹介状の取得が必要となります。
    </p>
  </section>
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
.note {
  display: grid;
  background-color: $color-lightYellow;
  @include mq-pc {
    grid-template:
      "icon lead" auto /
      auto 1fr;
    grid-gap: rem(24);
    padding: rem(24) rem(64);
    border-radius: rem(16);
  }
  @include mq-sp {
    grid-template:
      "icon lead" auto /
      auto 1fr;
    grid-gap: 3vw;
    padding: 5vw 8vw;
  }

  & + * {
    @include mq-pc {
      margin-top: rem(104);
    }
  }
}

/* Element
───────────────────────────────── */
.note__icon {
  grid-area: icon;
}

.note__lead {
  grid-area: lead;
  line-height: 1.5;
  align-self: center;
  @include mq-pc {
    font-size: rem(14);
  }
  @include mq-sp {
    font-size: vw(14);
  }
}
</style>
