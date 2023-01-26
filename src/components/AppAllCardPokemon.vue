<script>
import { store } from "../store"
export default {
    name: "AppAllCardPokemon",
    data() {
        return {
            store: store,

        }

    }
}
</script>

<template>

    <div v-for="pokemon in store.pokemons" :key="pokemon._id"
        class=" cards mb-4 mt-3 mx-3 text-center d-flex justify-content-center ">
        <div :class="pokemon.type1" class="cardImg d-flex flex-column justify-content-between align-items-center p-3">
            <div class="circleImg d-flex align-items-center justify-content-center">
                <img :src=pokemon.imageUrl alt="">
            </div>
            <div> {{`#${pokemon.number} `}} </div>
            <div class="namePokemon">{{ pokemon.name }}</div>
            <div class="typePokemon">{{ pokemon.type1 }}</div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
div {
    color: white;
}

.Water {
    background-image: linear-gradient(white, rgb(0, 119, 255));
}

.Dark {
    background-image: linear-gradient(white, rgb(0, 0, 0));
}

.Fighting {
    background-image: linear-gradient(white, brown);
}

.Fire {
    background-image: linear-gradient(white, red);
    ;
}

.Grass {
    background-image: linear-gradient(white, rgb(0, 194, 10));
}

.Bug {
    background-image: linear-gradient(white, rgb(139, 0, 121));
}

.Normal {
    background-image: linear-gradient(white, rgb(44, 23, 23));
}

.Poison {
    background-image: linear-gradient(white, rgb(255, 0, 119));
}

.Electric {
    background-image: linear-gradient(white, goldenrod);
}

.Ground {
    background-image: linear-gradient(white, rgb(100, 35, 35));
}

.Ice {
    background-image: linear-gradient(white, rgb(32, 44, 218));
}

.Fairy {
    background-image: linear-gradient(white, pink);
}

.Steel {
    background-image: linear-gradient(white, rgb(148, 137, 108));
}

.Psychic {
    background-image: linear-gradient(white, rgb(218, 32, 147));
}

.Rock {
    background-image: linear-gradient(white, rgb(65, 63, 57));
}

.Dragon {
    background-image: linear-gradient(white, rgb(26, 26, 75));
}

.Ghost {
    background-image: linear-gradient(white, rgb(57, 57, 65));
}

.Flying {
    background-image: linear-gradient(white, rgb(2, 133, 126));
}

img {
    width: 75px;
    height: 75px;
    object-fit: cover;
}

.cardImg {
    width: 220px;
    height: 320px;
    border: 1px solid white;
    border-radius: 30px;

}

div.circleImg {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: white;
}

.namePokemon {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
}

.typePokemon {
    font-style: oblique;
}

.cards {
    width: 10%;
    height: 320px;

}
</style>