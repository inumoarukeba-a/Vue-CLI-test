/* HTML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<template>
  <main class="main" role="main">
    <PickUp />
    <article class="article">
      <Event />
      <About />
      <PropertyAndMarker />
    </article>
  </main>
</template>


/* Script
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<script>
import PickUp from "@/components/PickUp.vue";
import Event from "@/components/Event.vue";
import About from "@/components/About.vue";
import PropertyAndMarker from "@/components/PropertyAndMarker.vue";

export default {
  name: "home",
  components: {
    PickUp,
    Event,
    About,
    PropertyAndMarker
  }
};
</script>


/* Style
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<style lang="scss">
</style>
