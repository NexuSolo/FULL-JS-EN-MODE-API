<template>
    <div class="fenetre-footer">

            <div class="footer-liens">
                <a href="">A propos</a>
                <a href="">Contact</a>
                <a href="">Mentions légales</a>
            </div>
    </div>

</template>

<script>

export default {
    name: "FooterBar",
    props: {
        msg: String
    },
}

</script>

<style>


.fenetre-footer{
    width: 100%;
    height: 60px;
    background-color: rgb(223, 223, 223);
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 60px;
}

.footer-liens{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    color: white;
}

</style>