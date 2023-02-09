<template>
  <div if="erro">
    {{ erro }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["loading"]),
  },
};
</script>

<style></style>
