<script>
import axios from "axios"
import AppCard from "./components/AppAllCardPokemon.vue";
import { OhVueIcon } from "oh-vue-icons"
import { store } from "./store"


export default {
  components: {

    AppCard: AppCard,

    "v-icon": OhVueIcon,
  },
  data() {
    return {
      store: store,
      pokemons: [],
      typePokemons: [],
      selected: "Tutti i Pokemon",
      valueName: "",
      currentPage: 1,
      apiUri: "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?page=1",
      page: 1,
      pokePage: 16,
    }
  },
  methods: {
    fetchPokemonsStarted() {
      axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=16`)
        .then((response) => {
          store.pokemons = response.data.docs
        })
    },
    onChangeTendina(e) {
      const clientHeight = e.target.clientHeight
      const scrollHeight = e.target.scrollHeight
      const scrollTop = e.target.scrollTop
      if (scrollTop + clientHeight >= scrollHeight) {
        this.currentPage++
        this.pokePage = parseInt(this.pokePage + 8)
        if (this.selected === 'Tutti i Pokemon') {
          axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=${this.pokePage}&q[name]=${this.valueName}`)
            .then((response) => {
              store.pokemons = response.data.docs
            })
        } else {

          axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=${this.pokePage}&eq[type1]=${this.selected}&q[name]=${this.valueName}`)
            .then((response) => {

              store.pokemons = response.data.docs
            })
        }


      }
    },

    fetchPokemonsStarted2() {
      axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=${this.pokePage}`)
        .then((response) => {
          store.pokemons = response.data.docs
        })
      this.selected = "Tutti i Pokemon"
    },
    fetchPokemons() {
      this.valueName = ''
      store.pokemons = ""
      this.pokePage = 16
      if (this.selected === 'Tutti i Pokemon') {
        axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=${this.pokePage}`)
          .then((response) => {
            store.pokemons = response.data.docs
          })
      } else {

        axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=${this.pokePage}&eq[type1]=${this.selected}`)
          .then((response) => {
            store.pokemons = response.data.docs
          })
      }

    },
    searchNamePokemons() {
      if (this.selected === 'Tutti i Pokemon' && this.valueName != "") {
        axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=${this.pokePage}&q[name]=${this.valueName}`)
          .then((response) => {
            store.pokemons = response.data.docs

          })

      }
      else if (this.selected != 'Tutti i Pokemon' && this.valueName != "") {
        axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=${this.pokePage}&eq[type1]=${this.selected}&q[name]=${this.valueName}`)
          .then((response) => {

            store.pokemons = response.data.docs
          })
      } else if (this.selected === 'Tutti i Pokemon' && this.valueName === "") {

        axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=16&page=1`)
          .then((response) => {

            store.pokemons = response.data.docs
          })
        axios.get("https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1")
          .then((response) => {

            store.typePokemons = response.data
          })
      } else if (this.valueName === "") {
        axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=${this.pokePage}&eq[type1]=${this.selected}&q[name]=${this.valueName}`)
          .then((response) => {
            store.pokemons = response.data.docs
          })
      }

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

    <div class="mt-4">

      <div class="d-flex  align-items-center tipoPokemon pb-2">
        <img src="../public/Poké_Ball_icon.svg.png" alt="">
        <label class="p-2" for="select">Inserisci il Tipo di Pokemon:</label>
        <select class="px-2 py-1" v-model="selected" @change=fetchPokemons()>
          <option class="">Tutti i Pokemon</option>
          <option class="" v-for="typePokemon in store.typePokemons">{{ typePokemon }}</option>
        </select>

      </div>

      <div class="d-flex  align-items-center tipoPokemon">
        <img src="../public/Poké_Ball_icon.svg.png" alt="">
        <label class="p-2" for="select">Inserisci il Nome del Pokemon:</label>
        <input v-model.trim="valueName" v-on:keyup="searchNamePokemons()" class="inputName" type="text">
      </div>

      <div class="d-flex my-2 d-flex align-items-center tipoPokemon">
        <img src="../public/Poké_Ball_icon.svg.png" alt="">
        <p class="m-0 p-2 allenatore">Scrolla in basso per vedere tutti i Pokèmon</p>
      </div>
    </div>

    <div>
      <p>Pokemon visualizzati attualmente sul Pokedex: {{ this.pokePage }} / 1048 </p>
    </div>



    <div id="contenitoreLogoPokemon" class="mx-5 mt-4">
      <img id="logoPokemon" src="../public/pngegg.png" alt="">
    </div>
  </div>



  <div id="pokedex" class="m-5 mt-1 d-flex justify-content-center align-items-center">

    <div id="contentCard" class="d-flex flex-wrap justify-content-center  p-3 " @scroll="onChangeTendina">

      <app-card></app-card>

      <v-icon id="iconPikachu" name="pi-pikachu" animation="ring" speed="slow" scale="5" />
      <v-icon id="iconVenusaur" name="pi-venusaur" animation="ring" speed="slow" scale="5" />
      <v-icon id="iconBlastoise" name="pi-blastoise" animation="ring" speed="slow" scale="5" />
      <v-icon id="iconCharizard" name="pi-charizard" animation="ring" speed="slow" scale="5" />
    </div>
  </div>
</template>

<style>
body {
  background-color: #C52919;

}

.allenatore {
  font-weight: bold;
}

.inputName {
  border-radius: 20px;
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
  background-color: rgba(0, 0, 0, 0.356);
  overflow-y: scroll;
}
</style>