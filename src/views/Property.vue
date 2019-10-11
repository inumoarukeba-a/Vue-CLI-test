/* HTML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<template>
  <main class="main" role="main">
    <HeroLower />
    <article class="article">
      <Note />
      <div class="contents">
        <div class="marker">
          <FilterMarker />
          <Content />
        </div>
      </div>
    </article>
  </main>
</template>


/* Script
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<script>
import HeroLower from "@/components/HeroLower.vue";
import Note from "@/components/Note.vue";
import FilterMarker from "@/components/Filter.vue";
import Content from "@/components/Marker.vue";

export default {
  components: {
    HeroLower,
    Note,
    FilterMarker,
    Content
  }
};
</script>


/* Style
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<style lang="scss">
/* Block
───────────────────────────────── */
.marker {
  @include mq-pc {
    display: grid;
    grid-template:
      "filter content" auto /
      385fr 735fr;
    grid-gap: rem(64);
  }
}
</style>
