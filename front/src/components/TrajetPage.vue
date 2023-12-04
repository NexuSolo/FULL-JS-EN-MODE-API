<template>
    <div class="trajet-fenetre">
        

        <div class="adresses">
            <div class="trajet-depart">
                {{ trajet.depart }}
            </div>
            <div class="trajet-arrivee">  
                {{ trajet.arrivee }}
            </div>
        </div>


        <h2>Conducteur</h2>

        <div class="conducteur">
            <div class="conducteur-info">
                <div class="conducteur-photo">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" >
                </div>
    
                <div class="conducteur-details">
                    <div class="conducteur-prenom">
                        {{ conducteur.prenom }}
                    </div>
                    <div class="conducteur-nom">
                        {{ conducteur.nom }}
                    </div>
                    <div class="conducteur-note">
                        {{ conducteur.note }}
                    </div>
                </div>
            </div>
            <div class="conducteur-voiture">
                <img src="logo.png" alt="Avatar" >
            </div>
        </div>

        <div class="passagers-liste">
            <div v-for = "(passager, index) in passagers" :key="index">
                <h2>Passager {{ index + 1 }} </h2>
                <div class="passager">
                    <div class="passager-photo">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" >
                    </div>
                    <div class="passager-details">
                        <div class="passager-prenom">
                            {{ passager.prenom }}
                        </div>
                        <div class="passager-nom">
                            {{ passager.nom }}
                        </div>
                        <div class="passager-note">
                            {{ passager.note }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="infos">
            <div class="distance">
                {{ trajet.distance }}
            </div>
            <div class="duree">
                {{ trajet.duree }}
            </div>
            <div class="prix">
                {{ trajet.prix }}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TrajetPage",
    props: {
        msg: String
    },
    data() {
        return {

            trajet : {
                depart: "Paris",
                arrivee: "Marseille",
                distance: "800km",
                duree: "8h",
                prix: "50€"
            },

            conducteur : {
                prenom: "Yanis",
                nom: "Rozier",
                voiture: "Peugeot 307",
                note: "5"
            },

            // liste de passagers
            passagers : [
                {
                    prenom: "Nicolas",
                    nom: "Theau",
                    note: "5"
                },
                {
                    prenom: "Sebastien",
                    nom: "Zhou",
                    note: "5"
                },
                {
                    prenom: "Tom",
                    nom: "Rene",
                    note: "5"
                }
            ]
            
        };
    },
}
</script>

<style>

.passagers-liste{
    width: 1000px;
    margin-top: 50px;
}

.passager{
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: rgb(211, 211, 211);
    width: 40%;
    margin-bottom: 20px;
}

.passager-photo img{
    width: 150px;
}



.trajet-fenetre{
    width: 1000px; 
    margin-left: auto;
    margin-right: auto;
}

.adresses{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
}

.trajet-depart, .trajet-arrivee{
    width : 300px;
    background-color: rgb(211, 211, 211);
    margin: auto;
    font-size: 40px;
    text-align: center;
    padding: 20px;
}


.conducteur{
    display: flex;
    justify-content: space-between;
    background-color: rgb(211, 211, 211);
}

.conducteur-info{
    display: flex;
    margin: auto;
    width: 400px;
    height: 200px;
    align-items: center;
}

.conducteur-photo img{
    width: 150px;
}

.conducteur-voiture{
    margin: auto;
    width: 400px;
    height: 200px;
    align-items: center;
}

.conducteur-voiture img{
    position: relative;
    width: 150px;
    top: 50%;
    left: 60%;
    transform: translateY(-50%);
    margin: auto;
    background-color: rgb(170, 170, 170);
}

.conducteur-prenom, .conducteur-nom, .conducteur-note, .passager-prenom, .passager-nom, .passager-note{
    font-size: 20px;
    margin: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 2px;
    padding-bottom: 2px;
    background-color: rgb(170, 170, 170);
}


</style>