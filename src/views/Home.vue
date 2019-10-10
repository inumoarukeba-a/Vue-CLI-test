<template>
  <div class="home">
    <PickUp />
    <Event />
  </div>
</template>

<script>
// @ is an alias to /src
import PickUp from "@/components/PickUp.vue";
import Event from "@/components/Event.vue";

export default {
  name: "home",
  components: {
    PickUp,
    Event
  }
};
</script>
