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
                        <input type="text" name="depart" id="depart">
                    </div>
                    <div class="create-trajet-form-arrivee">
                        <label for="arrivee">Arrivée</label>
                        <input type="text" name="arrivee" id="arrivee">
                    </div>
                    <div class="create-trajet-form-date">
                        <label for="date">Date</label>
                        <input type="date" name="date" id="date">
                    </div>
                    <div class="create-trajet-form-prix">
                        <label for="prix">Prix</label>
                        <input type="text" name="prix" id="prix">
                    </div>
                    <div class="create-trajet-form-places">
                        <label for="places">Nombre de places</label>
                        <input type="text" name="places" id="places">
                    </div>
                    <div class="create-trajet-form-submit">
                        <input type="submit" value="Créer">
                    </div>
                </form>
            </div>
        </div>

    </div>

</template>

<script>

export default {
    name: 'CreateTrajet',
    props: {
        msg: String
    },
}

</script>


<style>

.create-trajet-fenetre input{
    height: 30px;
    border-radius: 5px;
    border: rgb(216, 216, 216) solid 1px;
    margin-bottom: 10px;
    background-color: rgb(216, 216, 216);
}
</style>