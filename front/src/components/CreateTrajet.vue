<template>

    <div class="create-trajet-fenetre">
        <div class="create-trajet">
            <div class="create-trajet-title">
                <h1>Créer un trajet</h1>
            </div>
            <div class="create-trajet-form">
                <form action="">
                    <div class="create-trajet-form-depart">
                        <label for="depart">Départ</label>
                        <input type="text" name="depart" id="depart" v-model="depart">
                    </div>
                    <div class="create-trajet-form-arrivee">
                        <label for="arrivee">Arrivée</label>
                        <input type="text" name="arrivee" id="arrivee" v-model="arrivee">
                    </div>
                    <div class="create-trajet-form-date">
                        <label for="date">Date</label>
                        <input type="date" name="date" id="date" v-model="date">
                    </div>
                    <div class="create-trajet-form-heure">
                        <label for="heure">Heure</label>
                        <input type="time" name="heure" id="heure" v-model="heure">
                    </div>
                    <div class="create-trajet-form-prix">
                        <label for="prix">Prix</label>
                        <input type="number" name="prix" id="prix" v-model="prix">
                    </div>
                    <div class="create-trajet-form-places">
                        <label for="places">Nombre de places</label>
                        <input type="number" name="places" id="places" v-model="places">
                    </div>
                    <div class="create-trajet-form-submit">
                        <input type="submit" value="Créer" @click.prevent="submitForm">
                    </div>
                </form>
            </div>
        </div>

    </div>

</template>

<script>
import { createTrajet } from '../service/CovoiturageService.ts';
export default {
    name: 'CreateTrajet',
    props: {
        msg: String
    },
    data() {
        return {
            depart: '',
            arrivee: '',
            date: '',
            heure: '',
            prix: '',
            places: ''
        }
    },
    methods: {
        async submitForm() {
            try {
                const localisationDepart = this.depart;
                const localisationArrive = this.arrivee;
                const dateDepart = this.date+" "+this.heure;
                const dateArrivee = this.date+" "+this.heure;
                const distance = this.prix;
                const prix = this.prix;
                const nombreDePlace = this.places;
                const marque = 'Peugeot';
                const modele = 'modele';
                const description = 'description';
                const photo = 'photo';
                await createTrajet(localisationDepart, localisationArrive, dateDepart, dateArrivee, distance, prix, nombreDePlace, marque, modele, description, photo);
                if (!localStorage.getItem('token')) {
                    this.$router.push('/connection');
                }         
            } catch (error) {
                console.error('Creation failed:', error);
            }
        }
    }
}
</script>

<style scoped>

.create-trajet-form-submit input{
    width: 100%;
    background-color: rgb(69, 69, 207);
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: white;
    font-size: 20px;
    font-weight: 300;
    cursor: pointer;
}

.create-trajet-form-submit input:hover{
    background-color: rgb(121, 121, 233);
}

.create-trajet-form-submit{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

label{
    font-size: 20px;
    font-weight: 300;
}

h1{
   margin-bottom: 20px;
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

.create-trajet-form{
    background-color: rgb(206, 206, 206);
    padding: 20px;
    border-radius: 10px;

}

.create-trajet-fenetre {
    width: 1200px;
    margin: auto;
}

.create-trajet{
    width: 600px;
    margin: auto;
    padding: 40px;
}

.create-trajet-form-depart, .create-trajet-form-arrivee, .create-trajet-form-date, .create-trajet-form-heure, .create-trajet-form-prix, .create-trajet-form-places{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
}

</style>