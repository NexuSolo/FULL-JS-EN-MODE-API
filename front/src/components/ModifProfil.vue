<template>
    <div class="modif-profil-fenetre">
        <div class="modif-profil">
            <div class="modif-profil-title">
                <h1>Modifier mon profil</h1>
            </div>
            <div class="modif-profil-form">
                <form action="">

                    <div class="moi">
                        <div class="moi-left">
                            <img :src=user.profilPic alt="">
                            <div class="modif-profil-form-submit">
                                <input type="submit" value="Modifier">
                            </div>
                        </div>
                        <div class="moi-right">
                            <div class="modif-profil-form-nom">
                                <label for="nom">Nom</label>
                                <input type="text" name="nom" id="nom" :value="user.nom">
                            </div>
                            <div class="modif-profil-form-prenom">
                                <label for="prenom">Prénom</label>
                                <input type="text" name="prenom" id="prenom" :value="user.prenom">
                            </div>
                            <div class="modif-profil-form-mail">
                                <label for="mail">Mail</label>
                                <input type="email" name="mail" id="mail" :value="user.mail">
                            </div>
                            <div class="modif-profil-form-profil-pic">
                                <label for="profil-pic">Photo de profil</label>
                                <input type="file" name="profil-pic" id="profil-pic">
                            </div>
                        </div>
                    </div>                                        
                </form>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: "ModifProfil",
    props: {
        msg: String
    },
    data() {
        return {
            user: {
                nom: "Rozier",
                prenom: "Yanis",
                mail: "yanis.rozier@orange.fr",
                note: 3,
                profilPic: "https://www.w3schools.com/howto/img_avatar.png",
                voitureModele: "Peugeot 308",
                voitureImmatriculation: "AA-123-AA",
                voiturePhoto : "https://www.w3schools.com/howto/img_avatar.png"
            }
        };
    },
}

</script>

<style scoped>

.moi-right div{
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.moi-right{
    width: 50%;
    height: 300px;
    background-color: rgb(226, 226, 226);
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 20px;
}

img{
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;

}

.moi{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 40px;

}

h1{
    text-align: center;
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 20px;

}



.modif-profil-fenetre{
    width : 1200px;
    margin-left: auto;
    margin-right: auto;
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

</style>