<script>
import { store } from "../store"
export default {
    name: "AppTendina",
    data() {
        return {
            store: store,

        }

    }
}
</script>

<template>
    <div class="d-flex justify-content-center">
        <label for="select">Inserisci il Tipo di Pokemon:</label>
        <select name="select" id="">
            <option value="">Tutti</option>
            <option v-for="typePokemon in store.typePokemons" value="">
                {{ typePokemon }}
            </option>
        </select>
    </div>
</template>

<style>

</style>