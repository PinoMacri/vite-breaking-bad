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
      pokePage: 21,
      pokeAdd: 14,
      dinamicName: `&q[name]=${this.valueName}`
    }
  },
  methods: {
    fetchPokemonsStarted() {
      store.isLoading = true;
      axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=21`)
        .then((response) => {
          store.pokemons = response.data.docs
        }).catch(error => { console.log(error) })
        .then(() => {
          store.isLoading = false;
        });
    },
    onChangeTendina(e) {

      const clientHeight = e.target.clientHeight
      const scrollHeight = e.target.scrollHeight
      const scrollTop = e.target.scrollTop
      if (clientHeight === scrollHeight) return;
      if (scrollTop + clientHeight >= scrollHeight) {
        this.pokePage = parseInt(this.pokePage + this.pokeAdd)
        if (this.selected === 'Tutti i Pokemon') {

          axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=${this.pokePage}&q[name]=${this.valueName}`)
            .then((response) => {
              store.pokemons = response.data.docs
            })
        } else if (this.selected != 'Tutti i Pokemon') {

          axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=${this.pokePage}&eq[type1]=${this.selected}`)
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
      this.pokePage = 21
      if (this.selected === 'Tutti i Pokemon') {
        store.pokemons = ""
        this.pokePage = 21
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
        store.pokemons = ""
        this.pokePage = 21
        axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=${this.pokePage}&q[name]=${this.valueName}`)
          .then((response) => {
            store.pokemons = response.data.docs

          })

      }
      else if (this.selected != 'Tutti i Pokemon' && this.valueName != "") {
        store.pokemons = ""
        this.pokePage = 21
        axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=${this.pokePage}&eq[type1]=${this.selected}&q[name]=${this.valueName}`)
          .then((response) => {

            store.pokemons = response.data.docs
          })
      } else if (this.selected === 'Tutti i Pokemon' && this.valueName === "") {
        store.pokemons = ""
        this.pokePage = 21
        axios.get(`https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=21&page=1`)
          .then((response) => {

            store.pokemons = response.data.docs
          })
        axios.get("https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1")
          .then((response) => {

            store.typePokemons = response.data
          })
      } else if (this.valueName === "") {
        store.pokemons = ""
        this.pokePage = 21
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

    <div class="contatore">
      <p v-if="this.pokePage < 1048">Pokemon sul Pokedex: {{ this.store.pokemons.length }} /
        1048
      </p>
      <p v-else>Complimenti, hai visualizzato nel tuo Pokedex tutti i 1048 Pokemon esistenti</p>
    </div>



    <div id="contenitoreLogoPokemon" class="mx-5 mt-4">
      <img id="logoPokemon" src="../public/pngegg.png" alt="">
    </div>
  </div>



  <div id="pokedex" class="m-5 mt-1 d-flex justify-content-center align-items-center">

    <div id="contentCard" class="d-flex flex-wrap justify-content-center  p-3 " @scroll="onChangeTendina">

      <div v-if="store.isLoading" class="loading text-center">
        <img class="loader" src="../public/Poké_Ball_icon.svg.png" alt="">
        <p>Caricamento in corso...</p>
      </div>
      <div v-if="store.pokemons.length === 0">
        <p>Sembra che non esistano Pokèmon con questo nome !</p>
      </div>

      <app-card></app-card>

      <v-icon id="iconPikachu" name="pi-pikachu" animation="ring" speed="slow" scale="5" />
      <v-icon id="iconVenusaur" name="pi-venusaur" animation="ring" speed="slow" scale="5" />
      <v-icon id="iconBlastoise" name="pi-blastoise" animation="ring" speed="slow" scale="5" />
      <v-icon id="iconCharizard" name="pi-charizard" animation="ring" speed="slow" scale="5" />
    </div>
  </div>
</template>

<style>
p {
  font-weight: bold;
}

.loading {
  font-weight: bold;
}

.loader {
  width: 100px;
  height: 100px;
  animation-name: ruota;
  animation-duration: 1000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes ruota {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.contatore {
  font-weight: bold;
  position: absolute;
  right: 130px;
  top: 208px;
  z-index: 2;
}

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
  background: linear-gradient(to right, white, blue);

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

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
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
  top: -60px;
  left: -30px;
}

#iconCharizard {
  position: absolute;
  bottom: -60px;
  left: -30px;
}

#iconBlastoise {
  position: absolute;
  bottom: -60px;
  right: -30px;
}

#iconVenusaur {
  position: absolute;
  top: -60px;
  right: -30px;
}

#contentCard {
  height: 90%;
  width: 96%;
  background-color: rgb(175, 165, 165);
  overflow-y: scroll;
}
</style>