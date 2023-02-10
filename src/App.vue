<template>
  <Header />
  <main id="main">
    <router-view :key="$route.fullPath" />
  </main>
  <Footer />
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
@import "@/styles/reset.scss";
@import "@/styles/variables";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex: 1;
  display: grid;
  align-items: center;
  background-color: $bg-color;
}
</style>
