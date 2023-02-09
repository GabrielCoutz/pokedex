<template>
  <Header />
  <main id="main">
    <router-view />
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
@import "./styles/reset.scss";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex: 1;
}
</style>
