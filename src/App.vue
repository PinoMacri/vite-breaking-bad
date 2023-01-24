<script>
import axios from "axios"
export default {
  data() {
    return {
      pokemon: [],

    }
  },
  created() {
    axios.get("https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=10&page=1")
      .then((response) => {
        console.log(response.data)
      })
  }
}

</script>

<template>
  <p class="text-center">Seeeeeeeeeeee</p>
</template>

<style>

</style>