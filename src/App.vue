<template>
  <Home />
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
}
body {
  background-color: #1d1d1d;
}
</style>
