<template>
  <div id="app">
    <NavBar />
    <router-view :key="$route.fullPath" />
    <FooterBar v-if="$route.path !== '/connection' && $route.path !== '/create-trajet' && $route.path !== '/inscription'" />
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
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 200;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wlxdr.ttf) format('truetype');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdr.ttf) format('truetype');
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: 300;
}
body {
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  font-weight: 300;
}
body ::-webkit-input-placeholder {
  /* WebKit browsers */
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  font-weight: 300;
}
body :-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  opacity: 1;
  font-weight: 300;
}
body ::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  opacity: 1;
  font-weight: 300;
}
body :-ms-input-placeholder {
  /* Internet Explorer 10+ */
  font-family: "Source Sans Pro", sans-serif;
  color: white;
  font-weight: 300;
}


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
