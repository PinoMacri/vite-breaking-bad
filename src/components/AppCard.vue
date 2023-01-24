<script>
import { store } from "../store"
export default {
    name: "AppCard",
    data() {
        return {
            store: store,
            textblue: "Blue",
            textyellow: "Yellow",
            textbrown: "Brown",


        }

    }
}
</script>

<template>

    <div v-for="pokemon in store.pokemons" :key="pokemon.id" class="cards text-center d-flex justify-content-center ">
        <div id="cardImg" :class="
        { 'blue': pokemon.color === 'Blue' },
        { 'yellow': pokemon.color === 'Yellow' },
        { 'brown': pokemon.color === 'Brown' }"
            class="d-flex flex-column justify-content-between align-items-center p-3">
            <div id="circleImg" class="d-flex align-items-center justify-content-center">
                <img :src=pokemon.imageUrl alt="">
            </div>
            <div> {{`#${pokemon.number} `}} </div>
            <div id="namePokemon">{{ pokemon.name }}</div>
            <div id="typePokemon">{{ pokemon.type1 }}</div>
        </div>


    </div>

</template>

<style lang="scss" scoped>
.blue {
    background-image: linear-gradient(white, rgb(0, 119, 255));
}

.yellow {
    background-image: linear-gradient(white, goldenrod);
}

.brown {
    background-image: linear-gradient(white, brown);
}
















img {
    width: 75px;
    height: 75px;
    object-fit: cover;
}

#cardImg {
    width: 220px;
    height: 280px;
    border: 1px solid white;
    border-radius: 30px;

}

#circleImg {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: white;
}

#namePokemon {
    text-transform: uppercase;
    font-weight: bold;
}

#typePokemon {
    font-style: oblique;
}

.cards {
    width: 20%;

}
</style>