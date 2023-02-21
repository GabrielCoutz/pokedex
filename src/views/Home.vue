<template>
  <section class="container home">
    <SearchInput />
  </section>
</template>

<script>
import SearchInput from "../components/SearchInput.vue";

export default {
  name: "Home",
  components: { SearchInput },
};
</script>

<style lang="scss" scoped>
@import "../styles/globals";

.home {
  width: 100%;
}
</style>
