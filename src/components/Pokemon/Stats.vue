<template>
  <ul class="stats">
    <li v-for="item in pokemon.stats" :key="item.stat">
      <span>{{ item.stat.name }}</span>
      <span>{{ item.base_stat }}</span>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["pokemon"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.stats {
  border: 1px solid;
  padding: 0.7rem;
  border-radius: $border-radius;

  li {
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    padding: 0.4rem 0;

    & + li {
      border-top: 1px solid black;
    }
  }
}
</style>
