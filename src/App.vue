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
    axios.get("https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=100")
      .then((response) => {
        store.pokemons = response.data.docs
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