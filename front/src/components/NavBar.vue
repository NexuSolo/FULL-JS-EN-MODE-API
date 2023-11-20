<template>
  <div class="NavBar-fenetre">

    <div class="Navbar-content">

      <img class="logo" src="logo.png" alt="">

      <nav>
        <a href="">Accueil</a>
        <a href="">A propos</a>
        <a href="">Contact</a>
      </nav>

      <router-link class="bouton-connection" to="/connection">Se connecter</router-link>

    </div>


  </div>
</template>



<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<style>

.NavBar-fenetre{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 60px;
  border-bottom: rgb(216, 216, 216) solid 1px;
}

.Navbar-content{
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-around;
}

.logo{
  width : 50px;
  opacity: 0.5;
}

nav{
  margin: auto;
  display: flex;
  width: 600px;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  text-decoration: none;
}

nav a{
  transition: 0.3s;
}

nav a:hover{
  color: rgb(69, 69, 207);
}


</style>