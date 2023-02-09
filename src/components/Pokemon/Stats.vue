<template>
  <ul>
    <li v-for="item in pokemon.stats" :key="item.stat">
      <div>
        <span>{{ item.stat.name }}</span>
        <span>{{ item.base_stat }}</span>
      </div>
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

<style></style>
