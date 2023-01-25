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
      typePokemons: [],
      selected: "Tutti i Pokemon",
      apiUri: "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=100",
    }
  },
  methods: {
    fetchPokemonsStarted() {

      axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=100`)
        .then((response) => {
          store.pokemons = response.data.docs
        })


    },
    fetchPokemonsStarted2() {

      axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=100`)
        .then((response) => {
          store.pokemons = response.data.docs
        })
      this.selected = "Tutti i Pokemon"

    },
    fetchPokemons() {

      axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=100&eq[type1]=${this.selected}`)
        .then((response) => {
          store.pokemons = response.data.docs
        })

    },
  },

  created() {
    this.fetchPokemonsStarted()

    axios.get("https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1")
      .then((response) => {
        store.typePokemons = response.data
      })
  }
}

</script>

<template>
  <div class="d-flex justify-content-between mx-5">

    <div id="contenitoreBottoni" class="d-flex mt-3">
      <div id="buttonBlue" class="m-2"></div>
      <div id="buttonRed" class="styleButton m-2"></div>
      <div id="buttonYellow" class="styleButton m-2"></div>
      <div id="buttonGreen" class="styleButton m-2"></div>
    </div>

    <div class="d-flex justify-content-center align-items-center tipoPokemon">
      <img src="../public/Poké_Ball_icon.svg.png" alt="">
      <label class="p-2" for="select">Inserisci il Tipo di Pokemon:</label>
      <select class="px-2 py-1" v-model="selected" @change=fetchPokemons()>
        <option class="" disabled>Tutti i Pokemon</option>
        <option class="" v-for="typePokemon in store.typePokemons">{{ typePokemon }}</option>
      </select>
      <button class="m-2 px-2 py-1" v-on:click="fetchPokemonsStarted2()">Tutti i Pokemon</button>
    </div>

    <div id="contenitoreLogoPokemon" class="mx-5 mt-4">
      <img id="logoPokemon" src="../public/pngegg.png" alt="">
    </div>
  </div>


  <app-pokedex></app-pokedex>
</template>

<style>
body {
  background-color: #C52919;

}

.tipoPokemon label {
  font-weight: bold;
}

.tipoPokemon button {
  border-radius: 20px;

}

select.px-2 {
  border-radius: 20px;
}

.tipoPokemon img {
  width: 50px;
}

#buttonBlue {
  border: 5px solid white;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background-image: linear-gradient(to right, white, blue)
}

#buttonRed {
  background-image: linear-gradient(to right, white, red)
}

#buttonYellow {
  background-image: linear-gradient(to right, white, yellow)
}

#buttonGreen {
  background-image: linear-gradient(to right, white, green)
}

.styleButton {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 5px solid white;
}

#logoPokemon {
  height: 100px;
}
</style>