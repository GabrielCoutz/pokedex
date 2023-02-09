<template>
  <div v-if="erro">
    {{ erro }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["erro"]),
  },
};
</script>

<style></style>
