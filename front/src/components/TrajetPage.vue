<template>
    <div class="trajet-fenetre">
        <div class="adresses">
            <div class="trajet-depart">
                {{ trajet.depart }}
            </div>
            <div class="to">
                <img class="fleche" src="../../public/fleche.png">
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
                <img src="../../public/logo.png" alt="Avatar" >
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
            <div class="infos-left">
                <div class="trajet-distance">
                    <p><span class="titre-detail">Distance : </span>{{ trajet.distance }}</p>
                </div>
                <div class="trajet-duree">
                    <p><span class="titre-detail">Durée : </span>{{ trajet.duree }}</p>
                </div>
                <div class="trajet-prix">
                    <p><span class="titre-detail">Prix : </span>{{ trajet.prix }}</p>
                </div>
            </div>

            <div class="infos-right">
                <a v-if="trajet.etat == 'disponible' && trajet.conducteur_id != userId && !isPassenger && userId != null" class="check-trajet" href="" @click.prevent="abonnement">Choisir ce trajet</a>
                <a v-else-if="trajet.etat == 'disponible' && isPassenger" class="check-trajet" href="" @click.prevent="desabonnement">Quitter le trajet</a>
                <a v-else-if="trajet.etat == 'disponible' && trajet.conducteur_id == userId" class="check-trajet" href="" @click.prevent="desabonnement">Supprimer le trajet</a>
                <p v-else-if="trajet.etat == 'termine'" class="termine-trajet" href="">Trajet terminé</p>
            </div>
        </div>

    </div>
</template>

<script>
import { getInfoCovoiturage } from '../service/CovoiturageService.ts';
import { abonnement } from '../service/CovoiturageService.ts';
import { desabonnement } from '../service/CovoiturageService.ts';
export default {
    name: "TrajetPage",
    props: {
        msg: String
    },
    data() {
        return {

            trajet : {},
            conducteur : {},

            // liste de passagers
            passagers : [],
            isPassenger : false,
            userId : localStorage.getItem('userId'),
        };
    },
    async created() {
        const data = await getInfoCovoiturage(this.$route.params.id);
        let state = '';
        if (data.etat == 1){
            state = 'disponible';
        } else if (data.etat == 2){
            state = 'en cours';
        } else {
            state = 'termine';
        }
        
        this.trajet = {
            depart: data.localisationdepart,
            arrivee: data.localisationarrive,
            distance: data.distance + 'km',
            duree: '1h00',
            prix: data.prix + '€',
            etat: state,
            conducteur_id: data.conducteur_id
        };


        this.conducteur = {
            prenom: data.conducteur.prenom,
            nom: data.conducteur.nom,
            note: "5",
            voiture: data.marque + ' ' + data.modele,
        };
        
        this.passagers = data.passagers;
        for(let i = 0; i < this.passagers.length; i++){
            if(this.passagers[i].id == this.userId){
                this.isPassenger = true;
            }
        }
    },
    methods: {
        async abonnement(){
            await abonnement(this.$route.params.id);
        },

        async desabonnement(){
            await desabonnement(this.$route.params.id);
        } 
    }
}
</script>

<style scoped>

.infos-right{
    display: flex;
    align-items: center;
}

.check-trajet{
    background-color: rgb(141, 206, 122);
    margin: 20px;
    font-size: 20px;
    text-decoration: none;
    color: black;
    padding: 20px;
    transition: 0.2s;
}

.termine-trajet{
    background-color: rgb(170, 170, 170);
    margin: 20px;
    font-size: 20px;
    text-decoration: none;
    color: black;
    padding: 20px;
    transition: 0.2s;
}

.check-trajet:hover{
    background-color: rgb(141, 218, 118);
}

.titre-detail{
    font-weight: bold;
}

.trajet-distance, .trajet-duree, .trajet-prix{
    font-size: 20px;
    margin: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 2px;
    padding-bottom: 2px;
    background-color: rgb(170, 170, 170);
}

.infos{
    margin-top: 30px;
    background-color: rgb(211, 211, 211);
    padding: 20px;
    display: flex;
    justify-content: space-between;
}

.passagers-liste{
    width: 1000px;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
}

.passager{
    padding: 20px;
    display: flex;
    align-items: center;
    background-color: rgb(211, 211, 211);
    margin-bottom: 20px;
    width: 400px;
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

.to{
    margin: auto;
}

.fleche{
    width: 100px;
    height: 100px;
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