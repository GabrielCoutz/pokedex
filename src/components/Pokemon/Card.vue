<template>
  <div :style="{ border: `4px solid ${pokemon.color}` }" class="card">
    <Info />
    <Stats />
  </div>
  <Evolutions />
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

<style lang="scss" scoped>
.card {
  max-width: 330px;
  border-radius: 8px;
  padding: 1rem;
}
</style>
