
<template>

    <div class="connection-fenetre">
        <div class="wrapper">
            <div class="container">
                <h1>Connection</h1>
                <form class="form">
                    <input type="text" placeholder="Email" id="email" name="email" v-model="email">
                    <input type="password" placeholder="Mot de passe" id="mdp" name="mdp" v-model="mdp">
                    <button type="submit" id="login-button" @click.prevent="submitForm">Se connecter</button>
                </form>
                <router-link class="bouton-inscription" to="/inscription">S'inscrire</router-link>
            </div>
        </div>
    </div>

</template>

<script>
import { login } from '../service/UtilisateurService.ts';
export default {
    name: 'FormulaireConnection',
    props: {
        msg: String
    },
    data() {
        return {
            email: '',
            mdp: '',
        };
    },
    methods: {
        async submitForm() {
            try {
                const email = this.email;
                const mdp = this.mdp;
                const res = await login(email, mdp);
                localStorage.setItem('userId', res.id);        
                localStorage.setItem('token', res.token);
                this.$router.push('/');
            } catch (error) {
                console.error('Login failed:', error);
            }

        },
    },
}



</script>


<style scoped>
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
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 0;
  height: 400px;
  text-align: center;
}
.container h1 {
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


</style>../service/UtilisateurService.js