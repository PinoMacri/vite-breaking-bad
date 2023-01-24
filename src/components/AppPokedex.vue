<script>
import { store } from "../store"
export default {
    name: "AppPokedex",
    data() {
        return {
            store: store,
        }

    }
}
</script>

<template>
    <div class="d-flex">
        <div v-for="pokemon in store.pokemons" :key="pokemon.id" class="m-5 flew-wrap">
            <div> {{`#${pokemon.number} `}} </div>
            <div> <img :src=pokemon.imageUrl alt=""> </div>
            <div>{{ pokemon.name }}</div>
            <div>{{ pokemon.type1 }}</div>
        </div>
    </div>
</template>

<style>

</style>