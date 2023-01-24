<script>
import AppCard from "./AppCard.vue"
export default {
    name: "AppPokedex",
    components: {
        AppCard: AppCard,
    }
}
</script>

<template>
    <div id="pokedex" class="m-5 d-flex justify-content-center align-items-center">
        <div id="contentCard" class="d-flex flex-wrap justify-content-center align-items-center ">
            <app-card></app-card>
        </div>
    </div>

</template>

<style scoped>
#pokedex {
    background-color: #DFDEDE;
    height: 700px;
    border-radius: 30px;
}

#contentCard {
    height: 90%;
    width: 96%;
    background-image: url("../assets/kalos_pokedex_wallpaper_by_kalos.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    overflow-y: scroll;
}
</style>