<template>

    <div class="profil-fenetre">
        <div class="profil-presentation">
            <img class="profil-pic" src="profil.png" alt="" >
            <h2 class="name">{{ name }}</h2>
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
                <router-link class="plus" to="/trajet">
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
export default {
    name: "ProfilPage",
    props: {
        msg: String
    },
    data() {
        return {
            name: 'Yanis',
            note: 3,
            trajets: [
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€"
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€"
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€"
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€"
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€"
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€"
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€"
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€"
                },
                {
                    date: "01/01/2021",
                    depart: "Paris",
                    arrivee: "Marseille",
                    distance: "800km",
                    duree: "8h",
                    prix: "50€"
                }
            ],
        };
    },
}
</script>

<style>

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