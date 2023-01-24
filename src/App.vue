<script>
import axios from "axios"
import { store } from "./store"
import AppPokedex from "./components/AppPokedex.vue"

export default {
  components: {
    AppPokedex: AppPokedex,
  },
  data() {
    return {
      store: store,
      pokemons: [],
    }
  },
  created() {
    axios.get("https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=1")
      .then((response) => {
        store.pokemons = response.data.docs
      })
  }
}

</script>

<template>
  <app-pokedex></app-pokedex>
</template>

<style>
img {
  height: 100px;
}
</style>