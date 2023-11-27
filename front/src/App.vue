<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterBar />
  </div>

</template>

<script>
import FooterBar from './components/FooterBar.vue';
import NavBar from './components/NavBar.vue'


export default {
    name: 'App',
    components: {
    NavBar,
    FooterBar
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

.bouton-connection{
    display: inline-block;
    padding: 10px 20px;
    background-color: rgb(69, 69, 207);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    margin-top: auto;
    margin-bottom: auto;
}

.bouton-connection:hover{
    background-color: rgb(49, 49, 157);
}


</style>
