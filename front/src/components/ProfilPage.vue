<template>

    <div class="profil-fenetre">
        <div class="profil-presentation">
            <div class="settings">
                <a href="/profil_settings"><img class="img-settings" src="settings.png" alt=""></a>
            </div>
            <img class="profil-pic" src="profil.png" alt="" >
            <div class="profil-name">
                <h2 class="name">{{ name }}</h2>

                <!-- <div v-if="name==user_name"> -->
                <div>
                    <a class="logout" href="/" @click.prevent="disconnect"><img class="img-logout" src="deco.png" alt=""></a>
                </div>
            </div>
            <div class="note">
                <img v-if="note === 1" class="star" src="stars/1.png" alt="">
                <img v-else-if="note === 2" class="star" src="stars/2.png" alt="">
                <img v-else-if="note === 3" class="star" src="stars/3.png" alt="">
                <img v-else-if="note === 4" class="star" src="stars/4.png" alt="">
                <img v-else-if="note === 5" class="star" src="stars/5.png" alt="">
            </div>
        </div>

        <div class="historique-trajets">
            <h2>Historique de trajets</h2>
            <div v-for="(trajet, index) in trajets" :key="index">
                <router-link class="plus" :to="`/trajet/${trajet.id}`">
                    <div class="trajet">
                        <div class="date">{{ trajet.date }}</div>
                        <div class="depart">{{ trajet.depart }}</div>
                        <div class="arrivee">{{ trajet.arrivee }}</div>
                        <div class="distance">{{ trajet.distance }}</div>
                        <div class="prix">{{ trajet.prix }}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>

</template>
  
<script>
import { getUser } from '../service/UtilisateurService.ts';
export default {
    name: "ProfilPage",
    props: {
        msg: String
    },
    async created() {
        await this.getUser();
    },

    data() {
        return {
            user_name: '',
            name: '',
            note: 5,
            trajets: [
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€",
                    id: 1
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€",
                    id: 1
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€",
                    id: 1
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€",
                    id: 1
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€",
                    id: 1
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€",
                    id: 1
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€",
                    id: 1
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€",
                    id: 1
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€",
                    id: 1
                }
            ],
        };
    },
    methods: {
        disconnect() {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            console.log("Déconnecté");
            this.$router.push('/');
        },

        async getUser() {
            const data = await getUser(localStorage.getItem('userId'));
            this.name = data.prenom + ' ' + data.nom;
        }
    },
}




</script>

<style scoped>



.profil-pic:hover{
    settings{
        display: block;
    }
}

.settings{
    position: absolute;
    top: 100px;
    left: 57%;
    transform: translate(-50%);
}

.img-settings{
    width: 20px;
    height: 20px;
    opacity: 0.5;
}

.img-settings:hover{
    opacity: 0.8;
}

.img-logout:hover{
    opacity: 0.5;
}

.profil-name{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

}

.logout{
    margin-left: 20px;
    height: 40px;
}

.logout img{
    width: 35px;
    height: 35px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin: auto;

}

.profil-presentation{
    margin: auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.star{
    width: 200px;
}

.name{
    text-align: center;
    font-size: 40px;

}
  
.historique-trajets{
    width: 1000px;
    margin: auto;
    padding: 30px;
}

.historique-trajets h2{
    padding: 20px;
    font-size: 30px;
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

.trajet .date, .trajet .depart, .trajet .arrivee, .trajet .distance, .trajet .duree, .trajet .prix{
    width: 100%;
    text-align: center;
    font-size: 20px;
}

.trajet .date, .trajet .depart, .trajet .arrivee, .trajet .distance, .trajet .duree{
    border-right: 1px solid rgb(92, 92, 92);
}



  
</style>