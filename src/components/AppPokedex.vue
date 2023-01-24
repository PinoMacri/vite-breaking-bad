<script>
import AppCard from "./AppCard.vue";
import { OhVueIcon } from "oh-vue-icons"
export default {
    name: "AppPokedex",
    components: {
        AppCard: AppCard,
        "v-icon": OhVueIcon,
    }
}
</script>

<template>
    <div id="pokedex" class="m-5 d-flex justify-content-center align-items-center">
        <div id="contentCard" class="d-flex flex-wrap justify-content-center align-items-center ">
            <app-card></app-card>
            <v-icon id="iconPikachu" name="pi-pikachu" animation="ring" speed="slow" scale="5" />
            <v-icon id="iconVenusaur" name="pi-venusaur" animation="ring" speed="slow" scale="5" />
            <v-icon id="iconBlastoise" name="pi-blastoise" animation="ring" speed="slow" scale="5" />
            <v-icon id="iconCharizard" name="pi-charizard" animation="ring" speed="slow" scale="5" />
        </div>
        <div>

        </div>
    </div>

</template>

<style scoped>
#pokedex {
    background-color: #DFDEDE;
    height: 700px;
    border-radius: 30px;
    position: relative;
}

#iconPikachu {
    position: absolute;
    top: -30px;
    left: -30px;
}

#iconCharizard {
    position: absolute;
    bottom: -30px;
    left: -30px;
}

#iconBlastoise {
    position: absolute;
    bottom: -30px;
    right: -30px;
}

#iconVenusaur {
    position: absolute;
    top: -30px;
    right: -30px;
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