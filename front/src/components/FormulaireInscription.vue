<template>

    <div class="connection-fenetre">
        <div class="wrapper">
            <div class="container-inscription">
                <h1>Inscription</h1>
                <form class="form">
                    <input type="text" placeholder="Nom" id="nom" name="nom" v-model="nom">
                    <input type="text" placeholder="Prénom" id="prenom" name="prenom" v-model="prenom">
                    <input type="text" placeholder="Email" id="email" name="email" v-model="email">
                    <input type="password" placeholder="Mot de passe" id="mdp" name="mdp" v-model="mdp">
                    <button type="submit" id="login-button" @click.prevent="submitForm">S'inscrire</button>
                </form>
                <router-link class="bouton-inscription" to="/connection">Se connecter</router-link>
            </div>
        </div>
    </div>

</template>

<script>
import { register } from '../service/UtilisateurService.ts';
export default {
    name: 'FormulaireConnection',
    props: {
        msg: String
    },
    data() {
        return {
            nom: '',
            prenom: '',
            email: '',
            mdp: '',
        };
    },
    methods: {
        async submitForm() {
            try {
                const nom = this.nom;
                const prenom = this.prenom;
                const email = this.email;
                const mdp = this.mdp;
                const token = await register(nom, prenom, email, mdp);
                localStorage.setItem('token', token);
                this.$router.push('/');
            } catch (error) {
                console.error('Register failed:', error);
            }
        },
    },
}




</script>


<style scoped>

.wrapper {
    background: rgb(69, 69, 207);
    background: linear-gradient(to bottom right, rgb(69, 69, 207) 0%, rgb(121, 121, 233) 100%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    width: 400px;
    height: 400px;
    margin-top: -200px;
    overflow: hidden;
    border-radius: 10px;

}
.wrapper.form-success .container h1 {
  transform: translateY(85px);
}
.container-inscription {
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 0;
  height: 400px;
  text-align: center;
  margin-top: -45px;
}
.container-inscription h1 {
  font-size: 40px;
  transition-duration: 1s;
  transition-timing-function: ease-in-put;
  font-weight: 200;
  color: white;
}
form {
  padding: 20px 0;
  position: relative;
  z-index: 2;
}
form input {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 250px;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: white;
  transition-duration: 0.25s;
  font-weight: 300;
}
form input:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
form input:focus {
  background-color: white;
  width: 300px;
  color: rgb(121, 121, 233);
}
form button {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: rgb(121, 121, 233);
  border-radius: 3px;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
}
form button:hover {
  background-color: #f5f7f9;
}

.bouton-inscription{
    position: absolute;
    right: 10px;
    bottom: 10px;
}


</style>