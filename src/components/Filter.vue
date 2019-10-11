/* HTML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<template>
  <div class="filter">
    <div class="filter__wrapper">
      <header class="filter__header">
        <img
          class="filter__icon"
          src="@/assets/image/common/icon_filter.svg"
          width="16"
          height="18"
        />
        <span class="filter__title">住宅会社を絞り込み</span>
      </header>
      <ul class="filter__list">
        <li class="filter__item">すべて</li>
        <li class="filter__item">家を建てたい</li>
        <li class="filter__item">家を買いたい</li>
        <li class="filter__item">マンションを買いたい</li>
        <li class="filter__item">土地を売買したい</li>
        <li class="filter__item">リフォームしたい</li>
        <li class="filter__item">資産活用したい</li>
      </ul>
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
.filter {
  @include mq-sp {
    display: none;
  }
}

/* Wrapper
───────────────────────────────── */
.filter__wrapper {
  @include mq-pc {
    grid-area: filter;
    border-radius: rem(14);
    position: sticky;
    left: 0;
    top: rem(40);
    margin-top: rem(-128);
    box-shadow: rem(8) rem(8) rem(24) rgba(0, 0, 0, 0.05);
  }
  background-color: #fff;
  overflow: hidden;
}

/* Header
───────────────────────────────── */
.filter__header {
  height: rem(64);
  background-color: $color-blue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  @include font-noto(medium);
}

.filter__icon {
  & + * {
    @include mq-pc {
      margin-left: rem(12);
    }
  }
}

/* List
───────────────────────────────── */
.filter__list {
  padding: rem(24);
}

/* Category
───────────────────────────────── */
.filter__category {
  @include mq-pc {
    border-radius: rem(12);
    padding: 0 rem(16);
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border: 1px solid $color-border;
    border-radius: inherit;
  }

  & + * {
    @include mq-pc {
      margin-top: rem(16);
    }
  }
}

.filter__trigger {
  display: flex;
  align-items: center;
  @include font-noto(medium);
  @include mq-pc {
    padding: rem(16);
  }

  & + * {
    border-top: 1px dotted $color-border;
  }
}

/* Item
───────────────────────────────── */
.filter__item {
  cursor: pointer;
  display: flex;
  align-items: center;
  line-height: 1.3;
  transition: color $base-duration $easing;
  &:not(:first-of-type) {
    border-top: 1px dotted $color-border;
  }
  @include mq-pc {
    padding: rem(16) rem(16) rem(16) rem(24);
    @at-root .filter__category & {
      padding-left: rem(32);
    }
  }

  @include hover {
    color: $color-main;
  }

  &:before {
    content: "";
    background: url("/assets/image/common/icon_checkbox_checked.svg");
    background-size: cover;
    display: block;
    width: rem(13.461);
    height: rem(13);
    margin-right: rem(12);
  }
}

.filter__label {
  flex: 1;
}

.filter__number {
  @include font-noto(demilight);
  color: rgba($color-text, 0.382);
  @include mq-pc {
    font-size: rem(13);
  }
}
</style>
