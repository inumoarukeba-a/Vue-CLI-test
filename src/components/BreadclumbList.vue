/* HTML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<template>
  <ol class="topicpath">
    <li
      class="topicpath__item"
      itemprop="itemListElement"
      itemscope
      itemtype="http://schema.org/ListItem"
      v-for="breadcrumb in breadcrumbs.data"
      :key="breadcrumb.name"
    >
      <router-link
        v-if="breadcrumb.path"
        class="topicpath__link"
        itemprop="item"
        :to="breadcrumb.path"
      >
        <span itemprop="name">{{ breadcrumb.name }}</span>
      </router-link>
      <span v-else itemprop="name">{{ breadcrumb.name }}</span>
    </li>
  </ol>
</template>


/* Script
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<script>
export default {
  props: {
    breadcrumbs: Object
  }
};
</script>


/* Style
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<style lang="scss">
/* Block
───────────────────────────────── */
.topicpath {
  display: flex;
  flex-wrap: wrap;
  @include mq-pc {
    margin-bottom: rem(32);
    @include contents;
  }
  @include mq-sp {
    padding: 0 8vw;
  }

  & + * {
    @include mq-sp {
      margin-top: 5vw;
    }
  }
}

/* Item
───────────────────────────────── */
.topicpath__item {
  list-style: none;
  @include mq-pc {
    margin-right: rem(16);
    padding-right: rem(24);
    background: url("/housing/asset/image/icon_arrow_gray_right.svg") right
      center no-repeat;
    background-size: rem(8.21);
  }
  @include mq-sp {
    margin-right: 3vw;
    padding-right: 5vw;
    background: url("/housing/asset/image/icon_arrow_gray_right.svg") right
      center no-repeat;
    background-size: vw(8.21);
  }

  &:last-child {
    margin: 0;
    padding: 0;
    background: none;
  }
}

.topicpath__link {
  display: flex;
  align-items: center;
  transition: color $base-duration $easing;
  @include mq-pc {
    font-size: rem(13);
  }
  @include mq-sp {
    font-size: 3vw;
  }

  @include hover {
    color: $color-main;
  }

  .topicpath__item:first-child & {
    &:before {
      content: "";
      display: block;
      background: url("/housing/asset/image/icon_home.svg") no-repeat;
      background-size: 100%;
      color: transparent;
      @include mq-pc {
        width: rem(15);
        height: rem(12.33);
        margin-right: rem(8);
      }
      @include mq-sp {
        width: vw(15);
        height: vw(12.33);
        margin-right: 2vw;
      }
    }
  }
}
</style>
