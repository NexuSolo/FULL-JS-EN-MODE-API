<template>
  <div id="app">
    <NavBar />
    <AccueilPresentation />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import AccueilPresentation from './components/AccueilPresentation.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    AccueilPresentation
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #2c3e50;
}
</style>
