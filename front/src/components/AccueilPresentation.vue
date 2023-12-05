<template>

    <div class="accueil-fenetre">
        <div class="accueil-content">

            <div class="accueil-texte">
                <div class="line"></div>
                <h1>Vroum Vroum</h1>
                <h3>Le site de covoiturage pour les étudiants de l'EFREI</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br> 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a class="decouvrir-button" href="">Découvrir les services</a>
            </div>


            <div class="accueil-voiture">
                <div class="blue-box"></div>
                <img class="img-car" src="car.png" alt="car">
            </div>

        </div>



        <form class="search-bar"  action="POST">
            <div class="search-depart">
                <input type="text" name="" id="" placeholder="Départ">
            </div>
            <div class="search-arrivee">
                <input type="text" name="" id="" placeholder="Destination">
            </div>
            <div class="search-button">
                <a href="/" type="submit"><img src="search.png" alt="" width="30px"></a>
            </div>
        </form> 

       
    </div>

</template>

<script>

export default {
    name: 'AccueilPresentation',
    props: {
        msg: String
    }
}

</script>

<style>


.search-bar{
    display: flex;
    justify-content: space-around;
    width: 800px;
    margin: auto;
    margin-top: 100px;
    background-color: rgb(211, 211, 211);
    border-radius: 5px;
    padding: 10px;
}

.search-bar input{
    width: 300px;
    height: 50px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    margin-right: 20px;
    margin-top : auto;
    margin-bottom: auto;
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
    background-color: rgb(69, 69, 207);
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
    background-color: rgb(69, 69, 207);
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
    background-color: rgb(69, 69, 207);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    margin-top: auto;
    margin-bottom: auto;
}

.bouton-connection:hover{
    background-color: rgb(49, 49, 157);
}

.decouvrir-button{
    display: inline-block;
    padding: 10px 20px;
    background-color: rgb(69, 69, 207);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    margin-top: 20px;
    margin-bottom: auto;
}

.decouvrir-button:hover{
    background-color: rgb(49, 49, 157);
}

</style>