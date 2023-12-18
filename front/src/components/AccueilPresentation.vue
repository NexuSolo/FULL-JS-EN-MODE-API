<template>

    <div class="accueil-fenetre">
        <div class="accueil-content">

            <div class="accueil-texte">
                <div class="line"></div>
                <h1>Vroum Vroum</h1>
                <h3>Le site de covoiturage pour les étudiants de l'EFREI</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a class="decouvrir-button" href="/create-trajet">Créer un trajet</a>
            </div>


            <div class="accueil-voiture">
                <div class="blue-box"></div>
                <img class="img-car" src="car.png" alt="car">
            </div>

        </div>

        
        <div class="vos-trajets">
            <h1>MES VOYAGES</h1>
            <div class="liste-trajets">
                <div class="titre-trajets">
                    <h3>Date</h3>
                    <h3>Départ</h3>
                    <h3>Arrivée</h3>
                    <h3>Places</h3>
                    <h3>Prix</h3>
                </div>
                <div v-for="(trajet, index) in trajets" :key="index">
                    <router-link class="plus" :to="`/trajet/${trajet.id}`">
                        <div class="trajet">
                            <div class="date">{{ formatDate(trajet.datedepart) }}</div>
                            <div class="depart">{{ trajet.localisationdepart }}</div>
                            <div class="arrivee">{{ trajet.localisationarrive }}</div>
                            <div class="distance">{{ trajet.nombredeplace }}</div>
                            <div class="prix">{{ trajet.prix }}€</div>
                        </div>
                    </router-link>
                </div>
            </div> 
        </div>
        

        <form class="search-bar"  action="POST">
            <div class="search-depart">
                <input type="text" name="" id="" placeholder="Départ">
            </div>
            <div class="search-fleche">
                <img src="fleche.png" alt="" width="30px">
            </div>
            <div class="search-arrivee">
                <input type="text" name="" id="" placeholder="Destination">
            </div>
            <div class="search-date">
                <input type="date" name="" id="">
            </div>
            <div class="search-prix">
                <input type="number" name="" id="" placeholder="Prix">
            </div>
            <div class="search-button">
                <a href="/" type="submit"><img src="search.png" alt="" width="30px"></a>
            </div>
        </form> 


        <div class="liste-trajets">
            <div class="titre-trajets">
                <h3>Date</h3>
                <h3>Départ</h3>
                <h3>Arrivée</h3>
                <h3>Places</h3>
                <h3>Prix</h3>
            </div>
            <div v-for="(trajet, index) in trajets" :key="index">
                <router-link class="plus" :to="`/trajet/${trajet.id}`">
                    <div class="trajet">
                        <div class="date">{{ formatDate(trajet.datedepart) }}</div>
                        <div class="depart">{{ trajet.localisationdepart }}</div>
                        <div class="arrivee">{{ trajet.localisationarrive }}</div>
                        <div class="distance">{{ trajet.nombredeplace }}</div>
                        <div class="prix">{{ trajet.prix }}€</div>
                    </div>
                </router-link>
            </div>
        </div> 
    </div>

</template>

<script>
import { getCovoiturage } from '../service/CovoiturageService.ts';
export default {
    name: 'AccueilPresentation',
    props: {
        msg: String
    },
    
    data() {
        return {
            trajets: []
        }
    },
    async mounted() {
        this.trajets = await getCovoiturage();
    },
    methods: {
        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
    }

}

</script>

<style scoped>


.vos-trajets{
    width: 1000px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
}

.vos-trajets h1{
    font-weight: bold;
    color: white;
    background-color: rgb(102, 102, 204);
    padding: 10px;
    border-radius: 5px;
    text-align: center;
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
.trajet{
    width: 90%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: rgb(235, 235, 235) ;
    border-radius: 10px;
}

.trajet div{
    width: 20%;
    text-align: center;
    font-size: 20px;

}

.titre-trajets{
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 20px;
}

.titre-trajets h3{
    font-weight: bold;
}

.liste-trajets{
    width: 1000px;
    margin: auto;
}

.search-bar{
    display: flex;
    justify-content: space-around;
    width: 1200px;
    margin: auto;
    margin-top: 100px;
    background-color: rgb(211, 211, 211);
    border-radius: 5px;
    padding: 10px;
}

.search-bar input{
    width: 200px;
    height: 50px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    margin-right: 20px;
    margin-top : auto;
    margin-bottom: auto;
}

.search-fleche{
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 20px;
}

.search-button{
    margin: auto;
}

.accueil-fenetre{
    margin: 0;
    padding: 0;
    width: 100%;
}

.accueil-content{
    display: flex;
    justify-content: space-around;
    width: 1200px;
    margin: auto;
}

.accueil-texte{
    margin: auto;
    width: 600px;
    text-decoration: none;
}

.line{
    width: 25%;
    height: 2px;
    background-color: rgb(102, 102, 204);
    margin-bottom: 20px;
}

.accueil-texte h1{
    font-size: 80px;
    margin: 0;
    padding: 0;
}

.accueil-texte h2{
    font-size: 40px;
    margin: 0;
    padding: 0;
}

.accueil-voiture{
    margin: auto;
    width: 600px;
    height: 600px;
    text-decoration: none;
    position: relative;
}

.blue-box{
    width: 400px;
    height: 600px;
    background-color: rgb(102, 102, 204);
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}

.img-car{
    width: 700px;
    z-index: 2;
    position: absolute;

}

.bouton-connection{
    display: inline-block;
    padding: 10px 20px;
    background-color: rgb(102, 102, 204);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    margin-top: auto;
    margin-bottom: auto;
}

.bouton-connection:hover{
    background-color: rgb(152, 152, 235);
}

.decouvrir-button{
    display: inline-block;
    padding: 10px 20px;
    background-color: rgb(102, 102, 204);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    margin-bottom: auto;
    transition: 0.2s;
}

.decouvrir-button:hover{
    background-color: rgb(152, 152, 235);
}

</style>