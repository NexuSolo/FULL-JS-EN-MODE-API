<template>
    <div class="covoit-en-cours">
    </div>
</template>

<script>
export default {
    name: 'Covoit_en_cours',
    props: {
        msg: String
    }
}
</script>

<style>

.covoit-en-cours{
    margin: auto;
    padding: 0;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-around;
}



.content{
    width: 700px;
    height: 400px;
    margin: auto;
    background-color: #cecece;
}

.img-car{
    width: 700px;

    margin: auto;
}

</style>