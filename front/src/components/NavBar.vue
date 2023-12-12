<template>
  <div class="NavBar-fenetre">

    <div class="Navbar-content">

      <div class="logo">
        <img class="logo-img" src="logo.png" alt="">
      </div>

      <nav>
        <router-link class="" to="/">Accueil</router-link>
        <a href="">A propos</a>
        <a href="">Contact</a>
      </nav>
      
      <div class="profil">
        <div class="no-user">
          <router-link class="bouton-connection" to="/connection">Se connecter</router-link>
        </div>
        <div class="user">
          <router-link  to="/profil"><img class="profil-img" src="profil.png" alt="" ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>



<script scoped>
import { getCurrentInstance } from 'vue'

export default {
    name: "NavBar",
    props: {
        msg: String
    },
    mounted() {
        const user = getCurrentInstance().appContext.config.globalProperties.user;
        console.log("User : " + user); // Affiche 'none' dans la console
        if (user != "") {
            // rendre no-user visible
            document.querySelector(".no-user").style.display = "block";
            document.querySelector(".user").style.display = "none";
        }
        else{
            // rendre user visible
            document.querySelector(".no-user").style.display = "none";
            document.querySelector(".user").style.display = "block";
        }
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
  height: 60px;
  justify-content: space-around;
}

.logo{
  width: 200px;
  margin-left: 20px;
  text-align: center;
}

.logo-img{
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

.profil{
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 20px;
  width: 200px;
  text-align: center;
  transition: 0.3s;
}

.profil-img{
  width: 50px;
  border-radius: 50%;
  transition: 0.3s;
  margin-top: 3px;
}

.profil:hover{
  opacity: 0.8;
}

</style>