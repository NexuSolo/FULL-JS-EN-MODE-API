<template>
    <div class="trajet-fenetre">
        

        <div class="adresses">
            <div class="depart">
                {{ trajet.depart }}
            </div>
            <div class="arrivee">  
                {{ trajet.arrivee }}
            </div>
        </div>

        <div>
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
            }
            
        };
    },
}
</script>

<style>

.trajet-fenetre{
    width: 1000px; 
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(133, 212, 133);
}

.adresses{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 200px;
    background-color: rgb(204, 99, 99);
    margin-left: auto;
    margin-right: auto;
}

.depart{
    width : 300px;
    height: 100px;
    background-color: rgb(148, 148, 148);
    margin: auto;
}

.arrivee{
    width : 300px;
    height: 100px;
    background-color: rgb(148, 148, 148);
    margin: auto;
}

</style>