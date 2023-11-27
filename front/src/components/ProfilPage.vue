<template>

    <div class="profil-fenetre">
        <div class="profil-presentation">
            <img class="profil-pic" src="profil.png" alt="" >
            <h2 class="name"></h2>
            <div class="note"></div>
        </div>

        <div class="historique-trajets">
            <h2>Historique de trajets</h2>
            <div class="liste-trajets"></div>
        </div>
    </div>

</template>
  
<script>
  
export default {
    name: "ProfilPage",
    props: {
        msg: String
    },
    mounted() {
        const name = "Yanis"; // TODO : récupérer le nom de l'utilisateur
        const note = 3; // TODO : récupérer la note de l'utilisateur


        // SCRIPT NAME

        document.querySelector(".name").innerHTML = name;

        // SRIPT NOTE

        if (note == 0) {
            document.querySelector(".note").innerHTML = "<img class='star' src='stars/0.png' alt=''>";
        }
        else if (note == 1) {
            document.querySelector(".note").innerHTML = "<img class='star' src='stars/1.png' alt=''>";
        }
        else if (note == 2) {
            document.querySelector(".note").innerHTML = "<img class='star' src='stars/2.png' alt=''>";
        }
        else if (note == 3) {
            document.querySelector(".note").innerHTML = "<img class='star' src='stars/3.png' alt=''>";
        }
        else if (note == 4) {
            document.querySelector(".note").innerHTML = "<img class='star' src='stars/4.png' alt=''>";
        }
        else if (note == 5) {
            document.querySelector(".note").innerHTML = "<img class='star' src='stars/5.png' alt=''>";
        }


        // TODO : récupérer l'historique des trajets de l'utilisateur

        // script de test

        // generer un tableau de trajet fictif

        const trajets = [
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
        ];

        // generer le tableau html

        for(let a = 0, i = trajets.length; i > 0; i--){
            document.querySelector(".liste-trajets").innerHTML += "<div class='trajet'><div class='date'>"+trajets[a].date+"</div><div class='depart'>"+trajets[a].depart+"</div><div class='arrivee'>"+trajets[a].arrivee+"</div><div class='distance'>"+trajets[a].distance+"</div><div class='duree'>"+trajets[a].duree+"</div><div class='prix'>"+trajets[a].prix+"</div></div>";
            a++;
        }

        

    }
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
    background-color: rgb(224, 224, 224);
    border-radius: 30px;
    padding: 30px;
}

.historique-trajets h2{
    text-align: center;
    padding: 20px;
    font-size: 40px;
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
    background-color: rgb(182, 182, 182) ;
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