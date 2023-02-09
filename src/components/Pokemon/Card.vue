<template>
  <div :style="{ border: `4px solid ${pokemon.color}` }">
    <Info />
    <Evolutions />
  </div>
  <Stats />
</template>

<script>
import { mapState } from "vuex";
import Info from "./Info.vue";
import Evolutions from "./Evolutions.vue";
import Stats from "./Stats.vue";

export default {
  components: { Info, Evolutions, Stats },
  computed: {
    ...mapState(["pokemon"]),
  },
};
</script>

<style></style>
